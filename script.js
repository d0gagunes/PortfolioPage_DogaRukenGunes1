var togglebtn=document.querySelector(".togglebtn");
var nav=document.querySelector(".navlinks");
var links=document.querySelector(".navlinks li");

togglebtn.addEventListener("click", function(){
     this.classList.toggle("click");
    nav.classList.toggle("open");
})
var typed=new Typed(" .input",{
    strings:[" Developer ", " Web Designer ", " Computer Engineer "],
    typedSpeed:70,
    backSpeed:55,
    loop:true
});

/*
* Below section for the navigation transaction
*/
const navigations = document.querySelectorAll('.navigation-item')
navigations.forEach(link=>{
    link.addEventListener('click',function(event){
        event.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        targetElement.scrollIntoView({behavior:'smooth'});
    })
})