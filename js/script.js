/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

                    // Приложение start


// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?',''),
//       d = prompt('На сколько оцените его?', '');

//       personalMovieDB.movies[a] = b;
//       personalMovieDB.movies[c] = d;

//       console.log(personalMovieDB);

                                       
                                    //  УСЛОВИЯ!!!

// if (4 == 4) {
//     console.log('yes');

// }   else {
//     console.log('no');
// }                              


// const num = 50;

// if (num < 49) {
//     console.log('NO');

// } else if ( num > 100) {
//     console.log('не сегодня');
//     } else if (num == 50) {
//         console.log('yes');
//     }


//     console.log( NaN || 2 || undefined );
 
//     console.log( NaN && 2 && undefined );
     
//     console.log( 1 && 2 && 3 );
     
//     console.log( !1 && 2 || !3 );
     
//     console.log( 25 || null && !3 );
     
//     console.log( NaN || null || !3 || undefined || 5);
     
//     console.log( NaN || null && !3 && undefined || 5);
     
//     console.log( 5 === 5 && 3 > 1 || 5);


    // const hamburger = 3;
    // const fries = 3;
    // const cola = 0;
    // const nuggets = 2;
     
    // if (hamburger === 3 && cola || fries === 3 && nuggets) {
    //    console.log('Done!');
    // }
    

//     let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger || cola || fries === 3 || nuggets) {
//    console.log('Done!');
// }

// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
 
// if (hamburger && cola || fries === 3 && nuggets) {
//    console.log('Done!');
// }






// const str = 'Hello, where are you from?';

// console.log(str.length);
// console.log(str.toUpperCase());
// console.log(str.indexOf('w'));
// console.log(str.slice(0, 3));
// console.log(str.substring(0, 3));
// console.log(str.replace('Hello','Привет'));
// console.log(str.trim());
// console.log(str.split(''));
// console.log(str.reverse());





// const arr = ['Andri', 'Arthur', 'John'];

// console.log(arr.length);
// console.log(arr.push('Alex'));
// console.log(arr);
// console.log(arr.unshift('Sergey'));
// console.log(arr);
// console.log(arr.pop());
// console.log(arr.shift());
// console.log(arr.concat(['Ben']));
// console.log(arr.toString());
// console.log(arr.join(';'));

// isPalindrome('шала');

// function isPalindrome (str) {
//     let arr = str.split(''); // разбиваем строку посимвольно на массив
//     let reversArr = arr.reverse();  // полученый массив символов разварачиваем 
//     let resString = reversArr.join(''); // полученый развернутый массив склеиваем опять в слово
//     let result = str === resString; // cравниваем передаваемое в функцию слово и наше перевернутое
//     console.log(result);
// }


// isPalindrome('ehfuehufhuqfuioq');

// function isPalindrome (str) {
//     let arr = str.split(''); // разбиваем сьроку посимвольно на массив
//     let reversArr = arr.reverse(); // полученый массив символов разворачиваем
//     let resString = reversArr.join(''); // полученый развернутый массив склеиваем
//     let result = str === resString; // сравниваем переданное в функцию слово и развернутое
//     console.log(result);
// }









// isPalindrome('А роза упала на лапу азора');

// function isPalindrome(str) {
//     let arr = str.split();
//     let reversArr = arr.reverse();
//     let resString = reversArr.join('');
//     let result = str === resString;
//     console.log(result);
// }

// for (let i = 0; i <= 3; i++) {
//     console.log(i);
//     for (let j = 0; j <=3; j++) {
//         console.log(j);
//     }
    
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
    
    
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     } 
//     result += '\n';
    
// }
// console.log(result);


// function secondTask() {
//     for (let i = 20; i > 10; i--) {
//         if (i === 13) break;
            
        
//         console.log(i);
//     }
    
// }
// secondTask();


// for (let i = 2; i <= 10; i++) {
//     if (i % 2 === 0 ) {
//         console.log(i);
//     }
// }

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };
// for (let i = 0; i < 2; i++) {
// const a = prompt('Один из последних просмотренных фильмов?',''),
//       b = prompt('На сколько оцените его?', '');

//       if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//         console.log('Done');
//       } else {
//         console.log('error');
//         i--;
//       } 
      
// }
//       console.log(personalMovieDB);

// isPalindrome('tat');

