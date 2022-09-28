'use strict'

{
    const header = document.querySelector('.l-header');

    window.addEventListener('scroll', () => {
        if ( 0 < $(this).scrollTop()) {
            header.classList.add('change-color');
        } else {
            header.classList.remove('change-color');
        }
    });
}

