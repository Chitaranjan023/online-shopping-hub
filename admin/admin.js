async function loadOrders() {
  const res = await fetch("http://localhost:5000/orders");
  const orders = await res.json();

  const table = document.getElementById("orders");

  orders.forEach(o => {
    table.innerHTML += `
      <tr>
        <td>${o.productName}</td>
        <td>₹${o.price}</td>
        <td>${o.quantity}</td>
        <td>${new Date(o.date).toLocaleString()}</td>
      </tr>
    `;
  });
}

loadOrders();