// function isPalindrome(str) {
//     let arr = str.split();
//     let reversArr = arr.reverse();
//     let strResult = reversArr.join('');
//     let result = str === strResult;
//     console.log(result);

// }







// isPalindrome('шалаш');

// function isPalindrome(str) {
// let arr = str.split();
// let reversArr = arr.reverse();
// let resString = reversArr.join('');
// let result = str === resString;
// console.log(result);
// }

// isPalindrome('iui');


// function isPalindrome (str) {
//     let a = str === str.split('').reverse().join('');
//     console.log(a);
// }


// function isPalindrome (str) {
//     let a= str === str.split('').reverse().join('');
//     console.log(a);
// }
// isPalindrome('hah');


// findShort('3, 1 , 4, 2');

// function findShort(string) {
//     let wordsArr = string.split(' ');
//     let sortWordsArr = wordsArr.sort(function (b, a) {
//         return b.length - a.length;

//     });
//     console.log(sortWordsArr[0]);


// }


// isPalindrome('шалаш');

// function isPalindrome(str) {
//     let arr = str.split('');
//     let arrRevers = arr.reverse();
//     let resString = arrRevers.join('');
//     let result = str === resString;
//     console.log(result);
// }

// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {


//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';

// }
// console.log(result);


// let result = '';
// const lenght = 7;

// for (let i = 1; i < lenght; i++) {
    
    
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     } 
//     result += '\n';
    
// }
// console.log(result);



// isPalindrome('шалаш');
// function isPalindrome(str) {
//     let arr = str.split('');
//     let reversArr = arr.reverse();
//     let resString = reversArr.join('');
//     let result = str === resString;
//     console.log(result);
// }

// function findShott(string) {
//     let wordsArr = string.split(' ');
//     let sortWordsArr = wordsArr.sort(function(a, b) {
//         return a.length - b.length;

//     });
//     console.log(sortWordsArr[0]);
// }
// findShott('gggggg jjjjjj k huhhuuu');

// function findShott(string) {
//     let wordsArr = string.split(' ');
//     let sortWordsArr = wordsArr.sort(function(a, b){
//         return a.length - b.length;

//     });
//     console.log(sortWordsArr[0]);
    
// }
// findShott('fkwfkw llll v');




// function findShott(string) {
//     let wordsArr = string.split(' ');
//     let sortWordsArr = wordsArr.sort(function (a, b){
//         return a.length - b.length;
    
       
//     });
//     console.log(sortWordsArr[0]);
// }
// findShott('hhhh jjj k hhhhhhhhhh');

function findShott (string) {
    let wordsArr = string.split(' ');
    let sortWordsArr = wordsArr.sort(function (a, b) {
        return a.length - b.length;

    });
    console.log(sortWordsArr[0]);
}
findShott('cc b mmmm');




function findShort(string) {
    let wordArr = string.split(' ');
    let sortWordArr = wordArr.sort(function(a, b){
        return a.length - b.length;
    });
    console.log(sortWordArr[0]);
}
findShort('hhh h lllll');









// function isPalindrome(str) {
//     let arr = str.split('');
//     let reversArr = arr.reverse();
//     let resString = reversArr.join('');
//     let result = str === resString;
//     console.log(result);
// }
// isPalindrome('nfnwlw');











                    ФУНКЦИЯ СОЗДАНИЯ ИННИЦИАЛОВ!!!

// function inInitial (name) {
//     let nameArr = name.split(' ');
//     let firstLetterArr = nameArr.map(function(el){
//         return el.slice(0,1).toUpperCase() + '.';

//     });
//     let inInitials = firstLetterArr.join('');
//     console.log(inInitials);
// }
// inInitial('kkkkkkkk wwwwwwwww');

// function toInitial(name) {
//     let nameArr = name.split(' ');
//     let firstLetterArr = nameArr.map(function(el){
//         return el.slice(0,1).toUpperCase() + '.';
//     }); 
//     let inInitials = firstLetterArr.join('');
//     console.log(inInitials);
// }

// toInitial('wwwwwwwww wwwwwwwww');


// function toInitials(name) {
//     let nameArr = name.split(' ');
//     let firstLetterArr = nameArr.map(function(el) {
//         return el.slice(0,1).toUpperCase() + '.';
// });
//     let initials = firstLetterArr.join('');
//     console.log(initials);
// }
// toInitials('andrii volodumurovith');
// toInitials('cndrii nolodumurovith');



