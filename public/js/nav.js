const btnBasket = document.querySelector('#basket')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarCollapse = document.querySelector('#navbarColor01')

btnBasket.addEventListener('click', () => {
    console.log('click')
})
navbarToggler.addEventListener('click', () => {
    console.log('click')
    navbarCollapse.classList.remove('collapse')
})