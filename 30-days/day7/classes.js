//class (ES6) provides a more  structured and clearner way to 
// work with objects compared to traditional constructor dunctions
// ex. static keyword, encapsulation, inheritance.

class Product{
    constructor(name,price){
        this.name = name;
        this.price = price;
    }

    displayProduct(){
        console.log(`product: ${this.name}`);
        console.log(`product: $${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);

    }


}

const salesTax = 0.05;

let product1 = new Product("shirt",19.99);
let product2 = new Product("pant",20);
product1.displayProduct();
product2.displayProduct();

const total = product1.calculateTotal(salesTax);
console.log(`Total price {with tax}: $${total.toFixed(2)}`);



// static = keyword that defines properties or methods that belong
// to a class itself rather than the objects created
// from that class (class owns anything static,not the objects)



class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius * 2;
    }

    static getCircumference(radius){
        return 2 * this.PI * radius;
    }

}

console.log(MathUtil.PI)
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getCircumference(10));


class User{
    static UserCount = 0;

    constructor(username){
        this.username = username;
        User.UserCount++;
    }

    static getUserCount(){
        console.log(`There are ${User.UserCount} users online`)
    }

    sayHello(){
        console.log(`Hello, my username is ${this.username}`);
    }
}



const user1 = new User("kanwal");
const user2 = new User("vishal");
const user3 = new User("raj");

console.log(user1.username);
console.log(User.UserCount);
User.getUserCount();
