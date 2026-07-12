// Welcome Message
window.onload = function () {
    alert("Welcome to Delicious Restaurant!");
};

// Order Button
const orderBtn = document.querySelector(".btn");

orderBtn.addEventListener("click", function (e) {
    e.preventDefault();
    alert("Thank you! Your order request has been received.");
});

// Contact Form
const form = document.querySelector("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();

    alert("Your message has been sent successfully!");

    form.reset();
});