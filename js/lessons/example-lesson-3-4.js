'use strict'

const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};
// Каждая транзакция это объект со свойствами:
// id, type и amount
const account = {
  // Текущий баланс счета
  balance: 0,
  // История транзакций
  transactions: [],
//    * Метод создает и возвращает объект транзакции.
//    * Принимает сумму и тип транзакции.
  
  createTransaction(amount, type, message = 'ok') {
    const transaction = {
      id: this.transactions.length + 1,
      amount,
      type,
      date: new Date(),
      message,
    };
    this.transactions.push(transaction);
  },
  //  * Метод отвечающий за добавление суммы к балансу.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций
  deposit(amount) {
    this.balance += amount;
    this.createTransaction(amount, Transaction.DEPOSIT);
  },
  //  * Метод отвечающий за снятие суммы с баланса.
  //  * Принимает сумму танзакции.
  //  * Вызывает createTransaction для создания объекта транзакции
  //  * после чего добавляет его в историю транзакций.
  //  * Если amount больше чем текущий баланс, выводи сообщение
  //  * о том, что снятие такой суммы не возможно, недостаточно средств.
  withdraw(amount) {
    if (amount > this.balance) {
      this.createTransaction(
        amount,
        Transaction.WITHDRAW,
        'sorry, not enough...'
      );
      console.log('sorry, not enough...');
      return;
    }
    this.balance -= amount;
    this.createTransaction(amount, Transaction.WITHDRAW);
  },
  //  * Метод возвращает текущий баланс
  getBalance() {
    return this.balance;
  },
  //  * Метод ищет и возвращает объект транзации по id
  getTransactionDetails(id) {
    for (const tr of this.transactions) {
      if (tr.id === id) {
        return tr;
      }
    }
    return 'Transaction not found';
  },
  //  * Метод возвращает количество средств
  //  * определенного типа транзакции из всей истории транзакций
  getTransactionTotal(type) {
    let sum = 0;

    for (const tr of this.transactions) {
      if (tr.type === type) {
        sum += tr.amount;
      }
    }
    return sum;
  },
};
// console.log(account.balance);

// account.deposit(10);
// account.deposit(90);
// account.deposit(50);
// account.deposit(40);
// console.log(account.getBalance());
// console.log(account.transactions);

// account.withdraw(60);
// account.withdraw(60);
// account.withdraw(60);
// console.log(account.getBalance());

// account.withdraw(20);
// console.log(account.transactions);

// console.log(account.getTransactionDetails(2));
// console.log(account.getTransactionDetails(20));

// console.log(account.getTransactionTotal(Transaction.DEPOSIT));
// console.log(account.getTransactionTotal(Transaction.WITHDRAW));




// Операция spread
// Дополни функцию createContact(partialContact) так, чтобы она возвращала новый объект контакта с добавленными свойствами id и createdAt, а также list со значением "default" если в partialContact нет такого свойства.

// Решение
// function createContact(partialContact) {
//   return {
//     id: generateId(),
//     createdAt: new Date(),
//     list: 'default',
//     ...partialContact,
//   };
// }

// console.log(
//   createContact({
//     name: 'Mango',
//     email: 'mango@mail.com',
//     list: 'friends',
//   })
// );
// console.log(
//   createContact({
//     name: 'Poly',
//     email: 'poly@hotmail.com',
//   })
// );

// function generateId() {
//   return '_' + Math.random().toString(36).substr(2, 9);
// }
