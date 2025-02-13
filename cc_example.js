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

// Task 5 
let orders = [
    {id:101, customer: "Alice", total: 300},
    {id:102, customer: "Bob", total: 450},
    {id:103, customer: "Charlie", total: 200}
];
function findOrders(orders, orderId){
    return orders.find(order => order.id === orderId);
}
some_order = findOrders(orders, 101)
console.log(`${some_order.customer} has an order id: ${some_order.id} with a total of $${some_order.total}`);

// Task 6 
let inventory = {
    items: [],
    addItem(name, quantity) {
        this.items.push({name, quantity});
    },
};
inventory.addItem("Monitor", 5);
inventory.addItem("Keyboard", 10);
console.log(inventory.items);
