// const age = 10;
// const totalPrice = 200.74;
// const userName = 'Chelsy';
// const message = 'Hello!';
// const isOpen = true;
// const shouldConfirm = false;

// let x = 5;

// console.log('Pris', totalPrice);

// const type = typeof true;
// console.log(type);

// alert('nbnbnbnb');
// console.log('после');
// const shoudLdRenew = confirm('Do you wont?');
// console.log(shoudLdRenew);
// let quantity = prompt('How are you?');
// quantity = Number(quantity);
// console.log(quantity);
// console.log(typeof quantity);

// let elementWidth = '50px';
// // const result = Number.parseInt(elementWidth);
// // console.log(result);
// elementWidth = Number.parseInt(elementWidth);
// console.log('elementWidth: ', elementWidth);

// let elementHeight = '200.74px'
// elementHeight = Number.parseFloat(elementHeight);
// console.log('elementHeight: ', elementHeight);

// let salary = 1200.556473;
// // salary = salary.toFixed(2);
// // salary = Number(salary);
// // salary = Number(salary.toFixed(2));
// console.log(Number(salary.toFixed(2)));

// console.log(Number(true));
// console.log(Number(false));
// console.log(Number('jgghgh'));

// console.log(Math);

// const base = 3;
// const power = 5;

// const result = Math.pow(base, power);
// console.log(result);
// console.log(3 ** 5);

// let base = prompt("Давай число");
// base = Number(base);
// console.log(base);

// let power = prompt('Давай степень');
// base = Number(power);
// console.log(power);

// const result = (base ** power);
// console.log(result);

// const max = 100;
// const min = 0;
// let result = Math.round(Math.random() * (max - min) + min);
// console.log(result);

// const message = 'fhghgd hgf sjdhgf sdhfgdgf ffhfhhg';
// console.log(message.length);

// const firstName = 'Ievgeniia';
// const lastName = 'Melnyk';
// const fullName = firstName + ' ' + lastName;
// console.log(fullName);

// const firstName = 'Ievgeniia';
// const lastName = 'Melnyk';
// const room = 10;
// const type = 'VIP';
// const message = firstName + " " + lastName + " поселяется в " + type + " номер " + room;
// console.log(message);

// const quantity = 10;
// const orderMsg = `Вы заказали ${quantity} холодильников`;
// console.log(orderMsg);

// const brand = 'Samsung';
// const normolizedBrand = brand.toLowerCase();
// console.log(normolizedBrand);

// let brand = 'SamSung';
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = prompt('Ввести бренд');
// brand = brand.toLowerCase();
// console.log(brand);

// let brand = 'samSUNg'
// brand = brand[0].toUpperCase() + brand.slice(1).toLowerCase();
// console.log(brand);

// const blacklistWord1 = 'спам';
// const blacklistWord2 = 'распродажа';

// const string1 = 'Привет, я Абдул, это не спам!';
// const string2 = 'Большая РАСПРОДАЖА этой недели!';
// const string3 = 'Рекламная компания';

// console.log(string1.toLowerCase().includes(blacklistWord1));
// console.log(string1.toLowerCase().includes(blacklistWord2));

// console.log(string2.toLowerCase().includes(blacklistWord1));
// console.log(string2.toLowerCase().includes(blacklistWord2));

// console.log(string3.toLowerCase().includes(blacklistWord1));
// console.log(string3.toLowerCase().includes(blacklistWord2));

// console.log('10' > 5);

// const isEqual = 1 === '1';
// console.log(isEqual);

// console.log(Boolean(0));
// console.log(Boolean(NaN));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(''));
// console.log(Boolean(""));
// console.log(Boolean(false));

// console.log(1 && 2 && 'Yes' && 0 && 9);
// console.log(0 || 2 || 'Yes' || 10 || 9);
// console.log(!false);
// console.log(!0);
// console.log(!5);

// const x1 = 10;
// const x2 = 30;
// const number = 40;
// console.log(number > x1);
// console.log(number < x2);
// console.log(number > x1 && number < x2);
// console.log(number < x1 || number > x2);

// const isOnline = true;
// const isFriend = true;
// const isDnd = false;

// const cfnOpenChat = isOnline && isFriend && !isDnd;
// console.log(cfnOpenChat);

