const accordionHeaders = document.querySelectorAll('.accordion-item-header');

accordionHeaders.forEach(item => {
    item.addEventListener('click', () => {
        accordionHeaders.forEach(accordion => {
            if(accordion !== item) {
                accordion.parentElement.querySelector('.accordion-item-text')
                .classList.remove('active');
                accordion.querySelector('.accordion-item-title').classList.remove('bold');
                accordion.querySelector('.arrow-icon').classList.remove('open');
            }
        });
        item.parentElement.querySelector('.accordion-item-text')
            .classList.toggle('active');
        item.querySelector('.accordion-item-title').classList.toggle('bold');
        item.querySelector('.arrow-icon').classList.toggle('open');
    })
});