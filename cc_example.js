// Task 1 
let products = [
    {name: "Laptop", price: 1200, category: "Electronics"},
    {name: "Phone", price: 800, category: "Electronics"},
    {name: "Desk Chair", price: 150, category: "Furniture"},
    {name: "Notebook", price: 5, category: "Stationery"},
    {name: "Headphones", price: 100, category: "Electronics"}
];
function getProductsByCategory(products, category) {
   return products.filter(product => product.category === category)
}
console.log(getProductsByCategory(products, "Electronics"));

// Task 2
function applyDiscount(products, discountRate) {
    return products.map(product => ({
        ...product,
        price: product.price - (product.price * discountRate)
    }))
}
console.log(applyDiscount(products, 0.1));

// Task 3
let sales = [250, 400, 150, 900, 1200];
function calculateTotalRevenue(sales) {
    return sales.reduce ((total, sale) => total + sale, 0)
}
console.log(calculateTotalRevenue(sales)); 

// Task 4
let employee = {
    name: "Johnn Doe",
    salary: 50000,
    position: "Manager"
};
function updateSalary(employee, percentageIncrease){
   employee.salary += employee.salary * percentageIncrease
};
updateSalary(employee, 0.1)
console.log(employee) 
