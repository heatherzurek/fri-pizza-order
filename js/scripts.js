//BUSINESS LOGIC FOR PIZZA SHOP
//global variable to save the pizzas inside
function PizzaShop() {
  this.pizza = []
}
  // this.currentId = 0

PizzaShop.prototype.addPizza = function(pizza) {
  // pizza.id = this.assignId();
  this.pizza.push(pizza);
}

// PizzaShop.prototype.assignId = function() {
//   this.currentId += 1;
//   return this.currentId;
// }

// BUSSINESS LOGIC FOR PIZZA
function Pizza(pizzaTopping, pizzaSize, pizzaRequests) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
  this.pizzaRequests = pizzaRequests;
  // this.price = pizzaPrice;
}

// Pizza.prototype.sizeCalculator = function (inputSize) {
//   this.pizzaSize = inputSize;
// };
//
// Pizza.prototype.findPrice = function () {
//   if(this.pizzaSize === "small") {
//     this.price = 10;
//   } else if (this.size === "medium") {
//     this.price = 15;
//   } else {
//
//   }
//   return this.price;
// }

// Pizza.prototype.pizzaOrder = function() {
//   return this.pizzaTopping + " " + this.pizzaSize;
// }

//USER INTERFACE LOGIC
var pizzaShop = new PizzaShop


$(document).ready(function() {
  $("form#newOrder").submit(function(event) {
    event.preventDefault();
    var inputtedPizzaTopping = $("select#newTopping").val();
    var selectedPizzaSize = $("select#newSize").val();
    var inputtedPizzaRequests = $("input#pizzaRequests").val();
    // var  = $("input:radio[name=size]:checked").val();

    // $("input#newTopping").val("");
    // $("input#newSize").val("");
    var newPizza = new Pizza(inputtedPizzaTopping, selectedPizzaSize, inputtedPizzaRequests);
    pizzaShop.addPizza(newPizza);

    $("#showOrder").text(newPizza.pizzaSize + " " + newPizza.pizzaTopping + " " + newPizza.pizzaRequests);
    console.log(newPizza);
  })
})
