const basketPopUp = document.querySelector('.basket')
const btnBasket = document.querySelector('#basket')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarCollapse = document.querySelector('#navbarColor01')

btnBasket.addEventListener('click', () => {
    console.log('click')
    basketPopUp.classList.remove('hidden')
})
navbarToggler.addEventListener('click', () => {
    console.log('click')
    navbarCollapse.classList.remove('collapse')
})

