// JavaScript for toggling FAQ answers
document.addEventListener("DOMContentLoaded", function () {
    const faqHeaders = document.querySelectorAll(".faq-header");

    faqHeaders.forEach((header) => {
        header.addEventListener("click", function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector(".icon");

            if (content.classList.contains("hidden")) {
                content.classList.remove("hidden");
                icon.innerHTML = `<i class="fa-solid fa-minus fa-xl text-highlight"></i>`;
            } else {
                content.classList.add("hidden");
                icon.innerHTML = `<i class="fa-solid fa-plus fa-xl text-highlight"></i>`;
            }
        });
    });
});
