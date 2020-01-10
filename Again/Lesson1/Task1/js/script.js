//Подзадача 2
let money = prompt("Ваш бюджет?", "");
let name = prompt("Название Вашего магазина?", "");
//подзадача3
let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}
//подзадача4
    var a = prompt("Какой товар будем продавать?");
    var b = prompt("Какой товар будем продавать?");
    var c = prompt("Какой товар будем продавать?");

    mainList.shopGoods[0] = a;
    mainList.shopGoods[1] = b;
    mainList.shopGoods[2] = c;

console.log(mainList.shopGoods[0]);
console.log(mainList.shopGoods[1]);
console.log(mainList.shopGoods[2]);

//подзадача5
alert(mainList.budget/30);

