//////// Toggle Menu Start ////////
function toggleMenu() {
    const navLinks = document.getElementById('nav-links');
    navLinks.classList.toggle('active');
}
//////// Toggle Menu End ////////

//////// Loader Start ////////
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelector(".loader-container").classList.add("hidden");
    }, 2500);
});
//////// Loader End ////////

//////// Scroll Animation Start ////////
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({
        duration: 800, 
        easing: 'ease-in-out', 
        once: true, 
    });

    //////// Dark Mode Toggle Start ////////
    const toggleButton = document.createElement("button");
    toggleButton.innerText = "Dark Mode";
    toggleButton.classList.add("dark-mode-toggle");

    document.querySelector(".navbar").appendChild(toggleButton);

    // Check user preference in local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        toggleButton.innerText = "Light Mode";
    }

    toggleButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleButton.innerText = "Light Mode";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleButton.innerText = "Dark Mode";
        }
    });
    //////// Dark Mode Toggle End ////////
});
//////// Scroll Animation End ////////
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});
let index = 0;
const testimonials = document.querySelectorAll(".testimonial-item");

function showTestimonial(i) {
    testimonials.forEach((item, idx) => {
        item.classList.toggle("active", idx === i);
    });
}

// Previous Button
document.getElementById("prevBtn").addEventListener("click", () => {
    index = (index - 1 + testimonials.length) % testimonials.length;
    showTestimonial(index);
});

// Next Button
document.getElementById("nextBtn").addEventListener("click", () => {
    index = (index + 1) % testimonials.length;
    showTestimonial(index);
});

// Show the first testimonial initially
showTestimonial(index);
document.addEventListener("DOMContentLoaded", function () {
    const testimonialsSection = document.querySelector(".testimonials-section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    testimonialsSection.classList.add("show");
                }
            });
        },
        { threshold: 0.3 }
    );

    observer.observe(testimonialsSection);
});
document.addEventListener("DOMContentLoaded", function () {
    let testimonials = document.querySelectorAll(".testimonial-item");
    let currentIndex = 0;
    let prevBtn = document.getElementById("prevBtn");
    let nextBtn = document.getElementById("nextBtn");

    function showTestimonial(index) {
        testimonials.forEach((item, i) => {
            item.classList.remove("active");
            if (i === index) {
                item.classList.add("active");
            }
        });
    }

    nextBtn.addEventListener("click", function () {
        currentIndex = (currentIndex + 1) % testimonials.length;
        showTestimonial(currentIndex);
    });

    prevBtn.addEventListener("click", function () {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        showTestimonial(currentIndex);
    });
});
document.getElementById("toggle-btn").addEventListener("click", function () {
    document.getElementById("nav-links").classList.toggle("show");
});
window.onscroll = function () {
    let scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        scrollBtn.style.display = "flex";
    } else {
        scrollBtn.style.display = "none";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}


