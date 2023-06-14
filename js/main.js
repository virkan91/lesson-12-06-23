


/*  task -1 
 Зная сторону квадрата a, найдите периметр P квадрата:
P = 4•a   */

// function perimetr(num){
//    return p = 4 * num;
// }
// console.log(perimetr(7))
// console.log(perimetr(8))
// console.log(perimetr(25))



/* task -2 
Зная сторону квадрата, найдите площадь квадрата S. */

// function area(num){
//     return s = (num * num)
// }
// console.log(area(8))
// console.log(area(11))
// console.log(area(6))



/* Task - 3 
Даны два числа А и В, найти их среднее значение */

// function averageNum(a, b ){
//     let average = (a + b)/2
//     return average;
// }
// console.log(averageNum(7,9))
// console.log(averageNum(8,12))
// console.log(averageNum(10,30))


/* Task -4
Дано натуральное число А если оно чётное выведите 3 в
противном случи 4. */

// function evenOrOdd(a){
//   if(a % 2 == 0){
//   return "3"
// }
// return "4"
// }
// console.log(evenOrOdd(7))
// console.log(evenOrOdd(12))
// console.log(evenOrOdd(-8))



/* Task - 5
Написать программу для вычисления значения функции*/

// function calculation(x){
//   return y = 17 * x * x - 6 * x + 13
// }
// console.log(calculation(2))
// console.log(calculation(0))
// console.log(calculation(10))



/* Task -  6 
Создайте функцию, которая принимает три значения: h-часы,
m-минуты S-секунды. Возвращает значение с наибольшей
продолжительностью */
 
// function longestTime(h, m, s){
//     let hour = h * 3600
//     let min = m * 60
//     let sec = 60

//         if(hour > min && hour > sec){
//             return h
//         }
//         if(min > hour && min > s){
//             return m
//         }
//         return s
// }
// console.log(longestTime(1, 59, 3598))
// console.log(longestTime(2, 300, 15000))
// console.log(longestTime(15, 955, 59400))



/* Task - 7
Дано трехзначное число: определить, есть ли среди его цифр
одинаковые.*/

// function same(num){
//     a=Math.floor(num%10)
//     b=Math.floor(num/10%10)
//     c=Math.floor(num/100)
//     if(a == b || a == c || b == c){
//     return true
//     }
//     return false

// }
// console.log(same(212))
// console.log(same(897))
// console.log(same(211))


/* Task - 8 
Напишите функцию, которая принимает двузначное число и
определяет, является ли оно наибольшим из двух возможных
обменов цифрами.*/

// function largestSwap(num){
//    let a = (num/10)
//    let b = (num%10)
//    let rez = (b*10+a)
//    if(num > rez){
//     return true
//    }
//    return false
// }
// console.log(largestSwap(14))
// console.log(largestSwap(53))




/* Task - 9
Создайте функцию, которая принимает число в качестве
аргумента. Сложите все числа от 1 до числа, которое вы передали
функции. Например, если на входе 4, ваша функция должна
вернуть 10, потому что 1 + 2 + 3 + 4 = 10.      */

// function addUp(num){
//     let sum = 0;
//     for(let i = 0; i <= num; i++){
//          sum += i
//     }
//     return sum;
// }
// console.log(addUp(4))
// console.log(addUp(13))
// console.log(addUp(600))



/* Task - 10
Даны три целых числа, одно из которых отлично от двух
других, равных между собой. Определить порядковый номер
числа, отличного от остальных.  */

// function different(a , b , c){
//     if(a == b ){
//         return 3
//     }
//     else if(a == c){
//         return 2
//     }
//     return 1

// }
// console.log(different(5,5,10))
// console.log(different(897,1,1))
// console.log(different(811,500,811))



/* Task - 11
Даны два отрицательных числа A и B. Найдите сумму четных
чисел от A до B. */

    // function evenNum(a,b){
    //   let sum = 0
    //   let max = Math.max(a,b)
    //   let min = Math.min(a,b)

    //   for(let i = max; i >= min; i--){
    //     if(i % 2 == 0){
    //         sum = i;
    //     }
    //   }
    //   return sum
    // }
    // console.log(evenNum(-5,-3))
    // console.log(evenNum(-1,-1))




/* Task - 12
Даны целые положительные числа N и K. Найти сумму 1K + 2K +… + NK
Чтобы избежать целочисленного переполнения, вычислять
слагаемые этой суммы с помощью вещественной переменной и
выводить результат как вещественное число. */


// function sum(n, k){

// }



/* Task - 13
Дано одно число N. Необходимо вывести наибольшу цифру
этого числа. */

// function maxNum(n){
  
// }



/* task - 14
Создайте функцию, которая принимает число в качестве
аргумента и возвращает true или false в зависимости от того,
является ли число симметричным или нет. Число является
симметричным, когда оно совпадает со своей обратной стороной */


// function isSymmetrical(num){
//     let cnt = 0;
    
//     for(let i = 0; i > num; i++){
//         cnt = cnt * 10 + (i % 10)
//         i = Math.floor(i/10)
//     }
//     return num == cnt
// }
// console.log(isSymmetrical(7227))
// console.log(isSymmetrical(9939))




/* Task - 15
Учитывая целое число, многократно складывайте все его
цифры, пока в результате не останется только одна цифра, и
верните ее. */

// function addDigits(){
    
// }