var increaseButtons = document.querySelectorAll('.increase');
var decreaseButtons = document.querySelectorAll('.decrease');

increaseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var number = button.parentElement.querySelector('.number');
        var num = Number(number.innerHTML);
        num = num + 1;
        number.innerHTML = num;
    });
});

decreaseButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var number = button.parentElement.querySelector('.number');
        var num = Number(number.innerHTML);
        if (num > 1) {
            num = num - 1;
            number.innerHTML = num;
        }
    });
});


// scroll

document.querySelector('href').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('soup')).scrollIntoView({
        behavior: 'smooth'
    });
});