
class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

const product1 = new Product("Shirt",19.99);
const product2 = new Product("Pants",24.39);
const product3 = new Product("Underwear",24.39);

product1.displayProduct();

const total = product1.calculateTotal(0.045);
console.log(`Total price (with tax): $${total.toFixed(2)}`);