const buttons = document.querySelectorAll('.cpm-button');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        button.classList.toggle('clicked');
    });
});