// const sub = 'free';
// const can = sub === 'pro' || sub === 'vip';
// console.log(can);

// if (50 > 30) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// if (20 > 30) {
//     console.log('yes');
// } else {
//     console.log('no');
// }

// const salary = 10000;

// if (salary <= 500) {
//     console.log('1');
// } else if (salary > 500 && salary <= 1500) {
//     console.log('2');
// } else if (salary > 1500 && salary <= 2500) {
//     console.log('3');
// } else { console.log('4'); }

// const balance = -1000;
// const message = balance > 0 ? 'yes' : 'no';
// console.log(message);

// const b = 10;

// if (true) {
//     const a = 5;
//     console.log(a);
//     console.log(b);
// }

// const stars = 3;
// let price;

// if (stars === 1) {
//     price = 20
// }
// else if (stars === 2) {
//     price = 30
// }
// else if (stars === 3) {
//     price = 40
// }
// else if (stars === 4) {
//     price = 50
// }
// else if (stars === 5) {
//     price = 60
// }
// else { console.log('Такого кол-ва звезд нет') };
// console.log(price);

// switch (stars) {
//     case 1:
//         price = 20;
//         break;
//     case 2:
//         price = 30;
//         break;
//     case 3:
//         price = 40;
//         break;
//     case 4:
//         price = 50;
//         break;
//     case 5:
//         price = 60;
//         console.log('Спасибо');
//         console.log('Цена номера');
//         break;
//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// if (stars === 1 || stars === 2) {
//     price = 20
// }
// else if (stars === 3 || stars === 4) {
//     price = 50
// }
// else if (stars === 5) {
//     price = 60
// }
// else { console.log('Такого кол-ва звезд нет') };
// console.log(price);

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;
//     case 3:
//     case 4:
//         price = 40;
//         break;
//     case 5:
//         price = 60;
//         console.log('Спасибо');
//         console.log('Цена номера');
//         break;
//     default:
//         console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

// console.log('R'.charCodeAt());
// console.log('9'.charCodeAt());

// const option = 4;
// let message = '';

// switch (option) {
//     case 1:
//         message = 'Да';
//         break;
//     case 2:
//         message = 'Нет';
//         break;
//      case 3:
//         message = 'Не знаю';
//         break;
//     default:
//         message = 'Перезвони';
// }

// console.log(message);

// for (let i = 0; i <= 10; i += 1) {
//     console.log(i);
// }
// console.log('Oooo')

// const minSalary = 500;
// const maxSalary = 5000;
// const employees = 5;
// let totalSalary = 0;

// for (let i = 1; i <= employees; i += 1) {
//     const salary = Math.round(
//         Math.random() * (maxSalary - minSalary) + minSalary);
//     console.log(`ЗП работника номер ${i} - ${salary}`);

//     totalSalary += salary;
// }

// console.log('totalSalary: ', totalSalary);

// const min = 6;
// const max = 19;
// let total = 0;

// for (let i = min; i <= max; i += 1) {
//     if (i % 2 === 0) {
//         console.log(i);
//         total += i;
//     }
// }
// console.log('total:', total);


// for (let i = min; i <= max; i += 1) {
//     if (i % 2 !== 0) {
//         console.log(i);
//         continue;
//     }
//     total += i;
// }
// console.log('total:', total);

// let balance = 10000;
// const payment = 2000;
// console.log(`Баланс ${balance}`)
// console.log(`Сумма заказа ${payment}`)
// if (payment <= balance) {
//     balance -= payment;
//     console.log(`Остаток ${balance}`);
// } else {
//     console.log('Не хватает денег');
// }

// let totalSpent = 10000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log('Скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log('Скидка 5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log('Скидка 10%');
//     discount = 0.1;
// } else {
//     console.log('Скидка 0%');
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(`Заказ на сумму ${payment} со скидкщй ${discount * 100}%`);

// totalSpent += payment;
// console.log(`Общая суммa потраченного в магазине ${totalSpent}`)


// function formatMessage(message, maxLength) {
//     let result;
       
//     result = message.slice(0, maxLength);
//     if (result !== message) {
//         result += '...';
//     } else {
//     }
    
//     return result;
// }
// console.log(
//     formatMessage('fgfgf', 10)
// )

