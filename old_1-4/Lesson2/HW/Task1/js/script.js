let num = 50;
let days = 7;

if(num < 49) {
   console.log("Неверно");
   } else if(num > 100) {
       console.log("Неверно");
   } else{
       console.log('Верно');
   }

(num == 50)? console.log('Верно') :  console.log("Неверно");

switch (num) {
    case 49:
        console.log('Мало');
        break;
    case 100:
        console.log('Много!');
        break;
    case 80:
        console.log('Все еще много!');
        break;
    case 50:
        console.log("В точку!");
        break;
    default:
        console.log("Не в этот раз");
        break;
}


//while (num < 55) {
//    console.log(num);
//    num++
//}

//do {
//    console.log(num);
//    num++;
//}
//
//while (num < 55);

//Цикл for
//for (let i = 0; i < 8; i++)
//    console.log(i);

//Второй вариант цикла через while
while (days > 0){

    days--;
    console.log(days);
}


//Третий вариант цикла через do while
//do {
//    console.log(days);
//    days--;
//}
//
//while (days < 7 && days > 0);


//Task 2

//    a = [1, 2, 3];
//b = [1, 2, 3];
//if (a == b){
//    alert("А равно Б");
//} else {
//    alert("А не равно Б");
//}

//alert( 2 && 1 && null && 0 && undefined  );
