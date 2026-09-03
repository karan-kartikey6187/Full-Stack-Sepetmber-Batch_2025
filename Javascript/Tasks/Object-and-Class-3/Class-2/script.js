class Product {
  constructor(id, name, price, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  getTotalPrice() {
    return this.price * this.quantity;
  }

  updateQuantity(qty) {
    this.quantity = qty;
  }

  getProductDetails() {
    return `
Product ID: ${this.id}
Product Name: ${this.name}
Price: ₹${this.price}
Quantity: ${this.quantity}
Total Price: ₹${this.getTotalPrice()}
`;
  }
}

let prodct1 = new Product(101, 'Mobile' , 20000, 4);

console.log(prodct1.getTotalPrice())
prodct1.updateQuantity(6)
console.log(prodct1.getProductDetails())
