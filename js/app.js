let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price, image) {

    const item = cart.find(p => p.name === name);

    if (item) {
        item.quantity += 1;
    } else {
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("تمت إضافة المنتج إلى السلة");
}

function getCartCount(){

    const count = cart.reduce((total,item)=> total + item.quantity ,0);

    const badge = document.getElementById("cart-count");

    if(badge){
        badge.innerText = count;
    }

}

getCartCount();
const productsContainer = document.getElementById("products");

if(productsContainer){

productsContainer.innerHTML = `
<div>

<img src="images/fajr-energy.png" width="200">

<h3>فجر فيلم بيرست</h3>

<p>السعر 39 ريال</p>

<button onclick="addToCart('فجر فيلم بيرست',39,'images/fajr-energy.png')">
أضف للسلة
</button>

</div>
`;

}
