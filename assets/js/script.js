const menuBurger = document.querySelector('.menu-toggle > *')
const nav = document.querySelector('nav ul')
const cover = document.querySelector('.cover')

menuBurger.addEventListener('click', () => {
    nav.classList.toggle('slide')
    cover.classList.toggle('show')
});

cover.addEventListener('click', () => menuBurger.click());

[...nav.children].forEach(e => {
    e.addEventListener('click', () => {
        menuBurger.click()
    })
})