// function toInitials(name) {
//     let nameArr = name.split(' ');
//     let firstLetterArr = nameArr.map(function(el) {
//         return el.slice(0,1).toUpperCase() + '.';

// });
//         let inItials = firstLetterArr.join('');
//         console.log(inItials);
// }
// toInitials('kkkkkkkk bbbbbbbbb');

// function inInitials(name) {
//     let nameArr = name.split(' ');
//     let firstLetterArr = nameArr.map(function(el){
//         return el.slice(0,1).toUpperCase() + '.';
//     });
//     let inInitial = firstLetterArr.join('');
//     console.log(inInitial);
// }
// inInitials('dddd jjjjjj');

// function inInitial (name) {
//     let nameArr = name.split(' ');
//     let firstLetterArr = nameArr.map(function(el){
//         return el.slice(0,1).toUpperCase() +'.';


//     });
//     let inInitial = firstLetterArr.join('');
//     console.log(inInitial);
// }
// inInitial('ddddddd ddddddddd');


// function toInitials(name) {
//     let nameArr = name.split(' ');
//     let firstLetterArr = nameArr.map(function(el){
//         return el.slice(0, 1).toUpperCase();
//     });
//     let initial = firstLetterArr.join('');
//     console.log(initial);
// }
// toInitials('kokkokokokko llllll');

function toInitials(name) {
    let nameArr = name.split(' ');
    let firstLetterArr = nameArr.map(function(el){
        return el.slice(0, 1).toUpperCase() + '.';
    } ); 
    let initial = firstLetterArr.join('');
    console.log(initial);
}
toInitials('kkkkkk lllllllllll');

function toInitials(name) {
    let nameArr = name.split(' ');
    let firstLetterArr = nameArr.map(function(el){
        return el.slice(0, 1).toUpperCase() + '.';

    });
    let letter = firstLetterArr.join(''); 
    console.log(letter);
}
toInitials('ddddd ddddddd');


function toInitials(name) {
    let nameArr = name.split(' ');
    let firstLetterArr = nameArr.map(function(el){
        return el.slice(0, 1).toUpperCase() + '.';

    }); 
    let letter = firstLetterArr.join('');
    console.log(letter);
}
toInitials('ddddddd nnnnnnnnnnnn');


function toInitial (name) {
    let nameArr = name.split(' ');
    let firstLetterArr = nameArr.map(function(el){
        return el.slice(0,1).toUpperCase();

    });
 let letter = firstLetterArr.join('');
 console.log(letter);
}
toInitial('kwmkfm kkkkkkk');












function toInitial(name) {
    let nameArr = name.split(' ');
    let firstLetterArr = nameArr.map(function(el){
        return el.slice(0, 1).toUpperCase();
    });
        let initial = firstLetterArr.join('.');
       console.log(initial); 
}
toInitial('fffff fffffff');







                ФУНКЦИЯ СУММИРОВАНИЯ ВСЕХ ЦИФР ЧИСЛА!!!


// function sumDigits (number) {
//     let modulNumber = Math.abs(number);
//     let str = modulNumber.toString();
//     let arr = str.split('');
//     let res = arr.reduce(function(sum, cur){
//         return Number(sum) + Number(cur);
//     }, 0 );
//     console.log(res);
// }
// sumDigits(-52);


// function sumDigits (number) {
//     let modulNumber = Math.abs(number);
//     let str = modulNumber.toString();
//     let arr = str.split('');
//     let res = arr.reduce(function(sum, cur){
//         return Number(sum) + Number(cur);
//     },0);
//     console.log(res);
// }
// sumDigits(123456789987654321);

// function sumDigits(number) {
//     let modulNumber = Math.abs(number);
//     let str = modulNumber.toString();
//     let arr = str.split('');
//     let res = arr.reduce(function(sum, cur){
//         return Number(sum) + Number(cur);
//     },0);
//     console.log(res);
// }
// sumDigits(323232323);

function sumDigits (number) {
    let modulNumber = Math.abs(number);
    let str = modulNumber.toString();
    let arr = str.split('');
    let res = arr.reduce(function(sum, cur){
        return Number(sum) + Number(cur);
    },0);
    console.log(res);
}
sumDigits(555555555);

