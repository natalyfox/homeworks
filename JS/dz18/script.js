/*
1. Если переменная a равна '1' и по значению и по типу, 
то выведите 'Верно', иначе выведите 'Неверно';.
Проверьте работу скрипта при a, равном '1', 1, 3.
*/
let a = '1';
if(a === '1'){
    console.log('Верно');
}else{
    console.log('Неверно');
}

/*let a = 1;
if(a === '1'){
    console.log('Верно');
}else{
    console.log('Неверно');
}*/

/*let a = 3;
if(a === '1'){
    console.log('Верно');
}else{
    console.log('Неверно');
}*/

/*
2.Если переменная item не равна true, то выведите 'Верно', 
иначе выведите 'Неверно';.
Проверьте работу
скрипта при item, равном true, false. Напишите два варианта 
скрипта - с короткой записью и с длинной.
*/

let item = true;
if(item != true){
    console.log('Верно');
}else{
    console.log('Неверно');
}

/* let item = false;
if(item != true){
    console.log('Верно');
}else{
    console.log('Верно');
}*/


let result = (item != true) ? console.log('Верно') : console.log('Неверно');



/*
3. Если переменная a1 больше нуля и меньше 4-ти, то выведите 'Верно',
иначе выведите 'Неверно'.
Проверьте работу скрипта при a, равном 4, 0, -3, 2.
*/

let a1 = 4;
if(a1>0 && a1<4){
    console.log('Верно');
}else{
    console.log('Неверно');
}

let a2 = 0;
if(a2>0 && a2<4){
    console.log('Верно');
}else{
    console.log('Неверно');
}

let a3 = -3;
if(a3>0 && a3<4){
    console.log('Верно');
}else{
    console.log('Неверно');
}

let a4 = 2;
if(a4>0 && a4<4){
    console.log('Верно');
}else{
    console.log('Неверно');
}

/*
4. Если переменная k больше 3-х и меньше 12-ти, или переменная 
n больше или равна 7-и и меньше 15-ти, то выведите 'Верно',
 в противном случае выведите 'Неверно'.
*/


let k= prompt('Введите k', ' ');
let n= prompt('Введите n', ' ');

if((k >= 3 && k < 12) || (n >= 7 && n < 15)){
    console.log('Верно');
}else{
    console.log('Неверно');
}

/*
5. В переменной month лежит какое-то число из интервала от 1 до 12. 
Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
*/

let month = prompt('Введите месяц года в числовом формате', ' ');

if(month >= 1 && month <= 2 || month == 12 ){
    console.log('Зима');
}
else if(month >= 3 && month <= 5){
    console.log('Весна');
}else if(month >=6 && month <= 8){
    console.log('Лето');
}else if(month >= 9 && month <= 11){
    console.log('Осень');
}else{
    console.log('Такого месяца не существует!!!')
}
