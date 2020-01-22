const $cart = document.querySelector("section#cart ul")
const inCart = []
let total = 0

let items = []
items[0] = {
    id:1,
    name: "Dice",
    price: 4.99
}
items[1] = {
    id:2,
    name: "Main Book",
    price: 49.99
}
items[2] = {
    id:3,
    name: "Starter Set",
    price: 19.99
}
items[3] = {
    id:4,
    name: "Figure",
    price: 4.50
}
items[4] = {
    id:5,
    name: "Tray",
    price: 9.99
}
items[5] = {
    id:6,
    name: "Bag",
    price: 7.99
}


function addToCart(id, event){
    const item = items.find(item => item.id == id)
    const detail = event.target.parentNode
    .querySelector("select").value
    
   //alert(item.name)  
    const $newItem = document.createElement("li")
    $newItem.innerHTML = 
        `${item.name} [ ${detail}] ( $ ${item.price} )`
    $cart.append($newItem)
    inCart.push(item)
    
    total += item.price
    document.querySelector("span#total").innerHTML = total.toFixed(2)
    document.querySelector("span#itemCount").innerHTML = inCart.length
}