
var socket= io()
var vm = new Vue({

  el: '#vue-container',
  data: {

    orders: {},
    order: {},
    losburger: "SELECT BURGERS!",
    item: food,
    isHidden: true,
    checkedNames: [],
    custInfo: [],



    },

  methods: {
    say: function (message) {
      console.log(message)
    },


    getNext: function () {
      var lastOrder = Object.keys(this.orders).reduce(function (last, next) {
        return Math.max(last, next);
      }, 0);
      return lastOrder + 1;
    },

    addOrder: function () {
      var index = this.getNext();
      this.orders[index] = this.order;
      socket.emit("addOrder", {orderId: index,
                                  details: {x: this.orders[index].x,
                                          y: this.orders[index].y},
                                orderItems: this.orders[index].orderItems,
                                custInfo: this.custInfo})

    },


    displayOrder: function(event){
      var offset = {x: event.currentTarget.getBoundingClientRect().left,
                    y: event.currentTarget.getBoundingClientRect().top};

      this.order ={
        x: event.clientX - 10 - offset.x,
        y: event.clientY - 10 - offset.y,
      orderItems: this.checkedNames};

      console.log(event.clientX-10-offset.x, event.clientY-10-offset.y)

    }

  }



})




//menu:
 //[{name:"cute burger",id:'b1', calories:"1000 kalorier" , gluten:false,lactose:true,image: "https://media.giphy.com/media/l1HwxRQbVSfJAyCFqF/giphy.gif"},
 //{name:"cute bigger burger",calories:"1500 kalorier", gluten:true,lactose:true,image: "https://media.giphy.com/media/8cMMs8bE4aWej1usaC/giphy.gif"},
 //{name:"cute enormous burger", calories: "2000 kalorier", gluten:true,lactose:true,image: "https://media.giphy.com/media/4EEHyzeRi5yBPB4JTe/giphy.gif"},
 //{name: "the smallest cutest burger", calories: "500 kalorier", gluten:false, lactose: false, image: "https://midnightsnack.files.wordpress.com/2009/09/tiny-burger.png"},
 //{name: "not so cute burger", calories: "3000 kalorier", gluten: true, lactose:true, image: "https://x-default-stgec.uplynk.com/ausw/slices/12f/5c3d34b8b29a45469a86c02775b7a2cf/12f764d5c1a84425a30779a92be90da2/poster_548315dd2c6b4884ae2d80af41ded1bc.png"}]
