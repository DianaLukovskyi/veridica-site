
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll(){revealElements.forEach((el)=>{if(el.getBoundingClientRect().top < window.innerHeight - 100){el.classList.add("active");}});}
window.addEventListener("load",()=>{revealOnScroll();const loader=document.querySelector(".page-loader");if(loader){setTimeout(()=>loader.classList.add("hide"),500);}});
window.addEventListener("scroll", revealOnScroll);

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
