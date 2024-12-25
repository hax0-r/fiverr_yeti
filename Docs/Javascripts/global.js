const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click',()=>{
    resNav.style.width = "100%"    
})
closeNav.addEventListener('click',()=>{
    resNav.style.width = "0%"
})
