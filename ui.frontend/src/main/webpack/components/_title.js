document.addEventListener('DOMContentLoaded', (evt) => {

    Array.prototype.slice.call(window.document.querySelectorAll('.title'), 0).forEach((element) => {
        element.addEventListener('mouseenter', (evt)=> {
            evt.preventDefault();
            element.style.color = '#FFF';
            element.style.backgroundColor = '#000';
        })
        element.addEventListener('mouseleave', (evt)=> {
            evt.preventDefault();
            element.style.color = '';
            element.style.backgroundColor = '';
        })
    });

});