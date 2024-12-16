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

document.addEventListener("deviceready", function () {
    console.log("Device is ready!");

    if (typeof FirebaseMessaging !== "undefined") {
        FirebaseMessaging.requestPermission().then(() => {
            console.log("Notification permission granted.");
            return FirebaseMessaging.getToken();
        }).then((token) => {
            console.log("Firebase token:", token);
            alert("Firebase Token: " + token);
        }).catch((err) => {
            console.error("Error getting Firebase token:", err);
        });

        FirebaseMessaging.onMessage((payload) => {
            console.log("Notification received:", payload);
            alert("Notification received: " + JSON.stringify(payload.notification));
        });
    } else {
        console.error("FirebaseMessaging is not defined. Ensure the plugin is properly installed and initialized.");
    }
}, false);
