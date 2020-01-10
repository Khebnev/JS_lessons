let money,
    name,
    time,
    price

function start() {
//    money = promt("Ваш бюджет?", '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", '');
    }

        name = prompt("Название вашего магазина?", '').toUpperCase();
        time = 21;
}
start();

let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false,
    shopItems: [],
    chooseGoods: function chooseGoods() {
    for (let i = 0; i < 5; i++) {
        let a = prompt("Какой тип товаров будем продавать?", '');
            if  ((typeof(a)) === 'string' && ( (typeof(a)) === null && a != '' && a.length < 50)){
                console.log("Всё верно");
                mainList.shopGoods[i] = a;
            } else {
                i = i - 1;
            }
        }
    },
    workTime: function workTime(time) {
        if (time < 0) {
            console.log("Такого не моет быть!");
        } else if (time > 8 && time < 20) {
            console.log("Время работать!");
            mainList.open = true;
        } else if ( time < 24) {
            console.log("В сутках только 24 часа!");
        }
    },
    dayBudget: function dayBudget() {
        alert("Ежедневный бюджет " + mainList.budget / 30);
    },
    makeDiscount: function makeDiscount() {
        if (mainList.discount == true) {
            price = (price/100)*80;
        }
    },


    hireEmployers: function hireEmployers() {
    for (let i = 1; i < 4; i++) {
        let name = promt("Имя сотрудника");
        mainList.employers[i] = name;
        }
    },
    chooseShopItems: function chooseShopItems() {
        let items = prompt("Перечислите через запятую Ваши товары", "");

        mainList.shopItems = items.split(",");
        mainList.shopItems.push(prompt("Подождите, ещё ", ""));
        mainList.shopItems.sort();
        }

}


console.log(mainList);



//Мой старый вариант
//let money = prompt("Ваш бюджет?");
//let name = prompt("Имя вашей магазина?");
//let time = 19;
//
//
//let mainList = {
//    budget: money,
//    shopName: name,
//    shopGoods: [],
//    employers: {},
//    open: false
//}
//
//for (let i = 0; i < 5; i++) {
//
//    let a = prompt("Какой тип товаров будем продавать?");
//    if  ((typeof(a)) === 'string' && ( (typeof(a)) === null && a != '' && a.length < 50)){
//        console.log("Всё верно");
//        mainList.shopGoods[i] = a;
//    } else {
//
//    }
//}
//
//if (time < 0) {
//    console.log("Такого просто не может быть!");
//    } else if (time > 8 && time < 20) {
//        console.log("Время работать!");
//    } else if (time < 24) {
//        console.log("Уже слишком поздно!");
//    } else {
//        console.log("В сутках только 24 часа!");
//    };


/* Старое и не нужное
mainList.shopGoods[0] = prompt("Какой тип товаров будем продавать?");
//mainList.shopGoods[1] = prompt("Какой тип товаров будем продавать?");
//mainList.shopGoods[2] = prompt("Какой тип товаров будем продавать?");

//var shopGoods = [prompt('Какой тип товаров будем продавать?1'),prompt('Какой тип товаров будем продавать?2'), prompt('Какой тип товаров будем продавать?3') ];*/

//alert(mainList.budget / 30);
//
//console.log(mainList);

/* Старое и не нужное
console.log(shopGoods);
console.log(budget/30);
alert("Ваш бюджет на день: " + budget/30); */
