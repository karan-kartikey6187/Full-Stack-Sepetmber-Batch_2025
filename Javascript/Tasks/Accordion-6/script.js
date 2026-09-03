let header= document.querySelectorAll('.accordion-header');
let content= document.querySelectorAll('.accordion-content');
let icon = document.querySelectorAll('.accordion-icon')
header.forEach((el, i) => {
    el.addEventListener('click', () => {
        let isActive = content[i].classList.contains('active');
        content.forEach((item, index) => {
            item.classList.remove('active');
            icon[index].innerHTML = '+';
        });
        if (!isActive) {
            content[i].classList.add('active');
            icon[i].innerHTML='-'
        }
    });
});