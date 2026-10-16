
const express = require("express");

const app = express();

app.use(express.json());

// 1. Orders API
const orders = [
    { id: 101, item: "Laptop", amount: 50000 },
    { id: 102, item: "Mobile", amount: 15000 }
];

app.post("/orders", (req, res) => {
    orders.push(req.body);
    res.status(201).json({
        message: "Order added successfully",
        data: orders
    });
});


// 2. Users API
const users = [
    { id: 1, name: "Raman", email: "raman@gmail.com" },
    { id: 2, name: "Ajay", email: "ajay@gmail.com" }
];

app.post("/users", (req, res) => {
    users.push(req.body);
    res.status(201).json({
        message: "User added successfully",
        data: users
    });
});


// 3. Products API
const products = [
    { id: 11, name: "Mouse", price: 800 },
    { id: 12, name: "Keyboard", price: 1200 }
];

app.post("/products", (req, res) => {
    products.push(req.body);
    res.status(201).json({
        message: "Product added successfully",
        data: products
    });
});


// 4. Students API
const students = [
    { roll: 101, name: "Ajay", marks: 88 },
    { roll: 102, name: "Raman", marks: 76 }
];

app.post("/students", (req, res) => {
    students.push(req.body);
    res.status(201).json({
        message: "Student added successfully",
        data: students
    });
});


// 5. Employees API
const employees = [
    { id: 1, name: "Raman", dept: "HR" },
    { id: 2, name: "Ajay", dept: "IT" }
];

app.post("/employees", (req, res) => {
    employees.push(req.body);
    res.status(201).json({
        message: "Employee added successfully",
        data: employees
    });
});


// 6. Books API
const books = [
    { id: 201, title: "Swift Basics", author: "Apple" },
    { id: 202, title: "Node.js Mastery", author: "Ryan Dahl" }
];

app.post("/books", (req, res) => {
    books.push(req.body);
    res.status(201).json({
        message: "Book added successfully",
        data: books
    });
});


// 7. Movies API
const movies = [
    { id: 1, name: "Inception", rating: 9 },
    { id: 2, name: "Interstellar", rating: 8 }
];

app.post("/movies", (req, res) => {
    movies.push(req.body);
    res.status(201).json({
        message: "Movie added successfully",
        data: movies
    });
});


// 8. Courses API
const courses = [
    { id: 101, course: "Web Development", duration: "3 Months" },
    { id: 102, course: "App Development", duration: "4 Months" }
];

app.post("/courses", (req, res) => {
    courses.push(req.body);
    res.status(201).json({
        message: "Course added successfully",
        data: courses
    });
});


// 9. Cities API
const cities = [
    { id: 1, name: "Delhi", population: "2 Cr" },
    { id: 2, name: "Mumbai", population: "1.8 Cr" }
];

app.post("/cities", (req, res) => {
    cities.push(req.body);
    res.status(201).json({
        message: "City added successfully",
        data: cities
    });
});


// 10. Weather API
const weather = [
    { city: "Delhi", temp: 30, condition: "Sunny" },
    { city: "Kolkata", temp: 28, condition: "Cloudy" }
];

app.post("/weather", (req, res) => {
    weather.push(req.body);
    res.status(201).json({
        message: "Weather report added successfully",
        data: weather
    });
});


// Start server
app.listen(5000, () => {
    console.log("Server running on port 5000");
});
