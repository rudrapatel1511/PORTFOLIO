// header toogle

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})


// typing effect 
let typed = new Typed('.auto-input',{
    strings: ['Front-End Developer','UI-Designer'],
    typeSpeed: 60,
    backSpeed: 20,
    backDelay: 2000,
    loop: true,

})


// active linnk status 
let navLinks = document.querySelectorAll('nav ul li a')

let sections = document.querySelectorAll('section')


window.addEventListener('scroll',function(){
    const scrollpos =window.scrollY + 20
    sections.forEach(section => {
        if(scrollpos > section.offsetTop && scrollpos < (section.offsetTop  + section.offsetHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1)){
                    link.classList.add('active')
                }
            });
        }
    });
});