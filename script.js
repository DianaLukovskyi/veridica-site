
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll(){revealElements.forEach((el)=>{if(el.getBoundingClientRect().top < window.innerHeight - 100){el.classList.add("active");}});}
window.addEventListener("load",()=>{revealOnScroll();const loader=document.querySelector(".page-loader");if(loader){setTimeout(()=>loader.classList.add("hide"),500);}});
window.addEventListener("scroll", revealOnScroll);

const header=document.querySelector(".header");
const nav=header&&header.querySelector(".nav");
if(header&&nav&&!header.querySelector(".menu-toggle")){
  const btn=document.createElement("button");
  btn.type="button";
  btn.className="menu-toggle";
  btn.setAttribute("aria-label","Menu");
  btn.setAttribute("aria-expanded","false");
  btn.textContent="☰";
  nav.before(btn);
  btn.addEventListener("click",(e)=>{
    e.stopPropagation();
    const open=header.classList.toggle("menu-open");
    document.body.classList.toggle("menu-open",open);
    btn.setAttribute("aria-expanded",open?"true":"false");
    btn.textContent=open?"✕":"☰";
  });
  document.addEventListener("click",(e)=>{
    if(!header.contains(e.target)){
      header.classList.remove("menu-open");
      document.body.classList.remove("menu-open");
      btn.setAttribute("aria-expanded","false");
      btn.textContent="☰";
    }
  });
}

const consultationForm=document.querySelector(".consultation-form");
if(consultationForm){
  consultationForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const data=new FormData(consultationForm);
    const name=data.get("name")||"";
    const phone=data.get("phone")||"";
    const email=data.get("email")||"";
    const message=data.get("message")||"";
    const subject=consultationForm.dataset.subject||"VERIDICA";
    const body=["Name / Ім'я: "+name,"Phone / Телефон: "+phone,"Email: "+email,"","Message / Повідомлення:",message].join("\n");
    window.location.href="mailto:info@veridica.net?subject="+encodeURIComponent(subject)+"&body="+encodeURIComponent(body);
  });
}
