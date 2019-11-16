/* 1. Напишите выражение, которое посчитает и выведет в 
консоль сколько секунд в 3 часах.*/
let hours = 3;
let minutes = 60;
let seconds = 60;
let seconds3Hours = hours*minutes*seconds;
console.log(seconds3Hours);

/*
2. Переделайте операторы в краткую форму записи для данных выражений: 
var num = 1;
num = num + 12;
num = num - 14;
num = num * 5;
num = num / 7;
num = num + 1;
num = num - 1;
alert(num);
*/

let num = 1;
num+= 12;
num-= 14;
num*= 5;
num/= 7;
num++;
num--;
alert(num);

/* 
3.  Создайте переменные a=10, b=2 и c=5. Выведите в консоль их сумму.
*/

let a = 10;
let b = 2;
let c = 5;
console.log(a+b+c);

/*
4. Создайте переменные a1=17 и b1=10. 
Отнимите от a1 переменную b1 и результат присвойте переменной c1. 
Затем создайте переменную d, присвойте ей значение 7. 
Сложите переменные c1 и d, а результат 
запишите в переменную result. Выведите в консоль значение переменной result.
*/

let a1 = 17;
let b1 = 10;
let c1 = a1-b1;
let d = 7;
let result = c1 + d;
console.log(result);

/*
5. Создайте переменную name и присвойте ей ваше имя. 
Выведите в консоль фразу 'Привет, %Имя%!'.
*/

let name = 'Наталия';
console.log('Привет '+name+'!');


 