function sumDigits (number) {
    let modulNumber = Math.abs(number);
    let str = modulNumber.toString();
    let arr = str.split('');
    let res = arr.reduce(function(sum, cur){
        return Number(sum) + Number(cur);
    },0);
    console.log(res);
}
sumDigits(43);

function sumDigits(number) {
    let modulNumber = Math.abs(number);
    let str = modulNumber.toString();
    let arr = str.split('');
    let res = arr.reduce(function(sum, cur){
        return Number(sum) + Number(cur);
    },0);
    console.log(res);
}
sumDigits(11);

function sumDigits(number) {
    let modulNumber = Math.abs(number);
    let str = modulNumber.toString();
    let arr = str.split('');
    let res = arr.reduce(function(sum, cur){
        return Number(sum) + Number(cur);
    });
   console.log(res);
}
sumDigits(33333333);


function sumDigets(number) {
    let modulNumber = Math.abs(number);
    let str = modulNumber.toString();
    let arr = str.split('');
    let res = arr.reduce(function(sum, cur){
        return Number(sum) + Number(cur);
    });
    console.log(res);
}
sumDigets(222222);












        ФУНКЦИЯ ПОИСКА МИНИМАЛЬНОГО И МАКСИМАЛЬНОГО ЗНАЧЕНИЙ В МАССИВЕ!!!

function minMax(arr) {
    let res = [];
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    res.push(minValue, maxValue);
    console.log(res);

}
minMax([99, 22, 9, 1]);
     
function minMax(arr) {
    let res = [];
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    res.push(minValue, maxValue);
    console.log(res);
}
minMax([999]);

function minMax(arr) {
    let res = [];
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    res.push(minValue, maxValue);
    console.log(res);
}
minMax([1, 2, 6, 90]);

function minMax(arr) {
    let res = [];
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    res.push(minValue, maxValue);
    console.log(res);
}
minMax([100, 200, 900]);


function minMax(arr) {
    let res = [];
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    res.push(minValue, maxValue);
    console.log(res);
}
minMax([0,2]);


function minMax (arr) {
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    let res = [];
    res.push(minValue, maxValue);
    console.log(res);
}
minMax([1,3,7]);




function minMax(arr) {
    let minValue = Math.min.apply(null, arr);
    let maxValue = Math.max.apply(null, arr);
    let res = [];
    res.push(minValue, maxValue);
    console.log(res);
}
minMax([1,2,9]);





                         ЦИКЛ ПО СЩЗДАНИЮ ЁЛОЧКИ!!! 

// let result = '';
// const lenght = 7;

// for (let i =1; i < lenght; i++) {
//     for (let j = 0; j < i; j++) {
//         result += "*";
//     }

//     result += '\n';
// }
// console.log(result);

// let result = '';
// const lenght = 10;

// for (let i = 1; i < lenght; i++) {

//     for(let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }
// console.log(result);

// let result = '';
// const lenght = 20;

// for (let i = 1; i < lenght; i++)  {

//     for(let j = 0; j < i; j++) {
//         result += '88';
//     }

//     result += '\n';
// }
// console.log(result);


let result = '';
const lenght = 7;

for (let i = 1; i < lenght; i++) {
    for (let j = 0; j < i; j++) {
        result += '*';
    }
    result += '\n';

}
console.log(result);



                         фУНКЦИЯ ПАЛИНДРОМ!!!

// function isPalindrome(str) {
//     let arr = str.split('');
//     let reversArr = arr.reverse();
//     let resString = reversArr.join('');
//     let result = str === resString;
//     console.log(result);
// }
// isPalindrome('idi');



// function isPalindrome(str) {
//     let arr = str.split('');
//     let reversArr = arr.reverse();
//     let resString = reversArr.join('');
//     let result = str === resString;
//     console.log(result);
// }   
// isPalindrome('hah');


// function ispalindrome(str) {
//     let arr = str.split('');
//     let reversArr = arr.reverse();
//     let resString = reversArr.join('')
//     let result = str === resString;
//     console.log(result);
// }
// ispalindrome('шалаш');



// function isPalindrome(str) {
//     let arr = str.split('');
//     let reversArr = arr.reverse();
//     let resString = reversArr.join('');
//     let result = str === resString;
//     console.log(result);
// }
// isPalindrome('hhhhh');


