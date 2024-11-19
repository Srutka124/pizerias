const urlParams = new URLSearchParams(window.location.search);
let pizzaName = urlParams.get('pizza');
if (pizzaName) {
    pizzaName = pizzaName.replace(/_/g, ' ').toLowerCase();
}

const pizzaDetails = {
    "margherita": { name: "Margherita", description: "Classic pizza with mozzarella and basil." },
    "pepperoni": { name: "Pepperoni", description: "Loaded with pepperoni slices." },
    "bbq chicken": { name: "BBQ Chicken", description: "Grilled chicken with BBQ sauce." },
    "veggie": { name: "Veggie Delight", description: "Fresh veggies with cheese." },
    "hawaiian": { name: "Hawaiian", description: "Ham and pineapple." },
    "four cheese": { name: "Four Cheese", description: "Mozzarella, cheddar, gorgonzola, parmesan." },
    "meat lover's": { name: "Meat Lover's", description: "Pepperoni, sausage, bacon, ham." },
    "buffalo chicken": { name: "Buffalo Chicken", description: "Spicy buffalo chicken." }
};

if (pizzaName && pizzaDetails[pizzaName]) {
    document.getElementById('pizza-name').textContent = pizzaDetails[pizzaName].name;
    document.getElementById('pizza-description').textContent = pizzaDetails[pizzaName].description;
}

function addToCart() {
    alert("Pizza added to cart!");
}
