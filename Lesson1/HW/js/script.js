var budget = +prompt("Ваш бюджет?");
var nameShop = prompt("Имя вашей компании?");



mainList = {
    budget,
    nameShop,
    shopGoods: [],
//    shopGoods: ["shoe", "suit", "hat"],
    employers: {
        name: "one",
        name: "two",
        name: "three"
    }
//    window.open("http://google.com")
}
//console.log(budget, nameShopshop);
//prompt("Какой тип товаров будем продавать?", mainList.shopGoods);
//prompt("Какой тип товаров будем продавать?", mainList.shopGoods);
//prompt("Какой тип товаров будем продавать?", mainList.shopGoods);
//console.log(mainList.shopGoods);
var shopGoods = [prompt('Какой тип товаров будем продавать?1'),prompt('Какой тип товаров будем продавать?2'), prompt('Какой тип товаров будем продавать?3') ];
console.log(shopGoods);
console.log(budget/30);
alert("Ваш бюджет на день: " + budget/30);
