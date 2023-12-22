document.addEventListener("DOMContentLoaded", function() {
    var heroSection = document.querySelector('.hero-section');
    var images = ["../images/backhome1.jpg", "../images/backhome2.jpg", "../images/backhome3.jpg","../images/backhome4.jpeg","../images/backhome5.jpg"];
    var currentImageIndex = 0;

    function changeBackground() {
        heroSection.style.backgroundImage = 'url(' + images[currentImageIndex] + ')';
        currentImageIndex = (currentImageIndex + 1) % images.length;
    }

    setInterval(changeBackground, 5000);
});