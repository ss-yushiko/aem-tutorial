var buttons = document.querySelectorAll('.cpm-button');

buttons.forEach(function(button) {
    button.addEventListener('click', function() {
        button.classList.toggle('clicked');
    });
});
