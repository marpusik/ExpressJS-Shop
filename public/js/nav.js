const btnBasketClose = document.querySelector('.card-header > .close')
const basketPopUp = document.querySelector('.basket')
const btnBasket = document.querySelector('#basket')
const navbarToggler = document.querySelector('.navbar-toggler')
const navbarCollapse = document.querySelector('#navbarColor01')
const basketProducts = document.querySelector('.basket .products')

let basket = [
    {
        amount: 1,
        product: { _id: '5e17686bd8ea432bf414aad0' }
    },
    {
        amount: 3,
        product: { _id: '5e176877d8ea432bf414aad1' }
    }
]


let resultProducts = []


// open basket 
btnBasket.addEventListener('click', () => {
    console.log('click')
    getProductsFromBack()
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

function addAmount(i) {
    basket[i].amount++
    showProducts()
    console.log('addAmount', i, basket)
}

function minusAmount(i) {
    basket[i].amount--
    showProducts()
    console.log('minusAmount', i, basket)
}

function fillBasket() {
    basket = basket.map((item) => {
        item.product = resultProducts.filter((p) => {
            console.log(p._id == item.product._id, p, item)
            return p._id == item.product._id
        })[0]
        return item
    })
}

function showProducts() {
    console.log(basket)
    let template = ''
    basket.forEach((item, i) => {
        template += `
        <div class = "basket-product">
            <div class = "first">
                <div class = "basket-productName">${item.product.productName}</div>
                <img class = "basket-img" src= "${item.product.img}">
            </div>
            <div class = "second">
             <button onclick="addAmount(${i})"> + </button>
             <div class = "basket-amount">${item.amount}</div>
             <button onclick="minusAmount(${i})"> - </button>
            </div>
        </div>
    `
    });
    basketProducts.innerHTML = template
}

async function getProductsFromBack() {
    console.log('getProductsFromBack')
    const allId = basket.map((item) => {
        console.log('item', item)
        return item.product._id
    })
    console.log('allId:', allId)
    const allIdString = allId.join(',')
    console.log(allIdString)
    //'5e17686bd8ea432bf414aad0,5e176877d8ea432bf414aad1'
    const response = await fetch('/products?id=' + allIdString)
    const result = await response.json()
    console.log(result)
    resultProducts = result.products
    fillBasket()
    showProducts()
}



