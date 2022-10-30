// console.log('Hello')

// class User {
//     constructor({ name, lastName, birthday }) {
//         this.name = name;
//         this.lastName = lastName;
//         this.birthday = birthday;
//     } 

//     get age() {
//         const birth = new Date(this.birthday).getTime();
//         const today = Date.now();

//         console.log(birth)
//         console.log(this.birthday)
//         console.log(today)

//         return Math.floor((today - birth)/ (1000*60*60*24)/365.25)
//     }

//     static getOldest(arr) {
//         const newArr = [...arr];
//         newArr.sort((user1, user2) => user2.age - user1.age)
//         console.log(newArr[0])
//     }
// }

// const userPetya = new User({
//     name: 'Petya',
//     lastName: 'Ivanov',
//     birthday: '10-10-1980',
// });

// const userKolya = new User({
//     name: 'Kolya',
//     lastName: 'Petrov',
//     birthday: '09-20-1984',
// });

// const userMasha = new User({
//     name: 'Masha',
//     lastName: 'Semina',
//     birthday: '11-01-1965',
// });


// User.getOldest([userPetya, userKolya, userMasha])
// console.log(userPetya, userKolya, userMasha);
// console.log(userPetya.age)
// console.log(userKolya.age)
// console.log(userMasha.age)
