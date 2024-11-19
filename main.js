const pizzas = [
    { name: "Margherita", description: "Classic pizza with fresh mozzarella and basil.", price: 10.99 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH5WpjG9ykoPxpOUTDRDFE3IKastVPiR8bVA&s'},
    { name: "Pepperoni", description: "Loaded with pepperoni and cheese.", price: 12.99 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnl5gTzuoI5U7HKs7ffZ_whMc46oeu_tMrUA&s'},
    { name: "Veggie", description: "A mix of fresh vegetables and cheese.", price: 11.99 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxHf92HG4d9XP-N3boh_uWEpI_kfRtbbndxA&s'},
    { name: "BBQ Chicken", description: "Grilled chicken with BBQ sauce and cheese.", price: 13.99 , img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAAuKM-SxQ9wwgUvQSiXgLSseAuPeR18kGvQ&s'},
];

// Функція для відображення списку піц
function displayPizzas() {
    const pizzaList = document.getElementById('pizza-list');
    if (!pizzaList) return;

    pizzas.forEach(pizza => {
        const pizzaItem = document.createElement('div');
        pizzaItem.classList.add('pizza-item');
        pizzaItem.innerHTML = `
            <div class="card">
            <img src="${pizza.img}", alt="${pizza.name}">
            <h3>${pizza.name}</h3>
            <p>${pizza.description}</p>
            <p>Price: $${pizza.price.toFixed(2)}</p>
            <button class="details-button" onclick="window.location.href='details.html?pizza=${encodeURIComponent(pizza.name.toLowerCase())}'">View Details</button>
            </div>
        `;
        pizzaList.appendChild(pizzaItem);
    });
}

document.addEventListener('DOMContentLoaded', displayPizzas);

// Обробка форми контактів
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert("Thank you for your message!");
        this.reset();
    });
}

// Отримання параметра піци з URL
const urlParams = new URLSearchParams(window.location.search);
let pizzaName = urlParams.get('pizza');
if (pizzaName) {
    pizzaName = pizzaName.replace(/-/g, ' ').toLowerCase();
}

// Об'єкт з деталями піц
const pizzaDetails = {
    "margherita": {
        name: "Margherita",
        description: "A classic pizza with fresh tomatoes, mozzarella, and basil."
    },
    "pepperoni": {
        name: "Pepperoni",
        description: "Loaded with pepperoni slices and melted cheese."
    },
    "bbq chicken": {
        name: "BBQ Chicken",
        description: "Grilled chicken with BBQ sauce, onions, and peppers."
    },
    "veggie": {
        name: "Veggie Delight",
        description: "Loaded with fresh vegetables and mozzarella cheese."
    }
};

// Відображення інформації про піцу на сторінці деталей
const pizzaTitle = document.getElementById('pizza-name');
const pizzaDescription = document.getElementById('pizza-description');

if (pizzaTitle && pizzaDescription && pizzaName && pizzaDetails[pizzaName]) {
    pizzaTitle.textContent = pizzaDetails[pizzaName].name;
    pizzaDescription.textContent = pizzaDetails[pizzaName].description;
} else if (pizzaTitle && pizzaDescription) {
    pizzaTitle.textContent = "Pizza not found";
    pizzaDescription.textContent = "Sorry, we couldn't find the pizza you're looking for.";
}
