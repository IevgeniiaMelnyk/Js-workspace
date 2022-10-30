'use strict'
// console.log('Урок 3-4 Массивы Функции')

// const plylist = {
//     name: 'Мой плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// }

// console.log(plylist);
// console.log(plylist.tracks);

// console.log(plylist.rating);
// console.log(plylist['rating']);

// const propertyName = 'tracks';
// console.log(plylist[propertyName]);


// const username = 'Johnny';
// const email = 'agnikava@gmail.com';
// const signupData = {
//     username,
//     email,
// };
// console.log(signupData);

// const inputName = 'color';
// const inputValue = 'tomato';
// const colorPickerData = {
//     [inputName]: inputValue,
// };

// colorPickerData.size = 'xl';
// console.log(colorPickerData);

// const a = [1, 2, 3];
// a.hello = ':-)';
// console.log(a);

// const fn = function () {
//     console.log('hello');
// };
// fn.hello = ':-)';
// console.dir(fn);

// const plylist = {
//     name: 'Мой плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     // getName: function () {
//     //     console.log('Ага это getName :-)');
//     // },
//     getName() {
//         console.log('Ага это getName :-)');
//     },
// };
// console.log(plylist);
// plylist.getName();

// const plylist = {
//     name: 'Мой плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName: ', this);
//         this.name = newName;
//     },
//     addTracks(track) {
//         this.tracks.push(track);
//         this.trackCount = this.tracks.length;
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
// };

// plylist.changeName('Новое имя');
// plylist.addTracks('Новый трек');
// plylist.updateRating(6);
// console.log(plylist);

// const plylist = {
//     name: 'Мой плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],

//     changeName(newName) {
//         console.log('this внутри changeName: ', this);
//         this.name = newName;
//     },
//     addTracks(track) {
//         this.tracks.push(track);
//     },
//     updateRating(newRating) {
//         this.rating = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// console.log(plylist.getTrackCount());
// plylist.changeName('Новое имя');
// plylist.addTracks('Новый трек1');
// console.log(plylist.getTrackCount());
// plylist.updateRating(6);
// plylist.addTracks('Новый трек2');
// console.log(plylist);
// console.log(`${plylist.getTrackCount()} треков`);

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// }
// let totalFeedback = 0;

// const keys = Object.keys(feedback);
// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }
// console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);
// console.log(values);

// for (const value of values) {
//     totalFeedback += value;
// }
// console.log('totalFeedback: ', totalFeedback);

// const friends = [
//     { name: 'Vitya', online: false },
//     { name: 'Anna', online: true },
//     { name: 'Johnny', online: true },
//     { name: 'Bob', online: false },
//     { name: 'Ben', online: false },
// ];

// friends[1].newprop = 222;

// console.table(friends);

// for (const friend of friends) {
//     console.log(friend.online);
//     friend.newprop = 555;
// };

// console.table(friends);

// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend.name)
//         if (friend.name === friendName) {
//             return 'Да!!!'
//         }
//     }
// };

// console.log(findFriendByName(friends, 'Johnny'));
// console.log(findFriendByName(friends, 'Bob'));
// console.log(findFriendByName(friends, 'Cot'));

// const getAllNames = function (allFriends) {
//     const names = [];
//     for (const friend of allFriends) {
//         console.log(friend.name);
//         names.push(friend.name);
//     }
//     return names;
// }

// console.log(getAllNames(friends));

// const getOnlineFriends = function (allFriends) {
//     const getOnlineFriends = [];
//     for (const friend of allFriends) {
//         if (friend.online) {
//             getOnlineFriends.push(friend);
//         }
//     }
//     return getOnlineFriends;
// };

// console.log(getOnlineFriends(friends));

// const getOfflineFriends = function (allFriends) {
//     const getOfflineFriends = [];
//     for (const friend of allFriends) {
//         if (!friend.online) {
//             getOfflineFriends.push(friend);
//         }
//     }
//     return getOfflineFriends;
// };

// console.log(getOfflineFriends(friends));

// const getFriendsByStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     };

    // for (const friend of allFriends) {
    //     if (friend.online) {
    //         friendsByStatus.online.push(friend);
    //     } else {
    //         friendsByStatus.offline.push(friend);
    //     }
    // }
    // for (const friend of allFriends) {
    //     if (friend.online) {
    //         friendsByStatus.online.push(friend);
    //         continue;
    //     }
    //     friendsByStatus.offline.push(friend);
    // }
    // for (const friend of allFriends) {

        //     friendsByStatus[friend.online ? 'online' : 'offline'].push(friend);
        // };

