'use strict'
// console.log('Урок 5-6 Объекты Деструктуризация spread/rest')

// console.log('Hello!');

// const fnA = function (message, callback) {
//     console.log(message);
//     callback(100);
// };

// const fnB = function (number) {
//     console.log('Привет это я колбек функция fnB)))', number);
// };
// const fnC = function (number) {
//     console.log('Привет это я колбек функция fnC)))', number);
// };

// fnA('Это аргумент', fnB);
// fnA('Это аргумент', fnC);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };
// const add = function (x, y) {
//     return x + y;
// };
// const sub = function (x, y) {
//     return x - y;
// };
// doMath(2, 3, add);
// doMath(6, 3, sub);

// const doMath = function (a, b, callback) {
//     const result = callback(a, b);
//     console.log(result);
// };

// doMath(2, 3, function (x, y) {
//     return x + y
// });
// doMath(6, 3, function (x, y) {
//     return x - y
// });

// Регестрация события (клик по кнопке)
// const buttonRef = document.querySelector('.js-button');
// console.dir(buttonRef);
// const handleBtnClick = function () {
//     console.log('Клик!!!' + Date.now());
// };
// buttonRef.addEventListener('click', handleBtnClick);

// Геопозиция
// const onGetPositionSuccess = function (position) {
//     console.log(position);
// };
// const onGetPositionError = function (error) {
//     console.log(error);
// };
// window.navigator.geolocation.getCurrentPosition(
//     onGetPositionSuccess, onGetPositionError
// );

// Отложенный вызов
// const callback = function () {
//     console.log('Через 3 секунды внутри колбека в таймауте');
// };
// console.log('Перед таймаутом');
// setTimeout(callback, 3000);
// console.log('После таймаута');

// Отложенный вызов http запроса (у меня не работает)
// const onRequestSuccess = function (reponse) {
//     console.log('Вызов функции после успешного ответа бекенда');
//     console.log(reponse);
// };
// fetch('http://pokeapi.co/api/v2/pokemon')
//     .then(res => res.json())
//     .then(onRequestSuccess);

// Хороший пример калбека!!!!
// const filtr = function (array, test) {
//     const filtredArray = [];
//     for (const el of array) {
        // console.log(el);
        // console.log(test(el));
//         const passed = test(el);

//         if (passed) {
//             filtredArray.push(el);
//         };
//     };

//     return filtredArray;
// };

// const callback = function (value) {
//     return value >= 3;
// };

// console.log(filtr([1, 2, 3, 4, 5, 6, 7], callback));
// console.log(filtr([1, 2, 3, 4, 5, 6, 7],
//     function (value) { return value <= 4 }));

// const fruits = [
//     {name: 'apples', quantity: 200, isFresh: true},
//     {name: 'grapes', quantity: 150, isFresh: false},
//     { name: 'bananas', quantity: 100, isFresh: true },
//     {name: 'lemons', quantity: 60, isFresh: true},
// ];

// console.log(filtr(fruits,
//     function (fruit) { return fruit.quantity <= 120 }));

// Замыкание
// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('это вызов innerVariable');
//     };
//     return innerFunction;
// };
// const fnB = fnA(555);
// fnB();
// console.log(fnB);

// const makeSheff = function (name) {
//     const makeDish = function (dish) {
//         console.log(`${name} готовит ${dish}`);
//     };
//     return makeDish;
// };
// const mango = makeSheff('Mango');
// mango('амлет');
// mango('котлеты');
// mango('пюре');
// const poly = makeSheff('Poly');
// poly('борщ');
// poly('плов');

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const tofixed2 = rounder(2);
// const tofixed1 = rounder(1);
// const toFixed0 = rounder(0);
// console.log(toFixed0(4.08976));
// console.log(tofixed1(4.08976));
// console.log(tofixed2(4.08976));
  
// const myLibFactory = function () {
//     let value = 0;
//     const add = function (num) {
//     value += num;
//     };
    
//     return {
//       add: add,
//       getValue() {
//         return value;
//         },
//     };
// };
// const myLib = myLibFactory();
// console.dir(myLib.getValue);
// console.log(myLib);
// console.log(myLib.getValue());
// myLib.add(10);
// console.log(myLib.getValue());

// const salaryManagerFactory = function (employeeName, baseSalary) {
//     let salary = baseSalary;
    
//     return {
//         raise(amount) {
//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const Johnny = salaryManagerFactory('Johnny', 20000);
// console.log(Johnny.current());
// Johnny.raise(5000);
// console.log(Johnny.current());
// Johnny.lower(1000);
// console.log(Johnny.current());