// function isPalindrome(str) {
//     let arr = str.split('');
//     let reverseArr = arr.reverse();
//     let resStrit = reverseArr.join('');
//     let result = str === resStrit;
//     console.log(result);
// }
// isPalindrome('dfd');

function isPalindrome(str) {
    let arr = str.split('');
    let reverseArr = arr.reverse();
    let resString = reverseArr.join('');
    let result = str === resString;
    console.log(result);
}
isPalindrome('gtg');


function isPalindrome(str) {
    let arr = str.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');
    let result = str === resString;
    console.log(result);
}
isPalindrome('jflkwjlkfw');



function isPalindrome (str) {
    let arr = str.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');
    let result = str === resString;
    console.log(result);
}
isPalindrome('uuuuuuu');





function isPalindrome(str) {
    let arr = str.split('');
    let reversArr = arr.reverse();
    let resString = reversArr.join('');
    let result = str === resString;
    console.log(result);
}
isPalindrome('lal');



















                    ФУНКЦИЯ ПАЛИНДРОМ ПРОДВИНУТЫЙ ВАРИАНТ!!!

// function isPalindrome(str) {
//     let arr = str === str.split('').reverse().join('');
//     console.log(arr);
// }
// isPalindrome('hah');



// function isPalindrome (str) {
//     let arr = str === str.split('').reverse().join('');
//     console.log(arr);

// }
// isPalindrome('dsd');


// function isPalindrome (str) {
//     let arr =  str === str.split('').reverse().join('');
//     console.log(arr);
// }
// isPalindrome('www');


// function isPalindrome (str) {
//     let arr = str === str.split('').reverse().join('');
//     console.log(arr);
// }

//  isPalindrome('ghgwjfwoJO');

function isPalindrome (str) {
    let arr = str === str.split('').reverse().join('');
    console.log(arr);

}
isPalindrome('hfh');



function isPalindrome(str) {
    let arr = str === str.split('').reverse().join('');
    console.log(arr);

}
isPalindrome('kiikiik');

function isPalindrome (str) {
    let arr = str === str.split('').reverse().join('');
    console.log(arr);
}
isPalindrome('шалаш');



function isPalindrome(str) {
    let arr = str === str.split('').reverse().join('');
    console.log(arr);
}
isPalindrome('vvv');





            ФУНКЦИЯ ПО ПОИСКУ САМОГО МАЛЕНЬКОГО СЛОВА В СТРОКЕ!!!

// function findShott (string) {
//   let wordsArr = string.split(' ');
//   let sortedWordsArr = wordsArr.sort(function(a, b){
//      return  a.length - b.length;

//       });  
//       console.log(sortedWordsArr[0]);

// }
// findShott('gggg llllllll mmm');


// function findShott (string) {
//     let wordsArr = string.split(' ');
//     let firstWordsArr = wordsArr.sort(function(a, b){
//         return a.length - b.length;
//     });
//     console.log(firstWordsArr[0]);
// }
// findShott('wwwww jjjjjjjj o');



// function findShort (string) {
//     let wordsArr = string.split(' ');
//     let firstWordsArr = wordsArr.sort(function(a, b){
//         return a.length - b.length;
//     });
//     console.log(firstWordsArr[0]);
// }
// findShort('llllll ffff w');

function findShort (string) {
    let wordsArr = string.split(' ');
    let firstWordsArr = wordsArr.sort(function(a, b){
        return a.length - b.length;
    });
    console.log(firstWordsArr[0]);
}
findShort('kkkkkkkk llll dd');

function findShort (string) {
    let wordArr = string.split(' ');
    let firstWordArr = wordArr.sort(function(a, b){
        return a.length - b.length;
    });
    console.log(firstWordArr[0]);
}
findShort('uuuuuuu ggggggg llp r');

function findShort(string) {
    let wordArr = string.split(' ');
    let firstWordArr = wordArr.sort(function(a, b){
        return a.length - b.length;

    });
    console.log(firstWordArr[0]);
}
findShort('ddddddd ddd ffffffff');










                ФУНКЦИЯ СОЗДАНИЯ НАБОРА ДУБЛИКАТОВ!!!

// function accum (string) {
//     let arr = string.toUpperCase().split('');
//     let repeatArr = arr.map (function(el,i){
//         return el += el.repeat(i).toLowerCase();

//     });
//     let resString = repeatArr.join('-');
//     console.log(resString);
// }
// accum('abcd');