//         const key = friend.online ? 'online' : 'offline';
//         friendsByStatus[key].push(friend);

//     };
//     return friendsByStatus;
// };

// console.log(getFriendsByStatus(friends));

// const x = {
//     a: 1,
//     b: 30,
//     c: 50,
//     d: 100,
// };

// console.log(Object.keys(x).length);

// Распыление
// const temps = [2, 50, 34, 64, 773, 43, 47];
// console.log(Math.max(...temps));
// console.log(Math.min(...temps));

// const temps1 = [2, 50, 34];
// const temps2 = [20, 11, 21];
// const temps3 = [43, 3, 46];

// const xx = temps1.concat(temps2, temps3);
// const xxx = [...temps1, ...temps2, ...temps3];
// console.log(xx, xxx)

// const a = { x: 1, y: 2 };
// const b = { e: 3, f: 5 };

// const c = Object.assign({}, a, b, { d: 'Johnny' });

// const d = {
//     name: "Johnny",
//     ...a,
//     ...b,
// }

// console.log(d)


// const plylist = {
//     name: 'Мой плейлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
    
// }
// console.log(plylist.tracks.length);
//     const { name, rating, author = 'Ananimus', trackCount: count } = plylist;
// console.log(name, rating, author, count);


// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];

// for (let color of colors) {
//     console.log(color.hex);
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
//     console.log(hexColors, rgbColors);
// }

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
    
//     for (let product of products) {
                                     
//         if (productName === product.name) {
//             return product.price;
//         }
//         continue;
//   }
//     return null;
// }
// console.log(getProductPrice("Radar"))
// console.log(getProductPrice("Scanner"))
// console.log(getProductPrice("Droid"))
// console.log(getProductPrice("Grip"))
// console.log(getProductPrice("Gr"))

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
 
//     let array = [];
//     for (const product of products) {
       
//         if (product[propName] !== undefined) {
//             array.push(product[propName]);
//         }
        
//         }
//     return array;
// }

// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     let total = 0;
//     for (const product of products) {
                
//         if (product.name === productName) {
//             total = product.price * product.quantity;
//         }
//     }
//      return total;
// }

// console.log(calculateTotalPrice("Blaster"));
// console.log(calculateTotalPrice("Radar"));
// console.log(calculateTotalPrice("Droid"));

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// console.log(highTemperatures)

// const {
//     highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow }
//     = highTemperatures;

// console.log(highIcon);

// function makeTask(data) {
//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
    
  
//     console.log(data);
  
//     let newData = {
//         completed,
//         category,
//         priority,
//         ...data,
//     };
    
//     // newData.category = data.category;
//     // newData.priority = data.priority;
//     // newData.text = data.text;
 
//     return newData;
// }

// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }));
// console.log(makeTask({}));

// function findMatches(array, ...args) {
//   const matches = [];
//   console.log(array);
//   console.log(args);
//   for (let i = 0; i < array.length; i++) {
//     // console.log(array[i])
//     // console.log(args[i])
//     for (const arg of args)
//     if (arg === array[i]) {
//       matches.push(arg);
//     }
   
//   }
//   return matches;
// }

// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7));
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2));
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16));

// const bookShelf = {
  
//   books: ["The last kingdom", "The guardian of dreams"],
//   getBooks() {
//     return "Returning all books";
//   },
//   addBook(bookName) {
//     return `Adding book ${bookName}`;
//   },
//   removeBook(bookName) {
//     return `Deleting book ${bookName}`;
//   },
//   updateBook(oldName, newName) {
//   return `Updating book ${oldName} to ${newName}`;
//   },
// };

// const bookShelf = {
//   books: ["The last kingdom", "Haze", "The guardian of dreams"],
//   updateBook(oldName, newName) {
    
//     const index = this.books.indexOf(oldName);
//     console.log(index)
//     this.books.splice(index, 1, newName);
//     return this.books
//   },
// };
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles"))

// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
  // },
  // addPotion(newPotion) {
  //   for (const potion of this.potions) {
  //     if (potion.name === newPotion.name) {
  //       return `Error! Potion ${newPotion.name} is already in your inventory!`;
  //     }
  //   }
  //   return this.potions.push(newPotion);
  // },
  // removePotion(potionName) {
  //   for (const potion of this.potions) {
  //     // console.log(potion)
  //     // console.log(potion.name === potionName);
  //     // if (potion.name !== potionName) {
  //     //   return `Potion ${potionName} is not in inventory!`;
  //     // } else
  //     // {
  //     if (potion.name === potionName) {
  //       const potionIndex = this.potions.indexOf(potion);
  //       console.log(potionIndex);
  //       this.potions.splice(potionIndex, 1);
  //     }
      
  //   }
  // }
      // if (potion.name === potionName) {
      //   const potionIndex = this.potions.indexOf(potion);
      //   console.log(potionIndex);
      //   this.potions.splice(potionIndex, 1);
      // };
      // if (potion.name !== potionName) {
      //   return `Potion ${potionName} is not in inventory!`;
      // };
     
      // if (potion.name !== potionName) {
      //   return `Potion ${potionName} is not in inventory!`;
      // }
    
  
//   updatePotionName(oldName, newName) {
//     for (const potion of this.potions) {
//       if (potion.name === oldName) {
//         const potionIndex = this.potions.indexOf(potion);
//         console.log(potionIndex);
//         this.potions[potionIndex].name = newName;
//       }
//     }
//   },
  
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: 'Dragon breath', price: 700 }));
// console.log(atTheOldToad.addPotion({ name: 'Stone skin', price: 240 }));
// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Dragon"));
// console.log();

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'))
// console.log(atTheOldToad.getPotions());

// копия дз 41
// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],
//   // Change code below this line
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;
//       }
//     }
//     return this.potions.push(newPotion);
//   },
//   removePotion(potionName) {
//     for (const potion of this.potions) {
//       if (potion.name === potionName) {
//         const potionIndex = this.potions.indexOf(potion);
//         console.log(potionIndex);
//         this.potions.splice(potionIndex, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     const potionIndex = this.potions.indexOf(oldName);

//     if (potionIndex === -1) {
//       return `Potion ${oldName} is not in inventory!`;
//     }

//     this.potions.splice(potionIndex, 1, newName);
//   },
//   // Change code above this line
// };


// Репета занятие

// const autors = {
//   kivi: 3,
//   poli: 5,
//   jojo: 2,
//   bob: 7,
// };
// const entries = Object.entries(autors);
// console.log(entries);
// console.log();
// for (const [name, rating] of entries) {
//   // const [name, rating] = autors;
  
//   console.log(name);
//   console.log(rating);
//   console.log()
// }

// const profile = {
//   name: 'Johnny',
//   tag: 'tra-ta-ta',
//   location: 'Ruminiya',
//   avatar: 'https://s3.amaxon/125.jpg',
//   stats: {
//     followers: 435,
//     views: 465,
//     likes: 112,
//   },
// };

// const showProfileInfo = function (userProfile) {
//   const {
//     name,
//     tag,
//     location,
//     avatar,
//     stats: { followers, views, likes },
//   } = userProfile;
//   console.log(name, tag, location, followers);
//   console.log();
// }

// showProfileInfo(profile);

// Корзина!!!!!!!

// const cart = {
//     items: [],
//   getItems() {
//     return this.items;
//      },
//   add(product) { 
//     for (const item of this.items) {
//       if (item.name === product.name) {
//         item.quantity += 1;
//         return;
//       }
//     }
//     const newProduct = {
//       ...product,
//       quantity: 1,
//     };

//      this.items.push(newProduct);
//   },
//   remove(productName) {

//     const { items } = this;
//     for (let i = 0; i < items.length; i += 1) {
//       const { name } = this.items[i];
//       // console.log(name);
//       if (productName === name) {
//         console.log('Yes! It is: ', productName);
//         console.log(i);
//         items.splice(i, 1);
//         }
//       } 
//      },
//   clear() { 
//     this.items = [];
//     },
//   countTotalPrice() { 
//     let total = 0;
//     for (const {price, quantity} of this.items) {
//       total += price * quantity;
//     }
//     return total;
//     },
//     // increaseQuantity(productName) { },
//     // decreaseQuantity(productName) { },
// };
// console.table(cart.getItems());

// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'apple', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'pear', price: 60 });
// cart.add({ name: 'peach', price: 110 });
// cart.add({ name: 'peach', price: 110 });
// cart.add({ name: 'peach', price: 110 });

// console.table(cart.getItems());
// cart.remove('lemon');
// console.table(cart.getItems());
// console.log('Total: ', cart.countTotalPrice());
// cart.clear();
// console.table(cart.getItems());








