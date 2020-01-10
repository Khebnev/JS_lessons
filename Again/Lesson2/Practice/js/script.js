//Подзадача 2
let money = prompt("Ваш бюджет?", "");
let name = prompt("Название Вашего магазина?", "");
let time = 19;


//подзадача3
let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false
}

for (let i = 0; i < 5; i++) {

    let a = prompt("Какой товар будем продавать?");

    if ((typeof(a)) ==='string' &&  (typeof(a)) === null && a != '' && a.length < 50 ) {
        console.log("Всё верно");
        mainList.shopGoods[i] = a;
        //теряем тип нашего товара. Чтобы этого избежать нехобходимо написать else с таким условием, чтобы вернуться к нашему вопросу заново.
    } else {
//        i = i - 1;
    }
}

if(time < 0) {
    console.log("Такого просто не может быть");
} else if(time > 8 && time < 20) {
    console.log("Время работать");
           } else if(time < 24) {
                   console.log("Уже слишком поздно!");
                      } else {
                          console.log("В сутках толь 24 часа!");
                      }




//подзадача5
alert(mainList.budget / 30);

console.log(mainList);
