document.addEventListener('DOMContentLoaded', function () {
    var button = document.createElement('button');
    button.innerText = 'Test Button';
    button.addEventListener('click', function () {
        alert('Hello, World!');
    });

    var container = document.querySelector('.cmp-container');
    if (container) {
        container.appendChild(button);
    }
});
