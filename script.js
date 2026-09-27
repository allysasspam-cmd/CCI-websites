const menuToggle=document.getElementById("menuToggle"),navMenu=document.getElementById("navMenu");
if(menuToggle) menuToggle.addEventListener("click",()=>navMenu.classList.toggle("active"));
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>navMenu?.classList.remove("active")));
document.querySelectorAll(".stat strong").forEach(counter=>{
 const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(!e.isIntersecting)return;let target=+counter.dataset.target,current=0;const tick=()=>{current+=Math.max(1,Math.ceil(target/50));counter.textContent=current>=target?target+"+":current;if(current<target)setTimeout(tick,25)};tick();observer.unobserve(counter)}),{threshold:.5});observer.observe(counter);
});