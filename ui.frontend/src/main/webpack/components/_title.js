document.addEventListener('DOMContentLoaded', function(evt) {

    Array.prototype.slice.call(window.document.querySelectorAll('.title'), 0).forEach(function(element) {
        element.addEventListener('mouseenter', function(evt) {
            evt.preventDefault();
            element.style.color = '#FFF';
            element.style.backgroundColor = '#000';
        });
        element.addEventListener('mouseleave', function(evt) {
            evt.preventDefault();
            element.style.color = '';
            element.style.backgroundColor = '';
        });
    });

});
