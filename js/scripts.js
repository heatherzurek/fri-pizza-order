//business logic for pizza shop
function PizzaShop() {
  this.pizzas = []
}

//global variable to save the pizzas inside

PizzaShop.prototype.addPizza = function(pizza) {
  this.pizzas.push(pizza);
}

//this new method called addPizza(), takes a Pizza object as an argument
//locates the PizzaShops pizzas array by calling this.pizzas
//and uses push() to add the Pizza provided as an argument to the PizzaShops array property

// business logic for pizza
function Pizza(pizzaTopping, pizzaSize) {
  this.pizzaTopping = pizzaTopping;
  this.pizzaSize = pizzaSize;
}

Pizza.prototype.pizzaOrder = function() {
  return this.pizzaTopping + " " + this.pizzaSize;
}

// var testPizza = new Pizza("Cheese," "Large");
//
// testPizza.pizzaOrder();
