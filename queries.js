const { connectDB } = require('./config/db');
const Book = require('./models/Book');

async function runQueries() {
    await connectDB();

    await Book.insertMany([
        { title: "1984", author: "George Orwell", genre: "Dystopian", published_year: 1949, price: 9.99, in_stock: true, pages: 328, publisher: "Secker & Warburg" },
        { title: "To Kill a Mockingbird", author: "Harper Lee", genre: "Fiction", published_year: 1960, price: 7.99, in_stock: true, pages: 281, publisher: "J.B. Lippincott & Co." },
        { title: "The Great Gatsby", author: "F. Scott Fitzgerald", genre: "Tragedy", published_year: 1925, price: 10.99, in_stock: false, pages: 180, publisher: "Charles Scribner's Sons" },
        { title: "Brave New World", author: "Aldous Huxley", genre: "Dystopian", published_year: 1932, price: 8.99, in_stock: true, pages: 311, publisher: "Chatto & Windus" },
        { title: "The Catcher in the Rye", author: "J.D. Salinger", genre: "Fiction", published_year: 1951, price: 6.99, in_stock: true, pages: 214, publisher: "Little, Brown and Company" },
        { title: "The Hobbit", author: "J.R.R. Tolkien", genre: "Fantasy", published_year: 1937, price: 12.99, in_stock: false, pages: 310, publisher: "George Allen & Unwin" },
        { title: "Fahrenheit 451", author: "Ray Bradbury", genre: "Dystopian", published_year: 1953, price: 11.99, in_stock: true, pages: 194, publisher: "Ballantine Books" },
        { title: "The Lord of the Rings", author: "J.R.R. Tolkien", genre: "Fantasy", published_year: 1954, price: 20.00, in_stock: true, pages: 1178, publisher: "George Allen & Unwin" },
        { title: "Animal Farm", author: "George Orwell", genre: "Political Satire", published_year: 1945, price: 5.99, in_stock: true, pages: 112, publisher: "Secker & Warburg" },
    ]);

    // Find all books by a specific author

    await Book.find({ author: "George Orwell" }).then(books => {
        console.log("Books by George Orwell:", books);
    });

    // Find all books within a specific genre
    await Book.find({ genre: "Dystopian" }).then(books => {
        console.log("Dystopian books:", books);
    });

    // Find all books published within a certain year range
    await Book.find({ published_year: { $gte: 1940, $lte: 1960 } }).then(books => {
        console.log("Books published between 1940 and 1960:", books);
    });

    // Find all books that are currently in stock
    await Book.find({ in_stock: true }).then(books => {
        console.log("Books in stock:", books);
    });


    // Update the price of a specific book
    await Book.updateOne({ title: "1984" }, { $set: { price: 8.99 } }).then(result => {
        console.log("Updated price of 1984:", result);
    });

    // Delete a book by its title
    await Book.deleteOne({ title: "The Catcher in the Rye" }).then(result => {
        console.log("Deleted The Catcher in the Rye:", result);
    });


    //Aggregation Pipelines
    // Calculate the average price of books in each genre
    await Book.aggregate([
        { $group: { _id: "$genre", averagePrice: { $avg: "$price" } } }
    ]).then(results => {
        console.log("Average price per genre:", results);
    });


    // Find the total number of books published each year
    await Book.aggregate([
        { $group: { _id: "$published_year", totalBooks: { $sum: 1 } } },
        { $sort: { _id: 1 } }
    ]).then(results => {
        console.log("Total books published each year:", results);
    });


    // List all publishers along with the count of books they have published
    await Book.aggregate([
        { $group: { _id: "$publisher", bookCount: { $sum: 1 } } },
        { $sort: { bookCount: -1 } }
    ]).then(results => {
        console.log("Publishers and their book counts:", results);
    });


    // Indexing
    // An index on the author field to optimize queries filtering by author
    await Book.createIndexes([{ author: 1 }]).then(result => {
        console.log("Created index on author field:", result);
    });

    // An index on the genre field to speed up genre-based searches
    await Book.createIndexes([{ genre: 1 }]).then(result => {
        console.log("Created index on genre field:", result);
    });

    // A compound index on published_year and price to enhance performance for queries involving both fields
    await Book.createIndexes([{ published_year: 1, price: -1 }]).then(result => {
        console.log("Created compound index on published_year and price:", result);
    });


    console.log("Queries executed successfully");
    process.exit(0);
};

runQueries();