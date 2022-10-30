'use strict'
// const cart = [
//     {
//         name: "lenovo X120S",
//         price: 17800,
//         quantity: 2,
//     },
//     {
//         name: "Playstation 5 Slim",
//         price: 24000,
//         quantity: 3,
//     },
//     {
//         name: "Darkside Genesis",
//         price: 1200,
//         quantity: 1,
//     },
// ];

// function totalPrice(array) {
//     let total = 0;
//     for (const el of array) {
//         console.log(el);
//         total += el['price'] * el['quantity'];
//     };
//     return total;
// };
    
// console.log(cart);
// console.log(totalPrice(cart));

// function totalPrice(array) {
//     let total = 0;
//     for (let i = 0; i < array.length; i++) {
//         console.log(i+1, array[i].name, array[i].price, array[i].quantity);
//         let sum = array[i].price * array[i].quantity;
//         console.log(`Сумма: ${ sum }`);
//         total += sum;
//         console.log(`Итого: ${ total }`);
//     };
//     return total;
// };

// console.log(totalPrice(cart));



// const cart = [
//     {
//         name: "Андрей",
//         sallary: 22000,
//         department: "sale",
//     },
//     {
//         name: "Святослав",
//         sallary: 33000,
//         department: "lawyer",
//     },
//     {
//         name: "Мария",
//         sallary: 44000,
//         department: "IT",
//     },
//     {
//         name: "Иван",
//         sallary: 55000,
//         department: "IT",
//     },
//     {
//         name: "Юрий",
//         sallary: 28000,
//         department: "lawyer",
//     },
//     {
//         name: "Алина",
//         sallary: 78000,
//         department: "sale",
//     },
//     {
//         name: "Алекс",
//         sallary: 105000,
//         department: "IT",
//     },
// ];

// function maxSallary(array) {
//     // {department: {sallary, 
//                   // peoples,},} 
//     let newCart = {};
//     for (let i = 0; i < array.length; i++) {
//         // console.log(array[i]);
//         if (Object.keys(newCart).includes(array[i].department)) {
//             newCart[array[i].department] = {
//                 sallary: newCart[array[i].department].sallary + array[i].sallary,
//                 peoples: newCart[array[i].department].peoples + 1,
//             }
//         } else {
//             newCart[array[i].department] = { sallary: array[i].sallary, peoples: 1, };
//             // newCart = {
//             //     ...newCart,
//             //     [array[i].department]: { sallary: array[i].sallary, peoples: 1,}
//             // }
//         };
//     };
//     console.log(newCart);
//     // max = {department: ....,
// //            maxSallary: ....,}
//     let max = {};
//     // let max = null;    
//     for (const el in newCart) {
//         // console.log(el);
//         const item = newCart[el];
//         const maxSallary = item.sallary / item.peoples;
//         if (maxSallary > max?.maxSallary || !max.maxSallary) {
//         // if (maxSallary > (max && max.maxSallary) || !max?.maxSallary) {
//             max = {
//                 department: el,
//                 maxSallary,
//             }
//         }
//     }
//     console.log(max);
// };

// maxSallary(cart);