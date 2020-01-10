//Часть 1
//let options = {
//    name: "test",
//    width: 1024,
//    height: 1024
//}
//options.bool = false;
//options.colors = {
//    border: "black",
//    background: 'red'
//}
//
//delete options.bool;
//
//for (let key in options) {
//    console.log("Свойство " + key + " имеет значение " + options[key]);
//}
//
//console.log(Object.keys(options).length);

//Часть 2

//let arr = [1,2,3,4,5];

//console.log(arr.pop()); убрать послед. элемент массива
//arr.push(6); добавить в конец эл. массива
//arr.shift(); удалить первый элемент массива
//arr.unshift(0); добавить первый элемент массива
//
//for (let i = 0; i < arr.length; i++){
//    alert(arr[i]);
//}

//console.log(arr);

//ещё
//let arr = [1,2,3,4,5];
//
//arr[99] = 99;
//
//console.log(arr.length);

//перебор форичем
//let first = [1, "second", 3,4,5];
//
//first[99] = 99;
//console.log(first.length);
//
//first.forEach(function(item,i,first) { // item - элемент массива, i - это порядковый номер элемента массива, arr - это массив, который перебирается
//    console.log(i + ": " + item + "(массив: " + first + ")");
//})

//Пример ввод данных пользователя в массив
//let first = [];
//let i = prompt("", "");
//first = i.split(",");
//
//    console.log(first);

//Обратная задача
//let first = ["qq", "zz", "aa", "p"];
//let i = first.join(",");
//
//    console.log(i);

//Сортировка массива
//
//let first = [1, 15, 20, 3];
//
//function sortNumbers(a,b){
//    return a - b;
//}
//
//let i = first.sort(sortNumbers);
//
//    console.log(i);
//

//Свойство прото на практике
let soldier = {
    health: 400,
    armor: 100
}

let john = {
    health: 100
}

john.__proto__ = soldier;

console.log(john);
console.log(john.armor);