// Стрелочные функции
// const add = function (a, b, c) {
//     console.log(a, b, c);
//     return a + b + c;
// };

// const add = (a, b, c) => {
//     console.log(a, b, c);
//     return a + b + c;
// };
// console.log(add(5, 10, 20));

// const addA = a => {
//     console.log(a);
//     return a * 2;
// };

// const addB = ( ) => {
//     console.log();
// };
// console.log(addA(5));

// const addC = (a, b, c) => a + b + c;
// console.log(addC(5, 10, 20));

// const addD = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };
// console.log(addD(3, 6, 10));

// const add = (...args) => {
//     console.log(args);
// };
// console.log(add(5, 10, 20));
// console.log(add(8, 4, 10));

// Вернуть объект из стрелочной функции завернуть в выражение ()
// const fn = () => ({
//     item: 1,
//     name: 'Johnny',
// });
// console.log(fn());

// const filtr = (array, test) => {
//     const filtredArray = [];
//     for (const el of array) {
//         // console.log(el);
//         // console.log(test(el));
//         const passed = test(el);

//         if (passed) {
//             filtredArray.push(el);
//         };
//     };

//     return filtredArray;
// };

// const callback = value => value >= 3;

// console.log(filtr([1, 2, 3, 4, 5, 6, 7], callback));
// console.log(filtr([1, 2, 3, 4, 5, 6, 7],
//     value => value <= 4));

// Переберающие методы массива
// const numbers = [10, 4, 3, 34, 54, 2];

// numbers.forEach(function (number, index, array) {
//     console.log('number', number);
//     console.log(this);

// }, { a: 1, b: 2 });
// console.log(numbers);
// const dubleNum = numbers.map(number => console.log(number * 2));

// const players = [
//     { id: 'player1', name: 'Mango', timeplayed: 310, points: 54, online: false },
//     { id: 'player2', name: 'Poli', timeplayed: 470, points: 92, online: true },
//     { id: 'player3', name: 'Tomy', timeplayed: 230, points: 48, online: true },
//     { id: 'player4', name: 'Alex', timeplayed: 150, points: 71, online: false },
//     { id: 'player5', name: 'Jo', timeplayed: 180, points: 48, online: true },
// ];

// map--------
// const playersName = players.map(player => console.log(player.name));
// const playersArr = players.map(({name, id}) => console.log({ name, id }));
// const playerUpp = players.map(player =>
//     console.log({
//         ...player,
//         points: player.points * 2,
//     }));
// const playersUppPlayer = players.map(player => {
//     player.id === 'player3' ?
//         { ...player, timeplayed: player.timeplayed += 100, } : player;
    
//     console.log(player)
// });

// const numbers = [10, 4, 3, 34, 54, 2, 22, 15];

// filtr----------
// const filterNumbers = numbers.filter(number => number < 40 && number > 10);
// console.log(filterNumbers);

// const playersOnline = players.filter(player => player.online);
// console.log(playersOnline);
// const playersOffline = players.filter(player => !player.online);
// console.log(playersOffline);
// const hardcorePlayers = players.filter(player => player.timeplayed > 250);
// console.log(hardcorePlayers);

// find---------
// const number = numbers.find(number => number > 15);
// console.log(number);
// const idPlayer = 'player3';
// const playerTofind = players.find(player => player.id === idPlayer);
// console.log(playerTofind);
// const playerTofindName = players.find(({name}) => name === 'Poli');
// console.log(playerTofindName);
// const findPlayerById = (allPlayers, playerId) =>
//     allPlayers.find(({ id }) => id === playerId);
// ;
// console.log(findPlayerById(players, 'player3'));
// console.log(findPlayerById(players, 'player1'));

// every && some---------
// const isAllOnline = players.every(player => player.timeplayed > 100);
// console.log(isAllOnline);
// const isSomeOnline = players.some(player => player.online);
// console.log(isSomeOnline);

// reduce----------
// const total = numbers.reduce((acc, number, index) => {
//     console.log('acc', acc);
//     console.log('number', number, index);
//     return acc += number;
// }, 0);
// console.log(total);
// const salary = {
//     jora: 10500,
//     misha: 11200,
//     natasha: 10800,
// };
// const totalSalary = Object.values(salary).reduce((acc, salary) => acc + salary);
// console.log(totalSalary);

// const totalTime = players.reduce((acc, player) => acc + player.timeplayed, 0);
// console.log(totalTime);

// const fruits = [
//     {name: 'apples', quantity: 200, price: 120},
//     {name: 'grapes', quantity: 150, price: 90},
//     { name: 'bananas', quantity: 100, price: 140},
//     {name: 'lemons', quantity: 60, price: 80},
// ];

