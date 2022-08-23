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


isPalindrome('ehfuehufhuqfuioq');

function isPalindrome (str) {
    let arr = str.split(''); // разбиваем сьроку посимвольно на массив
    let reversArr = arr.reverse(); // полученый массив символов разворачиваем
    let resString = reversArr.join(''); // полученый развернутый массив склеиваем
    let result = str === resString; // сравниваем переданное в функцию слово и развернутое
    console.log(result);
}









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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};
for (let i = 0; i < 2; i++) {
const a = prompt('Один из последних просмотренных фильмов?',''),
      b = prompt('На сколько оцените его?', '');

      if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalMovieDB.movies[a] = b;
        console.log('Done');
      } else {
        console.log('error');
        i--;
      } 
      
}
      console.log(personalMovieDB);