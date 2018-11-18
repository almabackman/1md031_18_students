function MenuItem(bn, kcal, glu, lac) {
    this.BurgerName = bn; // The this keyword refers to the object itself
    this.kalories = kcal;
    this.gluten = glu;
    this.lactose = lac;
    this.info = function() {
    	var ret=this. BurgerName+": "
      if (this.gluten) {ret += "Innehåller gluten"}
      if (this.lactose) {ret += " Innehåller laktos"}
      return ret;
    };
    this.name = function() {
        return this.BurgerName + ' ' + this.kalories + ' ' +  this.gluten + ' ' + this.lactose;

    };
}


//
// // Objects are then instantiated using the new keyword
// var bur1 = new MenuItem('Cute Burger', 1000, false, true);
// var bur2= new MenuItem('Cute Bigger Burger',1500,true, true);
// var bur3= new MenuItem('Cute Enormous Burger',2500,false, false);
// var bur4= new MenuItem('The cutest smallest Burger', 500, false, false);
// var bur5= new MenuItem('Not so cute  Burger', 3000, true, true);
// var menu = [bur1, bur2, bur3, bur4, bur5];
//
// var div = document.getElementById("myID")
// for (var i=0;i<menu.length; i++) {
// 	var listItem = document.createElement("li");
// 	if (menu[i].lactose || menu[i].gluten) {
//   	var listVal = document.createTextNode(menu[i].info());
//   } else {
// 		var listVal = document.createTextNode(menu[i].BurgerName);
//   }
//   listItem.appendChild(listVal);
//   div.appendChild(listItem);
// };
