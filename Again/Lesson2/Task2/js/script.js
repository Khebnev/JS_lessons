let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

//for (i = 0; i < 6; i++){
//    i++;
//    alert(week[i]);
//}
//alert(week[0]);
//alert(week[1]);
//alert(week[2]);
//alert(week[3]);
//alert(week[4]);
//alert(week[5]);
//alert(week[6]);

document.write(week[0]);
document.write("<br \/>");
document.write(week[1]);
document.write("<br \/>");
document.write(week[2]);
document.write("<br \/>");
document.write(week[3]);
document.write("<br \/>");
document.write(week[4].italics());
document.write("<br \/>");
document.write(week[5].bold());
document.write("<br \/>");
document.write(week[6].bold());
//document.write("<br \/>");

let numbers = [];
for (i = 0; i < 7; i++){
    a = prompt("Введите многозначное число", "");
    numbers[i] = a;
//    console.log(numbers[i]);
    numbers.forEach((item) => {
        if (item.startsWith('3') || item.startsWith('7')){
            console.log(item);
        }
    })
}



//let arr = ['32', '27', '755', '104', '47', '78', '377']; // в виде строк
//
//arr.forEach((item) => {
//  if (item.startsWith('3') || item.startsWith('7')) {
//    console.log(item);
//  }
//});
