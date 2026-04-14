let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
}
const products = [
  {name:"Smartphone", price:12000, rating:4.5, category:"Electronics", img:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"},
  {name:"Laptop", price:55000, rating:4.8, category:"Electronics", img:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8"},
  {name:"T-Shirt", price:800, rating:4.2, category:"Fashion", img:"https://images.unsplash.com/photo-1523381210434-271e8be1f52b"},
  {name:"Shoes", price:1500, rating:4.1, category:"Fashion", img:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"},
  {name:"Microwave", price:7000, rating:4.3, category:"Home", img:"https://images.unsplash.com/photo-1585659722983-3a675dabf23d?w=500"},
  {name:"Books Set", price:300, rating:4.7, category:"Books", img:"https://images.unsplash.com/photo-1512820790803-83ca734da794"}
];

let currentCategory = "All";

function displayProducts(list) {
  const container = document.getElementById("productList");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p class="price">₹${p.price}</p>
        <p class="rating">⭐ ${p.rating}</p>
        <button onclick="addToCart('${p.name}')">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(name) {
  alert(name + " added to cart!");
}

function filterCategory(cat) {
  currentCategory = cat;
  applyFilters();
}

function applyFilters() {
  let filtered = [...products];

  if (currentCategory !== "All") {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  const search = document.getElementById("search").value.toLowerCase();
  filtered = filtered.filter(p => p.name.toLowerCase().includes(search));

  const price = document.getElementById("priceFilter").value;
  if (price === "low") filtered = filtered.filter(p => p.price < 500);
  if (price === "mid") filtered = filtered.filter(p => p.price <= 2000 && p.price >= 500);
  if (price === "high") filtered = filtered.filter(p => p.price > 2000);

  const rating = document.getElementById("ratingFilter").value;
  if (rating !== "all") filtered = filtered.filter(p => p.rating >= rating);

  const sort = document.getElementById("sort").value;
  if (sort === "lowHigh") filtered.sort((a,b)=>a.price-b.price);
  if (sort === "highLow") filtered.sort((a,b)=>b.price-a.price);
  if (sort === "rating") filtered.sort((a,b)=>b.rating-a.rating);

  displayProducts(filtered);
}

document.getElementById("search").addEventListener("input", applyFilters);
document.getElementById("priceFilter").addEventListener("change", applyFilters);
document.getElementById("ratingFilter").addEventListener("change", applyFilters);
document.getElementById("sort").addEventListener("change", applyFilters);

displayProducts(products);

const form = document.getElementById("orderForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const orderData = {
    productName: document.getElementById("productName").value,
    price: document.getElementById("price").value,
    quantity: document.getElementById("quantity").value,
    customerName: document.getElementById("customerName").value
  };

  try {
    const response = await fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(orderData)
    });

    const data = await response.json();
    alert(data.message);

  } catch (error) {
    console.error(error);
    alert("Error placing order");
  }
});

function addToCart(name, price) {
    cart.push({ name, price });

    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cart-count').innerText = cart.length;
}

function showCart() {
    console.log(cart); // for now
}

async function addProduct() {
    const name = document.getElementById('productName').value;
    const price = document.getElementById('productPrice').value;

    await fetch('http://localhost:5000/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, price })
    });

    alert("Product added!");
}

function toggleCart() {
    const cartBox = document.getElementById('cart-box');

    if (cartBox.style.display === 'none') {
        showCartItems();
        cartBox.style.display = 'block';
    } else {
        cartBox.style.display = 'none';
    }
}

function showCartItems() {
    const list = document.getElementById('cart-items');
    list.innerHTML = "";

    cart.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.name} - ₹${item.price}`;
        list.appendChild(li);
    });
}

