const buyTicketBtns = document.querySelectorAll('.buy-ticket');
const overlay = document.querySelector('.overlay');
const closeBtns = document.querySelectorAll('.close');
const menuBtn = document.querySelector('.menu-btn');
const header = document.querySelector('.header');

for (btn of buyTicketBtns) {
    btn.addEventListener('click', () => {
        overlay.style.display = 'flex';
    });
}


for (btn of closeBtns) {
    btn.addEventListener('click', () => {
        overlay.style.display = 'none';
    });
}

let check = false;
menuBtn.addEventListener('click', () => {
    if (!check) {
        header.style.overflow = 'visible';
        check = true;
    } else {
        header.style.overflow = 'hidden';
        check = false;
    }
})
