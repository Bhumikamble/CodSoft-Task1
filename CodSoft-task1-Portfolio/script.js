document.addEventListener('DOMContentLoaded', function() {
    const texts = ["Web Developer.", "Web Designer."];
    let textIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // typing speed in milliseconds
    const pauseBetweenTexts = 2000; // pause duration between texts in milliseconds

    function typeText() {
        const currentText = texts[textIndex];
        document.getElementById("typingText").textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex < currentText.length) {
            setTimeout(typeText, typingSpeed);
        } else {
            setTimeout(() => {
                charIndex = 0;
                textIndex = (textIndex + 1) % texts.length;
                typeText();
            }, pauseBetweenTexts);
        }
    }

    typeText();

    // Scroll to Top Button
    const scrollToTopBtn = document.getElementById("scrollToTopBtn");
    const rootElement = document.documentElement;

    function handleScroll() {
        const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
        if (rootElement.scrollTop / scrollTotal > 0.8) {
            // Show button
            scrollToTopBtn.style.display = "flex";
        } else {
            // Hide button
            scrollToTopBtn.style.display = "none";
        }

        // About Me Section Animation
        const aboutMeSection = document.querySelector("#about-me");
        const aboutMeContent = document.querySelector(".about-me-content");

        if (rootElement.scrollTop > aboutMeSection.offsetTop - rootElement.clientHeight + 200) {
            aboutMeContent.classList.add("fade-in");
        }

        // Programming Skills Section Animation
        const programmingSkillsSection = document.querySelector("#programming-skills");
        if (rootElement.scrollTop > programmingSkillsSection.offsetTop - rootElement.clientHeight + 200) {
            programmingSkillsSection.classList.add("fade-in");
        }
    }

    function scrollToTop() {
        rootElement.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }

    scrollToTopBtn.addEventListener("click", scrollToTop);
    document.addEventListener("scroll", handleScroll);

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
