//business logic for pizza shop
//global variable to save the pizzas inside
function PizzaShop() {
  this.pizzas = [],
  this.currentId = 0
}

PizzaShop.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas.push(pizza);
}

PizzaShop.prototype.assignId = function() {
  this.currentId += 1;
  retun this.currentId;
}

PizzaShop.prototype.findPizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if(this.pizzas[i]) {
      if this.pizzas[i].id == id) {
        return this.pizzas[i];
      }
    }
  };
  return false;
}

PizzaShop.prototype.deletePizza = function(id) {
  for (var i=0; i< this.pizzas.length; i++) {
    if (this.contacts[i]) {
      if (this.pizzas[i].id == id) {
        delete this.pizzas[i];
          return true;
      }
    }
  };
  return false;
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
