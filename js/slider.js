document.addEventListener("DOMContentLoaded", () => {
    const slider = document.getElementById("testimonial-slider");
    const prevButton = document.getElementById("prev");
    const nextButton = document.getElementById("next");

    let currentSlide = 0;
    const totalSlides = slider.children.length;

    // Function to update the slide position
    const updateSlidePosition = () => {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
    };

    // Event listener for the "Next" button
    nextButton.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlidePosition();
    });

    // Event listener for the "Prev" button
    prevButton.addEventListener("click", () => {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    });

    // Initial slide setup
    updateSlidePosition();
});