// const totalSumOfFruits = fruits.reduce(
//     (acc, { quantity, price }) => acc + quantity * price, 0
// );
// console.log(totalSumOfFruits);

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((acc, { tags }) =>
// { acc.push(...tags); return acc },
//     [...acc, ...tags],
//     []);
// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(acc);
//     if (acc[tag]) {
//         acc[tag] += 1;
//         return acc;
//     }
//     acc[tag] = 1;
//     return acc;

// }, {})
// console.log(tagsStats);
// или
// const tagsStats = allTags.reduce((acc, tag) => (
//     {
//         ...acc,
//         [tag]: acc[tag] ? acc[tag] + 1 : 1,
//     }
// ), {});
    // console.log(acc);

    // return acc[tag] ? {...acc, [tag]: acc[tag] + 1} : {...acc, [tag]: 1}
    // или
    
// console.log(tagsStats);

// const tagsStats = allTags.reduce((acc, tag) => (
//     {
//         ...acc,
//         [tag] : -значение свойства acc[tag] - аккумулятор имеет
//         такое свойство со значением тег ?
//         acc[tag] - да имеет прибавь + 1 :
//         1, - нет не имеет тогда оно равно 1
//     }
// ), {});
//
// sort
// const numbers = [10, 4, 3, 34, 54, 2, 22, 15];
// const copyNumgers = [...numbers];
// copyNumgers.sort();
// console.log(copyNumgers);
// const letters = ['a', 'h', 'A', 'e', 'l', 'B'];
// letters.sort();
// console.log(letters);
// copyNumgers.sort((a, b) => a - b);
// console.log(copyNumgers);
// copyNumgers.sort((a, b) => b - a);
// console.log(copyNumgers);

// const copyNumgers = [...numbers].sort((a, b) => a - b);
// console.log(copyNumgers);

// const players = [
//     { id: 'player1', name: 'Mango', timeplayed: 310, points: 54, online: false },
//     { id: 'player2', name: 'Poli', timeplayed: 470, points: 92, online: true },
//     { id: 'player3', name: 'Tomy', timeplayed: 230, points: 48, online: true },
//     { id: 'player4', name: 'Alex', timeplayed: 150, points: 71, online: false },
//     { id: 'player5', name: 'Jo', timeplayed: 180, points: 48, online: true },
// ];
// const bestPlayers = [...players].sort((a, b) => a.timeplayed - b.timeplayed);
// console.table(bestPlayers);

// const namePlayers = [...players].sort((a, b) => {
//     const result = a.name[0] > b.name[0];
//     if (result) {
//         return 1;
//     }
//     if (!result) {
//         return -1;
//     }
// });
// console.table(namePlayers);

// const names = ['Ali', 'Viknor', 'Johnny', 'Piter', 'Maya', 'Bobby'].sort(
//     (a, b) => {
       
//         if (a[0] > b[0]) { return 1; }
//         return -1;
//     }
// )
// console.log(names)
// console.log('acvcv'.charCodeAt(0));

// flat разглаживает массив
// const array = [1, 2, [4, [5]], [6, [7, 8, [9]]]];
// console.log(array.flat(3));

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 2, tags: ['html', 'css'] },
//     { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 8, tags: ['css', 'react'] },
//     { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
// ];

// const tags = tweets.map(t => t.tags).flat();
// const tags = tweets.flatMap(t => t.tags);
// console.log(tags)
// const stats = tags.reduce((acc, tag) => {
//     console.log(acc)
//     console.log(tag)
//     return {
//         ...acc,
//         [tag] : acc[tag] ? acc[tag] + 1 : 1,
//     }
// }, {});
// console.log(stats);

// const players = [
//     { id: 'player1', name: 'Mango', online: false, rank: 800 },
//     { id: 'player2', name: 'Poli', online: true, rank: 600 },
//     { id: 'player3', name: 'Tomy', online: true, rank: 400 },
//     { id: 'player4', name: 'Alex', online: false, rank: 900 },
//     { id: 'player5', name: 'Jo', online: true, rank: 1100 },
// ];

// const onlinAndSort = players.filter(({ online }) => !online)
//     .sort((a, b) => a.rank - b.rank);
// console.log(onlinAndSort)

// const element = {
//     class: '',
//     hovered: false,
//     changeClass(cls) {
//         this.class = cls;
//         return this;
//     },
//     toggleHovered() {
//         this.hovered = !this.hovered;
//         return this;
//     },
// };
// element.toggleHovered().changeClass('open').toggleHovered();
// console.log(element);