// function accum(string) {
//     let arr = string.toUpperCase().split('');
//     let repeatArr = arr.map(function(el, i){
//         return el += el.repeat(i).toLowerCase();
//     });
//     let resString = repeatArr.join('-');
//     console.log(resString);

// }
// accum('abcdefgklmnop');


// function acuum (string) {
//     let arr = string.toUpperCase().split('');
//     let repeatArr = arr.map(function(el, i){
//         return el += el.repeat(i).toLowerCase();

//     });
//     let resString = repeatArr.join('-');
//     console.log(resString);
// }
// acuum('llllllllll');


function accum (string) {
    let arr = string.toUpperCase().split('');
    let repeatArr = arr.map(function(el, i){
        return el += el.repeat(i).toLowerCase();
    });
    let resString = repeatArr.join('-');
    console.log(resString);
}
accum('fmkfmvfkmvfkmvf');

function accum (string) {
    let arr = string.toUpperCase().split('');
    let repeatArr = arr.map(function(el, i){
        return el += el.repeat(i).toLowerCase();
    });
    let resString = repeatArr.join('-');
    console.log(resString);
}
accum('okookokokoo');

function accum (string) {
    let arr = string.toUpperCase().split('');
    let repeatArr = arr.map(function(el, i){
        return el += el.repeat(i).toLowerCase();
    });
    let resStringr = repeatArr.join('-');
    console.log(resStringr);
}
accum('jjjj');

function accum (string) {
    let arr = string.toUpperCase().split('');
    let repeatArr = arr.map(function(el, i){
        return el += el.repeat(i).toLowerCase();
    });
    let resString = repeatArr.join('-');
    console.log(resString);

}
accum('iiiiiii');

function accum (string) {
    let arr = string.toUpperCase().split('');
    let repeatArr = arr.map(function(el,i){
        return el += el.repeat(i).toLowerCase();
    });
    let resString = repeatArr.join('-');
    console.log(resString);
}
accum('hhhhhhh')








// let arr = [3, 4, 5];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i]*2;
// }
// console.log(arr);

let arr = [2, 4, 6];

let newArr = arr.map(function(el, i, arr){
    console.log(el*2, i, arr);
});
                ФУНКЦИЯ ВОЗВРАТА ИНДЕКСОВ ЗАГЛАВНЫХ БУКВ!!!
                
function capitals (word) {
    let bigLetters = word.toUpperCase().split('');
    let smollLeters = word.split('');
    let res = [];

    for (let i = 0; i < word.length; i++) {
        if (smollLeters[i] === bigLetters[i] ) {
            res.push(i);
        }
        
    }
    console.log(res);
}                
capitals('jkjkJkkH');

function capitals (word) {
    let bigLetter = word.toUpperCase().split('');
    let smallLetter = word.split('');
    let resArr = [];

    for (let i = 0; i < word.length; i++) {
        if(smallLetter[i] === bigLetter[i]) {resArr.push(i);}

    }
    console.log(resArr);
}
capitals('HHHHHHkHH');


function capitals (word) {
    let bigLetter = word.toUpperCase().split('');
    let smallLeter = word.split('');
    let res = [];

    for (let i = 0; i < word.length; i++) {
        if(smallLeter[i] === bigLetter[i]) {res.push(i)}
    }
    console.log(res);
}
capitals('WiWiW');


function capital (word) {
    let smallLetter = word.toUpperCase().split('');
    let bigLetter = word.split('');
    let res = [];

    for (let i = 0; i < word.length; i++) {
        if (smallLetter[i] === bigLetter[i]) {res.push(i)}
    }
    console.log(res);
}
capital('KKKKKKKKKKKKKK');

function capital (word) {
    let smollLetter = word.toUpperCase().split('');
    let bigLetter = word.split('');
    let res = [];

    for (let i = 0; i < word.length; i++) {
        if (smollLetter[i] === bigLetter[i]) {res.push(i)}
    }
    console.log(res);

}
capital('dGJggG');

function capital (word) {
    let smallLetter = word.toUpperCase().split('');
    let bigLetter = word.split('');
    let res = [];

    for (let i = 0; i <word.length; i++) {
        if (smallLetter[i] === bigLetter[i]) {res.push(i)}

    }
    console.log(res);
}
capital('ekpjfepjpfjeop2jjH');


