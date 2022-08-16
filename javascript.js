
let nav = document.querySelector("nav");
window.addEventListener("scroll", ()=>{
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("sticky");
    }else{
        nav.classList.remove("sticky")
    }
});
{
    const menuToogle = document.querySelector('.menu-toogle input');
    const nav = document.querySelector('nav ul');
    
    menuToogle.addEventListener('click', function(){
        nav.classList.toggle('slide')
    });
}

{
    const backToTopButton = document.querySelector("#back-to-top-btn");

window.addEventListener("scroll", scrollFunction);

function scrollFunction(){
    if (window.pageYOffset > 300) {
        backToTopButton.style.display = "block";
    }
    else{
        backToTopButton.style.display = "none";
    }
}
backToTopButton.addEventListener("click", backToTop);

function backToTop(){
    window.scrollTo(0, 0);
}
}



