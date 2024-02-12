document.addEventListener('DOMContentLoaded', function() {

    function toggleScrolledClass() {
        var header = document.querySelector('.header');
        var scrollPercentage = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        if (scrollPercentage > 15) { // Change 25 to the desired percentage
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', toggleScrolledClass);

});
