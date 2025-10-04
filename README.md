# 📚 MONGODB MERN WEEK 1 ASSIGNMENT

This project demonstrates MongoDB CRUD operations, aggregation pipelines, and indexing using **Mongoose** in Node.js. It connects to a MongoDB ATLAS database, inserts sample data, performs queries, updates, deletions, and creates indexes for optimized performance.

---

## 🚀 Features

 MongoDB connection using Mongoose
 Sample data insertion (`insertMany`)
 CRUD operations (Create, Read, Update, Delete)
 Aggregation pipelines for advanced data analysis
 Indexing for optimized queries

---

## 🛠️ Technologies Used

* Node.js
* Mongoose
* MongoDB ATLAS
* dotenv

---

## 📁 Project Structure

mongodb-data-layer-fundamentals-and-advanced-techniques/
│
├── config/
│   └── db.js                # MongoDB connection setup
│
├── models/
│   └── Book.js              # Mongoose schema and model definition
│
├── insert_books.js          # Inserts sample data into the database
├── queries.js               # Performs queries, updates, deletions, and aggregations
├── package.json             # Project dependencies and scripts
├── .env                     # Environment variables (e.g., MongoDB URI)
└── README.md                # Project documentation




## ⚙️ Setup & Usage

1. Clone the repository

   ```bash
   git clone <repo-url>
   cd mongodb-data-layer-fundamentals-and-advanced-techniques
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Create a `.env` file

   ```bash
   MONGODB_URI=mongodb://localhost:27017/booksdb
   ```

4. Run the script

   ```bash
   node queries.js
   ```



 ✅ Expected Output

The script will:

 Connect to MongoDB
 Insert sample books
 Execute multiple queries and aggregations
 Log results in the console



📘 Author
Reuben Mwikya
PLP-MERN-STUDENT


