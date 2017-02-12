(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var toBuy = this;
  toBuy.name = "";
  toBuy.quantity = 0;

  toBuy.itemsToBuy = function() {
    ShoppingListCheckOffService.setItemsToBuy(toBuy.name, toBuy.quantity);
  }

  toBuy.items = ShoppingListCheckOffService.getItemsToBuy();

  toBuy.removeItem = function (itemIndex) {
    ShoppingListCheckOffService.removeItem(itemIndex);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var alreadyBought = this;

  alreadyBought.itemsBought = ShoppingListCheckOffService.itemsBoughtArray;

}

function ShoppingListCheckOffService() {
  var service = this;//singleton

  service.itemsArray = [
    { name : 'Cashews', quantity : 1 }, { name : 'Cookies', quantity : 1 },
    { name : 'Crisps', quantity : 1 }, { name : 'Peppers', quantity : 1 },
    { name : 'Coke', quantity : 1 }
  ];

  service.itemsBoughtArray = [];

  service.setItemsToBuy = function(name, quantity) {

    var items = { name : name, quantity : quantity };

    itemsArray.push(items);

  };

  service.getItemsToBuy = function() {
    return service.itemsArray;
  };

  service.getItemsBought = function() {
    return service.itemsBoughtArray;
  };

  service.removeItem = function (itemIdex) {
    service.itemsBoughtArray.push( service.itemsArray.splice(itemIdex, 1)[0] );
  };

}

})();
