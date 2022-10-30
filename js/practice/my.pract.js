// function solution(str){
//     return str.split('').reverse().join('')
// }
// console.log(solution('jfhfg'))

function countPositivesSumNegatives(input) {
  
    let result = [];
    
    let count = [];
    let sum = 0;
    for (const value of input) {
        if (value < 0) {
            sum += value;
        };
        if (value > 0) {
            count.push(value);
        };
        if (value === 0) {
            console.log(value)
            continue;
        } 
        
        
    };
    result.push(count.length, sum);
    return result;
    
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, 0]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))