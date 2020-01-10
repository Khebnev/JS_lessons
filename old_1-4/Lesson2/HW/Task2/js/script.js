console.log("Часть 1");
let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
console.log(week);

console.log(week[0]);
console.log(week[1]);
console.log(week[3]);
console.log(week[4]);
console.log(week[5]);
console.log(week[6]);

document.write(week[0].blink());
document.write(" <br \/> ");
document.write(week[1].italics());
document.write(" <br \/> ");
document.write(week[2].blink());
document.write(" <br \/> ");
document.write(week[3].blink());
document.write(" <br \/> ");
document.write(week[4].blink());
document.write(" <br \/> ");
document.write(week[5].bold());
document.write(" <br \/> ");
document.write(week[6].bold());
document.write(" <br \/> ");


//part2
console.log("Часть 2");
var arr = [];

//arr[0] = prompt("Введите многозначное число");
//console.log(arr[0]);
for (let i = 0; i < 6; i++){
    arr[i] = prompt("Введите многозначное число");
    document.write(arr[i].blink());
    document.write(" <br \/> ");
    console.log(arr[i]);
}

//Часть 3. Вывести в консоль только те, что начинаются с цифры 3 или 7 (Должны присутствовать в массиве)
