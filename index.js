/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

let array = [1, 2, 3, 4, 5];

/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/

let persona1 = {
    name: "Samantha",
    surnaame: "Doe",
    emailAddress: "Sam_Doe@live.co.uk",
    age: "25"
};

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

persona1.drivingLicense = true;


/* EXERCISE 4
Remove from the previously created object the age
*/

delete persona1.age;
console.log(persona1)

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

let persona2 = {
    name: "Sophie",
    surnaame: "Taylor",
    emailAddress: "SophTaylor@live.co.uk",
    age: "22"
};

console.log(persona1.emailAddress === persona2.emailAddress);

/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/

let totalShoppingCart = [100];
const shippingCost = 10;

let promotion = totalShoppingCart > 50 ? ("Free!") : ("£" + shippingCost)

console.log("Total of your cart is: £"  + totalShoppingCart)
console.log("Total shipping cost: "  + promotion )

/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

const blackFriday = totalShoppingCart * 0.8;


console.log("**BLACK FRIDAY DISCOUNT APPLIED**")
console.log("Total to pay: £" + blackFriday)


/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const car = {
    brand: "VolksWagen" ,
    model: "Tiguan" ,
    licensePlate: "YH19HDU",
}

let car2 = {...car, licensePlate: "AB12CDE"};
let car3 = {...car, licensePlate: "FG34HIJ"};
let car4 = {...car, licensePlate: "KL56MNO"};
let car5 = { ...car, licensePlate: "PQ78RST" };

console.log(car, car2, car3, car4, car5)

/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = [car, car2, car3, car4, car5];

console.log(carsForRent)

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.shift();
carsForRent.pop();

console.log(carsForRent);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(typeof car.model);
console.log(typeof car.licensePlate);
console.log(typeof car.brand);

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

let carsForSale = [
    {
        brand: "Peugeot",
        model: "207",
        licensePlate: "RS16XMD",
    },
    {
        brand: "Mitsubishi",
        model: "Outlander",
        licensePlate: "ZE10WEF",
    },
    {
        brand: "Mercedes",
        model: "A200",
        licensePlate: "GH20TYO",
    },
];

let totalCars = carsForRent.length + carsForSale.length;

console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

for (let index = 0; index < carsForSale.length; index++) {
    console.log("Car:", index + 1, carsForSale[index].brand, carsForSale[index].model, carsForSale[index].licensePlate);
    
}

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
