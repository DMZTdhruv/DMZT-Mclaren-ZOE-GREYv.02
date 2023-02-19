const primaryNav = document.querySelector('.navigation');
const navToggle = document.querySelector('.mobile-nav');
const current = document.querySelector('.active');

console.log(current);
navToggle.addEventListener('click', ()=>{
    const visiblity = primaryNav.getAttribute("data-visible");
    const spanrn = current.getAttribute('on-color');
    if(visiblity === "false"){
        primaryNav.setAttribute('data-visible',true);
        navToggle.setAttribute('aria-expanded',true);
    } else if(visiblity === "true"){
        primaryNav.setAttribute('data-visible',false)
        navToggle.setAttribute('aria-expanded',false);
    }
    if(spanrn === "white"){
        current.setAttribute('on-color',"aqua");
        console.log(current);
    } else{
        current.setAttribute('on-color',"white");
    }
});

