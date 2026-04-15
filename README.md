🛒 Online Shopping Website (ShopEasy)

A full-stack online shopping web application built using HTML, CSS, JavaScript, Node.js, Express, and MongoDB.
Users can view products, add them to cart, and place orders.

🚀 Features
🛍️ View products from database
➕ Add new products
🛒 Add to Cart functionality
📦 Place orders
📄 View all orders
🌐 Backend API using Express
💾 Data stored in MongoDB
🏗️ Project Structure
online-store-homepage/
│
├── backend/
│   ├── models/
│   │   ├── product.js
│   │   └── order.js
│   ├── routes/
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   └── server.js
│
├── index.html
├── script.js
├── style.css
├── package.json
⚙️ Installation & Setup
1. Clone the repository
git clone https://github.com/your-username/online-shopping-hub.git
cd online-shopping-hub
2. Install dependencies
npm install
3. Start the server
npm start

Server will run on:

http://localhost:5000
🔌 API Endpoints
📦 Products
GET /products → Get all products
POST /products → Add a new product
🧾 Orders
GET /orders → Get all orders
POST /orders → Place an order
🖥️ Frontend

Open index.html using Live Server or browser:

http://127.0.0.1:5500/index.html
🛠️ Technologies Used
Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express
Database: MongoDB
Tools: VS Code, GitHub
🚧 Known Issues
Cart data is stored in browser (not backend)
No authentication system
UI can be improved
🌍 Deployment
Backend deployed on Render
Frontend can be hosted on GitHub Pages
👨‍💻 Author

Chitaranjan Nayak
