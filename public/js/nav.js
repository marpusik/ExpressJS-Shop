const btnBasketClose = document.querySelector('.card-header > .close')
const basketPopUp = document.querySelector('.basket')
const btnBasket = document.querySelector('#basket')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarCollapse = document.querySelector('#navbarColor01')
const basketProducts = document.querySelector('.basket .products')

const basket = [
    {
        amount: 1,
        product: { _id: '5e17686bd8ea432bf414aad0' }
    },
    {
        amount: 3,
        product: { _id: '5e176877d8ea432bf414aad1' }
    }
]

// open basket 
btnBasket.addEventListener('click', () => {
    console.log('click')
    getProductsFromBack ()
    basketPopUp.classList.remove('hidden')
})
// close basket 
btnBasketClose.addEventListener('click', () => {
    basketPopUp.classList.add('hidden')
})
// open menu 
navbarToggler.addEventListener('click', () => {
    console.log('click')
    navbarCollapse.classList.remove('collapse')
})

function showProducts(result) {
    const newBasket = basket.map((item)=>{
        item.product= result.filter((p)=>{
            console.log(p._id==item._id)
            return p._id == item._id   
        })[0]
        return item
    })
    console.log(newBasket)
    let template = ''
    result.forEach(product => {
        template += `
        <div class = "basket-product">${product._id}</div>
        <img class = "basket-img" src= "${product.img}">
    `
    });
    basketProducts.innerHTML = template
}

async function getProductsFromBack () {
    console.log('getProductsFromBack')
    const allId = basket.map((item)=>{
        console.log('item', item)
        return item.product._id
    })
    console.log('allId:', allId)
    const allIdString = allId.join(',')
    console.log(allIdString)
    //'5e17686bd8ea432bf414aad0,5e176877d8ea432bf414aad1'
    const response = await fetch ('/products?id='+allIdString)
    const result = await response.json ()
    console.log (result)
    showProducts(result.products)
}



