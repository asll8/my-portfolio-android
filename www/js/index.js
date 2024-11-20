document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = event.target.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    alert('Thank you for your message!');
    form.reset();
});

document.addEventListener("DOMContentLoaded", () => {
    const spans = document.querySelectorAll("section p span");
    spans.forEach(span => {
        span.addEventListener("mouseover", () => {
            span.style.color = "#64ffda";
        });

        span.addEventListener("mouseout", () => {
            span.style.color = "#ccd6f6";
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    const submitButton = form.querySelector("button");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        submitButton.classList.add("loading");
        submitButton.textContent = "Sending...";

        setTimeout(() => {
            submitButton.classList.remove("loading");
            submitButton.textContent = "Send Message";

            alert("Message sent successfully!");
            form.reset();
        }, 2000);
    });
});

/**
 *
 * document.addEventListener("DOMContentLoaded", () => {
    const aboutText = document.getElementById("about-text");

    const words = aboutText.textContent.split(" ");
    aboutText.innerHTML = words.map(word => `<span>${word}</span>`).join(" ");

    const spans = aboutText.querySelectorAll("section p span");
    spans.forEach(span => {
        span.addEventListener("mouseover", () => {
            span.style.color = "#64ffda";
        });

        span.addEventListener("mouseout", () => {
            span.style.color = "#ccd6f6";
        });
    });
});

const techStackP1 = [
    "React.js",
    "JavaScript",
    "HTML",
    "CSS",
    "Webpack",
    "Git",
    "Figma",
    "Azure Services",
    "Postman"
];

const techStackContainer = document.querySelector(".tech-stack-p1");

techStackP1.forEach((tech) => {
    const tag = document.createElement("span");
    tag.textContent = tech;
    tag.classList.add("tech-tag");
    techStackContainer.appendChild(tag);
});

*/
