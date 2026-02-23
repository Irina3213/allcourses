// SHOP
// task: shop and products box
// Creat class Product, were wil be product from shop, and class Cart, who will be genarate this box. relization next function:
// Class Product must have: name, price
// class Cart must have methodes:
// addProduct(product) -added product into box;
// removeProduct(productName)-delete product from box by name
// getTotalPrice()-retern all summa of all product into box
// listProducts()-show all items into box

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

class Cart {
    constructor(){
        this.products = [];
    }
    addProduct(...product) {
        this.products.push(...product);
        log(this.products)
    }
}

const cart = new Cart();

const bread = new Product("Bread", 30);
const apple = new Product("Apple", 50);
const milk = new Product("Milk", 60);

cart.addProduct(bread, apple, milk);
log(cart.products);