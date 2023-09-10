// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.header');
    const navLinks = document.querySelectorAll('.navbar a');
    const sections = document.querySelectorAll('section');

    // Function to determine the current active section
    function getCurrentSection() {
        let currentSection = null;
        sections.forEach(sec => {
            const rect = sec.getBoundingClientRect();
            if (rect.top <= header.offsetHeight + 10) {
                currentSection = sec.getAttribute('id');
            }
        });
        return currentSection;
    }

    // Function to activate the corresponding nav link
    function activateNavLink(sectionId) {
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${sectionId}`) {
                link.classList.add('active');
            }
        });
    }

    // Scroll event listener for section activation and sticky header
    window.addEventListener('scroll', function () {
        const currentSectionId = getCurrentSection();
        activateNavLink(currentSectionId);

        header.classList.toggle('sticky', window.scrollY > 100);

        // remove toggle icon and navbar when clicked on navbar links
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});