// const friends = ['Bob', 'Non', 'Djo', 'Jo', 2, 3, 4, 5];

// console.table(friends);

// console.log(friends[2]);

// const lastIndex = friends.length - 1;
// console.log(lastIndex);
// friends[1] = 'ghghgh';
// console.table(friends);

// const friends = ['Bob', 'Non', 'Djo', 'Jo'];
// console.table(friends);
// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     console.log(friends[i]);
// }
// const friends = ['Bob', 'Non', 'Djo', 'Jo'];
// console.table(friends);
// const lastIndex = friends.length - 1;
// for (let i = 0; i <= lastIndex; i += 1) {
//     friends[i] += '-1';
//     friends[i] += `-${i}`;
// }
// console.log(friends);

// for (const friend of friends) {
//     console.log(friend);
// }

// const cart = [54, 28, 105, 70, 92, 17, 120, 12, 25, 90];
// let total = 0;
// for (let i = 0; i < cart.length; i += 1) {
//     total += cart[i];
// }
// console.log('Total: ', total);

// for(const value of cart) {
//     total += value;
// }
// console.log('Total: ', total);

// for (let i = 0; i < cart.length; i += 1) {
//  cart[i] = Math.round(cart[i] * 1.1);
// }
// console.log(cart);

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1) {
//     console.log(numbers[i]);

//     if (numbers[i] % 2 === 0) {
//         console.log("Четное!");
//         total += numbers[i];
//     }
// }

// for (const number of numbers) {
//      if (number % 2 === 0) {
//         console.log("Четное!");
//         total += number;
//     }
// }
// console.log('Total: ', total)

// const logins = ['fjdfgdhf', 'djfkhjzkjhbz', 'nbvbbvbvb', 'vvhhdbg'];
// const loginToFind = 'nbvbbvbvb';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Yoooo!');
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
    
// }

// for (const login of logins) {
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('Yoooo!');
//         message = `Пользователь ${loginToFind} найден.`;
//         break;
//     }
// }

// const message = logins.includes(loginToFind)
//     ? `Пользователь ${loginToFind} найден.`
//     : `Пользователь ${loginToFind} не найден.`
// console.log(message);

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     console.log(number);
//     if (smallestNumber > number) {
//         smallestNumber = number;
//     }
// }
// console.log(smallestNumber);

// Сшитие массива

// const friends = ['Vacz', 'Hkgh', 'Gvfh', 'Hhgjg'];
// let string = '';
// for (const friend of friends) {
//     string += friend + ',';
// }
// string = string.slice(0, string.length - 1);
// const string = friends.join(',');
// console.log(string);

// const string = 'JavaScript';
// const letters = string.split('');
// let inverteredString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     if (letter === letter.toLowerCase()) {
//         console.log('Это маленькая буква! - ', letter);
//         inverteredString += letter.toUpperCase();
//     } else {
//         inverteredString += letter.toLowerCase();
//     }
    
//     inverteredString +=
//         letter === letter.toLowerCase()
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

// console.log(inverteredString);

// const title = 'Top 10 benefits of React framework';
// const normalizedTitle = title.toLowerCase();
// console.log(normalizedTitle);
// const words = normalizedTitle.split(' ');
// console.log(words);
// const slug = words.join('-');

// const slug = title.toLowerCase().split(' ').join('-');
// console.log(slug);

// const array1 = [5, 48, 10, 4];
// const array2 = [76, 82, 11];
// let total = 0;
// const numbers = array1.concat(array2);

// for (const number of numbers) {
//     total += number;
// }
// console.log(total);

// const cards = [
//     'Карточка-1',
//     'Карточка-2',
//     'Карточка-3',
//     'Карточка-4',
//     'Карточка-5'
// ];
// // Удаление
// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);
// cards.splice(index, 2);
// console.table(cards);
// // Добавление
// const cardToInsert = 'Карточка-6';
// cards.splice(2, 0, cardToInsert);
// console.table(cards);
// // Замена
// cards.splice(1, 1, 555);
// console.table(cards);

// function getEvenNumbers(start, end) {
//     let array = [];
//     for (let i = start; i <= end; i += 1) {
//         if (i % 2 === 0) {
//             array.push(i);
//         }  
        
//     }
//      return array;
// }
// console.table(getEvenNumbers(10, 25));