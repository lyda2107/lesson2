//--створити масив та вивести його в консоль:
// - з 5 стічкових значень
/*let skills=['work', 'house', 'teaching', 'leisure', 'hobby']
console.log(skills[0])
console.log(skills[1])
console.log(skills[2])
console.log(skills[3])
console.log(skills[4])*/
// noinspection JSAnnotator

//-з 5 числових значень
/*let  num=[38, 11, 42, 54, 53]
console.log(num[0])
console.log(num[1])
console.log(num[2])
console.log(num[3])
console.log(num[4])*/

//з 5 значень стрічкового, числового та булевого типу
/*let bul=['pen', 3, 5000, 5<6, 45===45]
console.log(bul[0])
console.log(bul[1])
console.log(bul[2])
console.log(bul[3])
console.log(bul[4])*/

//-- Створити пустий масив. Наповнити його будь-якими значеннями
// звертаючись до конкретного індексу. Вивести в консоль
/*let mas=['English', 'Chinese', 'Spanish', 'Moldovan', 'Ukrainian', 'Belarusian', 23450, 1981, 2009,1956]
console.log(mas[8])*/

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
/*for (let i=0; i<10; i++) {
    document.write('<div>'+'lamp' +'</div>')
}*/

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
/*for (let i = 0; i < 10; i++) {
    document.write('<div>'+ 'picture' +' ' + i+'</div>');
}*/

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
/*let n=0;
while (n < 20) {
    document.write('<h1>'+'pen'+ '</h1>');
    n++;
}*/

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
/*let i=0;
while (i < 20) {
    document.write('<h1>' + 'pen' + ' ' + i + '</h1>');
    i++;
}*/

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
/*let menu =[23, 45, 56, 78, 85, 95, 159, 456, 123, 785];
for (let i = 0; i<menu.length; i++) {
    console.log(menu[i]);
}*/

//- Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
/*let menu =['pen', 'pencil', 'table', 'chair', 'bed', 'wardrobe', 'picture', 'box', 'window', 'frame'];
for (let i = 0; i<menu.length; i++) {
    console.log(menu[i]);
}*/

// Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
/*let menu =['pen', 'pencil', 'table', 'chair', 85, 95, 159, 6===6, 10<9]
for (let i = 0; i<menu.length; i++) {
    console.log(menu[i]);
}*/

//Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою
// if та typeof вивести тільки булеві елементи
let menu =['pen', 'pencil', 'table', 'chair', 85, 95, 159, 6===6, 10<9]
for (let i = 0; i<menu.length; i++) {
  if (menu [boolean]!i)
        console.log(typeof menu [boolean]);
  }