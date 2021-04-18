const swiper = new Swiper('.swiper-container', {
direction: 'horizontal',
loop: true,
slidesPerView: 1,
speed: 400,

pagination: {
    el: '.swiper-pagination',
},
navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
},
breakpoints: {
    400: {
    slidesPerView: 1,
    centeredSlides: false,
    },
    920: {
        slidesPerView: 2,
        spaceBetween: 30
    },
    1155: {
    slidesPerView: 3,
    },
}
});

// header
let header = document.querySelector('.header');

document.addEventListener('scroll', () => {
    if (document.documentElement.scrollTop > 1) {
        header.classList.add('header_has-bg');
    } else {
        header.classList.remove('header_has-bg');
    }
});

// form select 
let formDropdownButtons = document.querySelectorAll('.form__dropdown-button');
let formDropdownLists = document.querySelectorAll('.form__dropdown-list');
let formDropdownItem = document.querySelectorAll('.form__dropdown-item');
let timeInput = document.getElementById('time-input');
let form = document.querySelector('.form');

// слушатель на вставку текста первого элемента списка options в кнопку select при загрузке контента

document.addEventListener('DOMContentLoaded', () => {
    timeInput.innerHTML =  timeInput.nextElementSibling.firstElementChild.textContent;
})

// слушатель на открытие и закрытие options по нажатию на select, а также закрытию optinons, если клик еще раз по тому же options

formDropdownButtons.forEach(elem => {
    
    elem.addEventListener('click', (e) => {
        let target = e.target;

        if (!target.nextElementSibling.classList.contains('form__dropdown-list_visible')) {
            formDropdownLists.forEach(el => el.classList.remove('form__dropdown-list_visible'));
            target.nextElementSibling.classList.add('form__dropdown-list_visible');
        } else {
            target.nextElementSibling.classList.remove('form__dropdown-list_visible');
        }

    });
});

// слушатель на перезаписывание текста select из выбранного option и закрытие options

formDropdownItem.forEach(elem => {
    elem.addEventListener('click', (e) => {
        e.stopPropagation();
        elem.closest('.form__dropdown-wrap').firstElementChild.textContent = e.target.textContent;
        elem.closest('.form__dropdown-list').classList.remove('form__dropdown-list_visible');
    });
});

// слушатель на закрытие options, если нажатие вне кнопки происходит

document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('form__dropdown-button')) {
        formDropdownLists.forEach(elem => {
            if (elem.classList.contains('form__dropdown-list_visible')) {
                elem.classList.remove('form__dropdown-list_visible');
            }
        });
    }
}); 

// слушатель на закрытие options по кнопке ESC и переход фокуса на след елемент по Tab

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab' || e.key === 'Escape') {
        formDropdownLists.forEach(elem => {
            if (elem.classList.contains('form__dropdown-list_visible')) {
                elem.classList.remove('form__dropdown-list_visible');
            }
        });
    }
});





// change color theme

let switchInput = document.querySelector('.switch');

switchInput.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark');

    document.body.classList.toggle('dark');

    document.querySelector('.logo__link').classList.toggle('dark');

    document.querySelectorAll('.header__link').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelectorAll('.benefits__item').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelectorAll('.button').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelectorAll('h2').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelectorAll('h3').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelectorAll('.descr').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelectorAll('.promo__button').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelector('.features').classList.toggle('dark');

    document.querySelector('.tariff-bg').classList.toggle('dark');

    document.querySelectorAll('.tariff__text').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelector('.form').classList.toggle('dark');

    document.querySelectorAll('.form__dropdown-item').forEach(elem => {
        elem.classList.toggle('dark');
    });

    document.querySelector('.footer__inner').classList.toggle('dark');
    document.querySelector('.footer__copyright').classList.toggle('dark');
    
});