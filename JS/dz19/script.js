"use strict";
/* 1. Сделайте функцию isNumberInRange, которая параметром принимает число и
проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция
 возвращает true, если не так - false.*/

 let n = +prompt('Введите данные', 5);
 function isNumberInRange(n){
    if(n > 0 && n < 10){
        return true;
    }else{
        return false;
    }
}
console.log( isNumberInRange(n) );

/*2. Сделайте функцию isEven() (even - это четный), которая параметром 
принимает целое число и проверяет: четное оно или нет. Если четное - пусть 
функция возвращает true, если нечетное - false.*/

let m = +prompt('Введите числовое значение', '');
function isEven(a){
    if(a % 2 ==0){
        return true;
    }else{
        return false;
    }
}
console.log( isEven(m) );


/* 3. Переписать код из конструкции if в switch

var value = +prompt('value?', '');
if (value == 0) {
  alert( 0 );
}
if (value == 1) {
  alert( 1 );
}
if (value == 2 || value == 3) {
  alert( '2,3' );
}*/

let value = +prompt('Введите значение от 0 до 3', '');

switch(value){
    case 0:
        alert( 0 );
        break;
    case 1: 
        alert( 1 );
        break;
    case 2:
    case 3:
        alert( '2,3' );
        break;
    default:
        alert('Введённое значение не входит в заданный диапазон');
}

/* 4. Напишите функцию min(a,b), которая возвращает меньшее из чисел a,b

Пример вызовов: 
min(3, 5) // вернет 3
min(5, -1) // вернет -1 */

let a = +prompt('Введите значение a', '');
let b= +prompt('Введите значение b', '');
function min(a, b) {
    if (a > b) {
      return b;
    } else if (a==b){
        console.log(a=b);
    }  else{
      return a;
    }
  }
  console.log (min(a, b));