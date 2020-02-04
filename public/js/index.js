console.log('Hello!')
async function remove(self) {
    console.log(self.dataset)
    const res = await fetch('/product', {
        method: 'DELETE',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ id: self.dataset.id })
    })
    const data = await res.json()
    console.log(data, data == '"ok"')
    if (data.ok) location.reload()
}
function add(self) {
    const product = JSON.parse(self.dataset.product)
    // basket.push(product)
    console.log(product, basket)
    basket.map((el) => {
        console.log(el.product._id, product._id)
        if (el.product._id == product.id) {
            // amount ++
        } else {
            // add product to basket

        }
    })
}

// [{...}]

// [{
//     amount: 1,
//     product: {...}
// }]