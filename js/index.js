'use strict';
function setWindowHeight() {
    const windowHeight = window.innerHeight;
    document.body.style.height = windowHeight + 'px';
}
setWindowHeight();
window.addEventListener('resize', setWindowHeight, false);
// ============= Header Menu Buttons
const headerMenuBtns = document.querySelectorAll('.header__nav-item .header__nav-btn');
const scoreBtns = document.querySelectorAll('.header__scores-score .header__nav-btn');

headerMenuBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    });
});

scoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const activeBtn = document.querySelector('.header__scores-score .header__nav-btn.active');
        if (!btn.classList.contains('active')) {
            btn.classList.add('active');
            activeBtn.classList.remove('active');
        }
    });
});

// ============= Date Picker
const dateContent = document.getElementById('date-content');
const datePrevBtn = document.getElementById('date-prev-btn');
const dateNextBtn = document.getElementById('date-next-btn');
// const resetDateBtn = document.getElementById('reset-date');

let dateNum = 0;

const createDateText = () => {
    const date = new Date();
    date.setDate(date.getDate() + dateNum);
    const weekDay = date.toLocaleDateString('en-US', {
        weekday: 'long',
    });
    const month = date.toLocaleDateString('en-US', {
        month: 'short',
    });
    const day = date.getDate();

    const dateText = `${weekDay}, ${month} ${day}${formatDay(day)}`;
    dateContent.textContent = dateText;
};
createDateText();

const incrementDate = () => {
    dateNum += 1;
    createDateText();
};

const decrementDate = () => {
    dateNum -= 1;
    createDateText();
};

// const resetDate = () => {
//     dateNum = 0;
//     createDateText();
// };

datePrevBtn.addEventListener('click', decrementDate);
dateNextBtn.addEventListener('click', incrementDate);
// resetDateBtn.addEventListener('click', resetDate);

function formatDay(number) {
    if (number > 3 && number < 21) return 'th';
    switch (number % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

// ============= Header Menu
const menuBtn = document.querySelector('#header__menu-btn');
const menuContent = document.querySelector('.header__nav');

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menuBtn.classList.toggle('open');
    menuContent.classList.toggle('show');
}

// ============= Footer Menu
const footerMenuBtn = document.querySelector('#footer__menu-btn');
const footerMenuContent = document.querySelector('.footer-nav');
const footerLinks = document.querySelectorAll('.footer__list-link');

footerMenuBtn.addEventListener('click', toggleFooterMenu);
footerLinks.forEach((link) => {
    link.addEventListener('click', toggleFooterMenu);
});

function toggleFooterMenu() {
    footerMenuBtn.classList.toggle('open');
    footerMenuContent.classList.toggle('show');
}

// ============== Footer Dropdown
const footerDropdownBtn = document.querySelector('.footer__dropdown-btn');
const footerDropdownContainer = document.querySelector('.footer__dropdown-list');
const footerDropdownLinks = document.querySelectorAll('.footer__dropdown-link');

window.addEventListener('click', function (e) {
    if (!document.getElementById('footer-dropdown').contains(e.target)) {
        hideFooterDropdown();
    }
});

footerDropdownBtn.addEventListener('click', toggleFooterDropdown);
footerDropdownLinks.forEach((link) => {
    link.addEventListener('click', toggleFooterDropdown);
});

function toggleFooterDropdown() {
    footerDropdownBtn.classList.toggle('rotate-icon');
    footerDropdownContainer.classList.toggle('show');
}

function hideFooterDropdown() {
    footerDropdownBtn.classList.remove('rotate-icon');
    footerDropdownContainer.classList.remove('show');
}

// ================== Modals
const tableScoreBtns = document.querySelectorAll('.table__row-scores');
const modalBackdrop = document.querySelector('.modal-backdrop');
const modalCloseBtns = document.querySelectorAll('.modal__header-btn');

tableScoreBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const modal = btn.dataset.modal;
        document.querySelector(`.${modal}`).classList.add('show');
        modalBackdrop.classList.add('show');
    });
});

modalCloseBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        const activeModal = document.querySelector('.modal.show');

        activeModal.classList.remove('show');
        modalBackdrop.classList.remove('show');
    });
});

// ================== Accordions
const accordions = document.querySelectorAll('.accordion');

accordions.forEach((accord) => {
    const accordionBtn = accord.querySelector('.accordion__header');

    if (accordionBtn) {
        accordionBtn.addEventListener('click', () => {
            accord.classList.toggle('active');
        });
    }
});

// ================== Better Scroll
let wrapper = document.querySelector('.table-section');
let bs = new BScroll(wrapper, {
    probeType: 3,
    pullUpLoad: true,
    wheel: true,
    scrollX: true,
    scrollbar: true,
    click: true,
});
