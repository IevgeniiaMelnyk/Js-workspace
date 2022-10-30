'use strict'
// console.log('Урок 7-8 This Прототипы и классы')

// const showThis1 = function (a, b, c) {
//   console.log('showThis -> this', this);
//   console.log(a, b, c);
// };
// console.dir(showThis1);

// const showThis2 = function (...args) {
//   console.log('showThis -> this', this);
//   console.log(args);
// };
// console.dir(showThis2);

// const abc = {
//   a: 1,
//   b: 2,
//   c: 3,
// };

// const dek = {
//   d: 4,
//   e: 5,
//   k: 6,
// };

// showThis1.call(abc, 10, 20, [30, 40]);
// showThis2.call(dek, 40, 50, 60);

// showThis1.apply(abc, [10, 20, 30]);
// showThis2.apply(dek, [40, 50, 60]);

// const changeColor = function (color) {
//   this.color = color;
// };

// const hat = {
//   color: 'black',
//   size: 20,
// };
// changeColor.call(hat, 'orange');
// console.log(hat);

// const sweater = {
//   color: 'green',
//   size: 40,
// };
// changeColor.call(sweater, 'red');
// console.log(sweater);

// // Метод dind() делает копию функции с привязанным контекстом на всегда!!!
// const changeColorHat = changeColor.bind(hat);
// changeColorHat('blue');
// console.log(hat);
// const changeColorSweater = changeColor.bind(sweater);
// changeColorSweater('yellow');
// console.log(sweater);

// const counter = {
//   value: 0,
//   increment(value) {
//     console.log('increment -> this', this);
//     this.value += value;
//   },
//   descrement(value) {
//     console.log('descrement -> this', this);
//     this.value -= value;
//   },
// };

// const updateCounter = function (value, operation) {
//   operation(value);
// };
// // Правильная запись с привязкой
// updateCounter(10, counter.increment.bind(counter));
// console.log(counter);
// // Запись с ошибкой при передаче колбека контекст теряется
// updateCounter(5, counter.descrement);


// Кнопки кнопки счетчик ////////////////////////////////////////
// const counter = {
//   value: 0,
//   increment() {
//     console.log('increment -> this', this);
//     this.value += 1;
//   },
//   descrement() {
//     console.log('descrement -> this', this);
//     this.value -= 1;
//   },
// };

// const decrementBtn = document.querySelector('.js-decrement');
// console.log(decrementBtn);
// const incrementBtn = document.querySelector('.js-increment');
// console.log(incrementBtn);
// const valueEl = document.querySelector('.js-value');
// console.log(valueEl);

// // decrementBtn.addEventListener('click', function () { decrementBtn.textContent = 'Привет Базан!!!' });
// decrementBtn.addEventListener('click', function () {
//   counter.descrement();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });
// incrementBtn.addEventListener('click', function () {
//   counter.increment();
//   console.log(counter);
//   valueEl.textContent = counter.value;
// });

// Прототипы
// const objProto = {
//   theFirst: 1,
// };
// const objSon = Object.create(objProto);
// objSon.theSecond = 2;
// console.log(objProto);
// console.log(objSon);
// console.log(objSon.theFirst);
// console.log(objSon.hasOwnProperty('theFirst'))
// console.log(objSon.hasOwnProperty('theSecond'))

// const object = Object.create({ message: 'Это меседж прототипа!' });
// object.message = 'Это мой меседж)';
// console.log(object);
// console.log(object.hasOwnProperty)

// Класс экземпляр интерфейс //////////////////////////////////////////////////

