document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener('scroll', function() {
        var scrollPosition = window.scrollY;
        var windowHeight = window.innerHeight;
        var documentHeight = document.body.offsetHeight;

        if (documentHeight - scrollPosition <= windowHeight) {
            document.querySelector('.bottom-navbar').style.display = 'block';
        } else {
            document.querySelector('.bottom-navbar').style.display = 'none';
        }
    });
});