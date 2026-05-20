
const revealElements = document.querySelectorAll(".reveal");
function revealOnScroll(){revealElements.forEach((el)=>{if(el.getBoundingClientRect().top < window.innerHeight - 100){el.classList.add("active");}});}
window.addEventListener("load",()=>{revealOnScroll();const loader=document.querySelector(".page-loader");if(loader){setTimeout(()=>loader.classList.add("hide"),500);}});
window.addEventListener("scroll", revealOnScroll);
const form=document.querySelector(".form");
if(form){form.addEventListener("submit",(e)=>{e.preventDefault();alert("Your request is ready. Please contact us by phone or WhatsApp.");});}