// const Car = function ({ brand, model, price, } = {}) {
//   // console.log('this', this);
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.discount = function (size) {
//   this.price = this.price - this.price / 100 * size;
// }

// const myCar1 = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar1);
// myCar1.discount(10);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 45000,
// });
// console.log(myCar2);

// const myCar3 = new Car({
  
// });
// console.log(myCar3);


// Gример использования классов (плагины, галереи) /////////////////////////////

// const CounterPlugin = function ({ rootSelector, initialValue = 0, step = 1 } = {}) {
//   this._value = initialValue;
//   this._step = step;

//   this._refs = this._getRefs(rootSelector);
//   this._bindEvents();
//   this.updateValueUI();
// };

// CounterPlugin.prototype._getRefs = function (rootSelector) {
//   const refs = {};
//   refs.container = document.querySelector(rootSelector);
//   refs.incrementBtn = refs.container.querySelector('[data-increment]');
//   refs.decrementBtn = refs.container.querySelector('[data-decrement]');
//   refs.value = refs.container.querySelector('[data-value]');

//   return refs;
// };

// CounterPlugin.prototype._bindEvents = function () {
//   this._refs.incrementBtn.addEventListener('click', () => {
    
//     this.increment();
//     this.updateValueUI();
//   });
//   this._refs.decrementBtn.addEventListener('click', () => {
//     this.decrement();
//     this.updateValueUI();
//   });
// };

// CounterPlugin.prototype.updateValueUI = function () {
//   this._refs.value.textContent = this._value;
// }

// CounterPlugin.prototype.increment = function () {
//   this._value += this._step;
// };

// CounterPlugin.prototype.decrement = function () {
//   this._value -= this._step;
// };

// const counter1 = new CounterPlugin({ rootSelector: '#counter-1', step: 10, initialValue: 100 });
// console.log('counter1 ', counter1);

// const counter2 = new CounterPlugin({ rootSelector: '#counter-2', step: 20, initialValue: 200 });
// console.log('counter2 ', counter2);

// ////////////////////////////////////////////////////////////

// const Car = function ({ brand, model, price, } = {}) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// };

// Car.prototype.discount = function (size) {
//   this.price = this.price - this.price / 100 * size;
// }

// const myCar1 = new Car({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });
// console.log(myCar1);
// myCar1.discount(10);

// const myCar2 = new Car({
//   brand: 'BMW',
//   model: 'X6',
//   price: 45000,
// });
// console.log(myCar2);

// class Car1 {
//   static property = 'Это статическое свойство... который не нужено на экземпляре';

//   static method(carObj) {
//     console.log('А это статический метод', carObj);
//   }
  // приватное свойство
//   #name

//   constructor({ brand, model, price } = {}) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }

//   set modelCar(newModel) {
//     this.model = newModel;
//   }

//   get modelCar() {
//     return this.model;
//   }
// };
// console.log(Car1);

// const carInstance = new Car1({
//   brand: 'Audi',
//   model: 'Q3',
//   price: 35000,
// });

// console.log(carInstance);
// // console.log(Object.getPrototypeOf(carInstance))
// carInstance.changePrice(30000);
// Car1.method(carInstance);

// console.log(carInstance.modelCar);
// carInstance.modelCar = 'Q4';
// console.log(carInstance.modelCar);

// class Hero {
//   constructor({ name = 'hero', xp = 0 } = {}) {
//     this.name = name;
//     this.xp = xp;
//   }

//   gainXp(amount) {
//     console.log(`${this.name} получает ${amount} опыта`);
//     this.xp += amount;
//   }
// }

// class Warrior extends Hero {
//   constructor({ weapon, ...restProps } = {}) {
//     super(restProps);
//     this.weapon = weapon;
//   }

//   attack() {
//     console.log(`${this.name} атакует ${this.weapon}`)
//   }
// }

// class Berserk extends Warrior {
//   constructor({ warcry, ...restProps } = {}) {
//     super(restProps);
//     this.warcry = warcry;
//   }

//   babyRage() {
//     console.log(this.warcry);
//   }
// }

// const ajax = new Berserk({
//   name: 'Ajax',
//   xp: 500,
//   weapon: 'axe',
//   warcry: 'waaaaaaaaah'
// })

// class Mage extends Hero {
//   constructor({ spells, ...restProps } = {}) {
//     super(restProps);

//     this.spells = spells;
//   }

//   cast() {
//     console.log(`${this.name} создает ${this.spells}`);
//   }
// }

// const mango = new Warrior({ name: 'Mango', xp: 1000, weapon: 'alebarda' });
// console.log(mango);
// mango.attack();
// mango.gainXp(1000);

// const poli = new Mage({ name: 'Poli', xp: 1500, spells: 'фаербол' });
// console.log(poli);
// poli.cast()
// poli.gainXp(1000);

// console.log(ajax);
// ajax.attack();
// ajax.babyRage();
// ajax.gainXp(1000);


// Автопроверка//////////////////////////////////
// class Car {
// #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }

//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// class Car {
//   #brand;
//   #model;
//   #price;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.#brand;
//   }

//   set brand(newBrand) {
//     this.#brand = newBrand;
//   }

//   get model() {
//     return this.#model;
//   }

//   set model(newModel) {
//     this.#model = newModel;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     this.#price = newPrice;
//   }
// }

// class User {
//   // Объявление и инициализация статического свойства
//   static Roles = {
//     ADMIN: "admin",
//     EDITOR: "editor",
//   };

//   #email;
//   #role;

//   constructor({ email, role }) {
//     this.#email = email;
//     this.#role = role;
//   }

//   get role() {
//     return this.#role;
//   }

//   set role(newRole) {
//     this.#role = newRole;
//   }
// }

// const mango = new User({
//   email: "mango@mail.com",
//   role: User.Roles.ADMIN,
// });

// console.log(mango.Roles); // undefined
// console.log(User.Roles); // { ADMIN: "admin", EDITOR: "editor" }

// console.log(mango.role); // "admin"
// mango.role = User.Roles.EDITOR;
// console.log(mango.role); // "editor"

// class Car {
//   static MAX_PRICE = 50000;
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     if (newPrice <= Car.MAX_PRICE)
//     this.#price = newPrice;
//   }
// }

// console.log(Car.MAX_PRICE)
// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }

// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };

//   constructor({email, accessLevel}) {
//     super(email);
//   }

//   // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// class User {
//   email;

//   constructor(email) {
//     this.email = email;
//   }

//   get email() {
//     return this.email;
//   }

//   set email(newEmail) {
//     this.email = newEmail;
//   }
// }
// class Admin extends User {
//   // Change code below this line

//   static AccessLevel = {
//     BASIC: "basic",
//     SUPERUSER: "superuser",
//   };
  
//   constructor({ email, accessLevel }) {
//     super(email);
//     this.accessLevel = accessLevel;
//   }

//   blacklistedEmails = [];
  
//   blacklist(email) {
//     this.blacklistedEmails.push(email);
//   };
  
//   isBlacklisted(email) {
//     return this.blacklistedEmails.some(mail => mail === email)
//   };

  // Change code above this line
// }

// const mango = new Admin({
//   email: "mango@mail.com",
//   accessLevel: Admin.AccessLevel.SUPERUSER,
// });

// console.log(mango.email); // "mango@mail.com"
// console.log(mango.accessLevel); // "superuser"

// mango.blacklist("poly@mail.com");
// console.log(mango.blacklistedEmails); // ["poly@mail.com"]
// console.log(mango.isBlacklisted("mango@mail.com")); // false
// console.log(mango.isBlacklisted("poly@mail.com")); // true

