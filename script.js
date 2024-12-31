// This file can be used for interactive functions, e.g. handling form submission, animations, etc.
document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            alert(`${this.innerText} Button Clicked!`);
        });
    });
});
