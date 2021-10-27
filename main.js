const DARK_MODE_SWITCH = document.querySelector('.header__dark-mode-switch');
const INCREASE = document.querySelectorAll('.up');
const DECREASE = document.querySelectorAll('.down');

// When Dark Mode Switch is clicked...
DARK_MODE_SWITCH.addEventListener('click', e => {
    // ...toggle the 'on' class for the switch...
    DARK_MODE_SWITCH.classList.toggle('on');
    // ... and toggle the 'dark' class for the root element
    document.documentElement.classList.toggle('dark')
})

// For each stat with the 'up' class...
INCREASE.forEach(stat => {
    // ...add an up arrow
    let img = document.createElement('img');
    img.src = 'images/icon-up.svg';
    img.alt = 'up';
    stat.prepend(img);
})

// For each stat with the 'down' class...
DECREASE.forEach(stat => {
    // ...add a down arrow
    let img = document.createElement('img');
    img.src = 'images/icon-down.svg';
    img.alt = 'down';
    stat.prepend(img);
})