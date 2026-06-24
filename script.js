
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll(){revealElements.forEach((el)=>{if(el.getBoundingClientRect().top < window.innerHeight - 100){el.classList.add("active");}});}
window.addEventListener("load",()=>{revealOnScroll();const loader=document.querySelector(".page-loader");if(loader){setTimeout(()=>loader.classList.add("hide"),500);}});
window.addEventListener("scroll", revealOnScroll);

const header=document.querySelector(".header");
const nav=header&&header.querySelector(".nav");
const headerRight=header&&header.querySelector(".header-right");
if(header&&nav&&headerRight){
  let drawer=header.querySelector(".mobile-drawer");
  let backdrop=document.querySelector(".menu-backdrop");
  let btn=header.querySelector(".menu-toggle");

  if(!drawer){
    drawer=document.createElement("div");
    drawer.className="mobile-drawer";
    header.insertBefore(drawer,nav);
    drawer.appendChild(nav);
    drawer.appendChild(headerRight);
  }

  if(!backdrop){
    backdrop=document.createElement("button");
    backdrop.type="button";
    backdrop.className="menu-backdrop";
    backdrop.setAttribute("aria-label","Close menu");
    document.body.appendChild(backdrop);
  }

  if(!btn){
    btn=document.createElement("button");
    btn.type="button";
    btn.className="menu-toggle";
    btn.setAttribute("aria-label","Menu");
    btn.setAttribute("aria-expanded","false");
    btn.textContent="☰";
    header.appendChild(btn);
  }

  function closeMenu(){
    header.classList.remove("menu-open");
    document.body.classList.remove("menu-open");
    btn.setAttribute("aria-expanded","false");
    btn.textContent="☰";
  }

  function openMenu(){
    header.classList.add("menu-open");
    document.body.classList.add("menu-open");
    btn.setAttribute("aria-expanded","true");
    btn.textContent="✕";
  }

  btn.addEventListener("click",(e)=>{
    e.stopPropagation();
    if(document.body.classList.contains("menu-open")) closeMenu();
    else openMenu();
  });

  backdrop.addEventListener("click",closeMenu);

  document.addEventListener("keydown",(e)=>{
    if(e.key==="Escape"&&document.body.classList.contains("menu-open")) closeMenu();
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
