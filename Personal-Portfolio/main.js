        // TOGGLE NAVIGATION BAR 
let nevMenu = document.getElementById('navMenu')
let toggleBtn = document.getElementById('toggleBtn')
function myMenuFunction(){
        if(navMenu.className === 'nav-menu'){
           navMenu.className += 'responsive';
           toggleBtn.className = 'uil uil-multiply';
        } else{
                navMenu.className = 'nav-menu';
                toggleBtn.className = 'uil uil-bars';
        }
}
function closeMenu(){
        navMenu.className = 'nav-menu';
}

        // HIDE NAV BAR WHEN SCROLLED TO SECTIONS 
let navLinks = document.querySelectorAll('.nav-links')

function hideNav(){
        navMenu.className = 'nav-menu';
        toggleBtn.className = 'uil uil-bars'
}

navLinks.forEach(link =>{
        link.addEventListener('click', hideNav);
})
        // CHANGE HEADER ON SCROLL 
  window.addEventListener('scroll', headerShadow);
window.onload = headerShadow();

function headerShadow(){
        const navHeader = document.getElementById('header');
        if(document.body.scrollTop> 50 || document.documentElement.scrollTop > 50){
                navHeader.style.boxShadow = '0 4px 10px #000000bb';
                navHeader.style.height = '70px';
                navHeader.style.lineHeight ='70px';
                navHeader.style.background = '#00000078';
                navHeader.style.backdropFilter = 'blur(8px)'
        } else{
                navHeader.style.boxShadow = 'none';
                navHeader.style.height = '90px';
                navHeader.style.lineHeight ='90px';
                navHeader.style.background = '#000000';
                navHeader.style.backdropFilter = 'blur(0px)'
        }
}
        // SCROLL REVAL TOP ANIMATION 
const sr = ScrollReveal({
        origin: 'top',
        distance: '75px',
        duration: 1650,
        reset: false
})
sr.reveal('.featured-name', {delay: 50})
sr.reveal('.featured-text-info', {delay: 50})
sr.reveal('.featured-text-btn', {delay: 60})
sr.reveal('.social-icons', {delay: 90})


sr.reveal('.project-box', {delay: 70})
sr.reveal('.service-box', {delay: 70})

sr.reveal('.top-header', {})


        // SCROLL REVAL LEFT_RIGHT ANIMATION 
const srleft = ScrollReveal ({
        origin: 'left',
        distance: '80px',
        duration: 1750,
        reset: false
})

srleft.reveal('.about-info', {delay: 60})
srleft.reveal('.contact-info', {delay: 60})

const srRight = ScrollReveal ({
        origin: 'right',
        distance: '80px',
        duration: 1750,
        reset: false
})


srleft.reveal('.skills-title', {delay: 50})
srleft.reveal('.skills-box', {delay: 50})
srleft.reveal('.form', {delay: 50})
srleft.reveal('.profile-image', {delay: 60})

        // CHANGE ACTIVE LINK 
const sections = document.querySelectorAll('section[id]');
function scrollActive(){
        const scrollY = window.scrollY;
        sections.forEach(current => {
                const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop -100,
                sectionId = current.getAttribute('id');
                if(scrollY> sectionTop && scrollY <= sectionTop + sectionHeight){
                        document.querySelector('.' + sectionId).classList.add('active-link');
                }  else{
                        document.querySelector('.' + sectionId).classList.remove('active-link')
                }
 })
}
window.addEventListener('load', scrollActive);
window.addEventListener('scroll', scrollActive);

        // SCROLL TO FUNCTION  
        
const easingFunctions = {
        // Cubic easing
        easeInOutCubic: t => t < 0.5 ? 4 * t * t *t : (t-1) * (2*t-2) * (2*t-2) +1,
}

let currentEasingFunction = 'easeInOutCubic';

function scrollToTarget(target, offset = 0, duration = 2000, easingType = currentEasingFunction){
        // If we are midway through a scroll animation , cancel it 
        if(window.scrollAnimation){
                cancelAnimationFrame(window.scrollAnimation);
                window.scrollAnimation = null;
        }

        // Determine target position
        const targetPosition = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY;

        const startPosition = window.scrollY;
        const distance = targetPosition - startPosition - offset;

        // If distance is very small, just jump to position
        if(Math.abs(distance) < 3){
                window.scrollTo(0, targetPosition - offset);
                return;
        }
        
        const startTime = performance.now();
        const easingFunction = easingFunctions[easingType] || easingFunctions.easeInOutCubic;

        // Animation Function
        function scrollAnimation(currentTime){
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Apply easing function 
                const easedProgress = easingFunction(progress);

                // Calculate new position
                const scrollAmount = startPosition + distance * easedProgress;

                // Perform scroll
                window.scrollTo(0, scrollAmount);

                // Continue animation if not complete 
                if (progress < 1){
                        window.scrollAnimation = requestAnimationFrame(scrollAnimation);
                } else {
                        window.scrollAnimation = null;
                }
        }
        // Start animation 
        window.scrollAnimation = requestAnimationFrame(scrollAnimation);
        
} 

        // SECTION SCROLL FUNCTION 
function scrollToHome() {
        scrollToTarget(0, 0, 2000);
}

function scrollToAbout() {
        const aboutSection = document.getElementById('about');
        scrollToTarget(aboutSection, 0, 2000);
}

function scrollToServices() {
        const serviceSection = document.getElementById('services');
        scrollToTarget(serviceSection, 0, 200)
}

function scrollToContact() {
        const contactSection = document.getElementById('contact');
        scrollToTarget(contactSection,0,2000)
}
        // EASING DEMD PANEL (aboutSection, 0, 2000);

        