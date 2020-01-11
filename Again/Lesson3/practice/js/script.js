//Подзадача 2
let money,
    name,
    time,
    price

function start() {


    while (isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет?", "");
    }

    name = prompt("Название Вашего магазина?", "").toUpperCase();
    time = 21;
}
start();

//подзадача3
let mainList = {
    budget: money,
    shopName: name,
    shopGoods: [],
    employers: {},
    open: false,
    discount: false
}


function chooseGoods() {
    for (let i = 0; i < 5; i++) {

        let a = prompt("Какой товар будем продавать?");

        if ((typeof(a)) === 'string' &&  (typeof(a)) != null && a != '' && a.length < 50 ) {
            console.log("Всё верно");
            mainList.shopGoods[i] = a;
            //теряем тип нашего товара. Чтобы этого избежать нехобходимо написать else с таким условием, чтобы вернуться к нашему вопросу заново.
        } else {
            i = i - 1;
        }
    }
}
//chooseGoods();




function workTime(time){
    if(time < 0) {
        console.log("Такого просто не может быть");
    } else if(time > 8 && time < 20) {
        console.log("Время работать");
               } else if(time < 24) {
                       console.log("Уже слишком поздно!");
                          } else {
                              console.log("В сутках толь 24 часа!");
                          }
}
workTime(18);


//подзадача5
alert("Ваш ежедневный бюджет: " + mainList.budget / 30 + " грн");

console.log(mainList);



//callback функции

function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}
learnJS("JavaScript", done);

function done() {
        console.log("Я прошел 3й урок!");
}