// function deliverPizza(pizzaName) {
//   return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//   return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// // Chande code below this line
// function makeMessage(pizzaName, callback) {
  
//   return callback(pizzaName);
// }

// console.log(makeMessage("Royal Grand", makePizza))

// const pizzaPalace = {
//   pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//   order(pizzaName, callback1, callback2) {
//       return this.pizzas.includes(pizzaName)
//           ? callback1(pizzaName)
//           : callback2(pizzaName);
//   },
// };

// function makePizza(pizzaName) {
//   return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//   return `Error! ${error}`;
// }

// console.log(pizzaPalace.order('Smoked', makePizza, onOrderError));
// console.log(pizzaPalace.order('Four meats', makePizza, onOrderError));

// console.log(pizzaPalace.order('Big Mike', makePizza, onOrderError));
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function changeEven(numbers, value) {
  
//     const newNumbers = [];
//     numbers.forEach(number => {
//         if (number % 2 === 0) {
//             newNumbers.push(number + value)
//         } else { newNumbers.push(number) }
//     });
//     return newNumbers;
// };
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log()
// console.log()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];
// // Change code below this line
// const planetsLengths = planets.map(planet => planet.length);
// console.log(planetsLengths)


// const users = [
//     {
//         name: "Moore Hensley",
//         email: "moorehensley@indexia.com",
//         eyeColor: "blue",
//         friends: ["Sharron Pace"],
//         isActive: false,
//         balance: 2811,
//         gender: "male",
//         age: 37
//     },
//     {
//         name: "Sharlene Bush",
//         email: "sharlenebush@tubesys.com",
//         eyeColor: "blue",
//         friends: ["Briana Decker", "Sharron Pace"],
//         isActive: true,
//         balance: 3821,
//         gender: "female",
//         age: 34
//     },
//     {
//         name: "Ross Vazquez",
//         email: "rossvazquez@xinware.com",
//         eyeColor: "green",
//         friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//         isActive: false,
//         balance: 3793,
//         gender: "male",
//         age: 24
//     },
//     {
//         name: "Elma Head",
//         email: "elmahead@omatom.com",
//         eyeColor: "green",
//         friends: ["Goldie Gentry", "Aisha Tran"],
//         isActive: true,
//         balance: 2278,
//         gender: "female",
//         age: 21
//     },
//     {
//         name: "Carey Barr",
//         email: "careybarr@nurali.com",
//         eyeColor: "blue",
//         friends: ["Jordan Sampson", "Eddie Strong"],
//         isActive: true,
//         balance: 3951,
//         gender: "male",
//         age: 27
//     },
//     {
//         name: "Blackburn Dotson",
//         email: "blackburndotson@furnigeer.com",
//         eyeColor: "brown",
//         friends: ["Jacklyn Lucas", "Linda Chapman"],
//         isActive: false,
//         balance: 1498,
//         gender: "male",
//         age: 38
//     },
//     {
//         name: "Sheree Anthony",
//         email: "shereeanthony@kog.com",
//         eyeColor: "brown",
//         friends: ["Goldie Gentry", "Briana Decker"],
//         isActive: true,
//         balance: 2764,
//         gender: "female",
//         age: 39
//     }
// ];

// const getFriends = users.flatMap(user => user.friends).filter((friend, index, array) => array.indexOf(friend) === index);

// console.log(getFriends)
// const getActiveUsers = (users) => users.filter(user => user.isActive)

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players);
// console.log(playtimes);

// const totalPlayTime = playtimes.reduce((acc, playtime) => acc +=playtime, 0);
// console.log(totalPlayTime);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// const players = [
//   { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//   { name: "Poly", playtime: 469, gamesPlayed: 2 },
//   { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//   { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((acc, pleyer) => acc += pleyer.playtime / pleyer.gamesPlayed, 0);
// console.log(totalAveragePlaytimePerGame)

// const getTotalFriendCount = users.reduce((acc, user) => acc += user.friends.length, 0)
// console.log(getTotalFriendCount)

// const authors = [
//   "Tanith Lee",
//   "Bernard Cornwell",
//   "Robert Sheckley",
//   "Fyodor Dostoevsky",
//   "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a,b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// Change code below this line

// const sortedByAuthorName = [...books].sort((a,b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// const MIN_BOOK_RATING = 8;
// Change code below this line

// const names = books.filter(book => book.rating > MIN_BOOK_RATING)
// console.log(names)
    
// names.sort((a, b) => a.author.localeCompare(b.author))
// console.log(names)
