
// 11. Write a for loop to print numbers from 10 to 1 in reverse. 
for(i = 10; i>=0; i--){
     console.log(i)
}


// ==================================================================================================================================
// 12. Use a for and while loop to print multiples of 3 from 3 to 30.
for(i = 3; i<=31; i+=3){
     console.log(i);
}
let table = 3
while(table <= 31){
     console.log(table);
     table+=3
};

// ==================================================================================================================================
// 13. Write a program to calculate the sum of numbers from 1 to 100 using a loop.
let sum = 0;
for(i= 0; i<= 100; i++){
     sum+=i;
}
console.log(sum);

// ==================================================================================================================================
// 14. Create a nested loop to print a star pattern.
 for(i=1; i<=5; i++){
     let stars = ""
     for(j=1; j<=i; j++){
          stars+="*";
     }
     console.log(stars);
 }
// ==================================================================================================================================

// 15. Use a for...of loop to iterate over the string "JavaScript"
let word = "JavaScript";
for(char of word){
     console.log(char);
}

// ==================================================================================================================================
// 16. Remove duplicate values from an array.

let arrnew = [1,2,3,4,5,5,3,2,4,2];
let uniqueArr = [...new Set(arr)];
console.log(uniqueArr);

// ==================================================================================================================================
// 17. Find the Third largest number in array.


let nums = [1,1,2,3,4,5,6,5,4,3,5,7,8,6,4,3,3,2,2,2];

// sorted array reomove repeated numbers.
 let sorted = [...new Set(nums)];
console.log(sorted);

// sorted in descending order.
sorted = sorted.sort((a,b) => b-a);
console.log(sorted);

// finding 3rd largest number.
console.log(sorted.length >3? sorted[3] : null);


// ==================================================================================================================================
// 18. Sort an array in descending order
let newArray = [1,2,3,4,5,5,6,7,8];

 newArray = newArray.sort((a,b) => b-a);
 console.log(newArray);

// ==================================================================================================================================
// 19. Reverse an array without using .reverse().
function reverseArray(arr){
     let reversed = [];
     for(let i = arr.length-1; i>=0; i--){
          reversed.push(arr[i]);
     }
     return reversed;
}
console.log(reverseArray([1,2,3,4,5,6,7]));


// ==================================================================================================================================
// 20. Find the most frequent element in an array.
let arr = [1,2,3,4,5,6,6,6,7,8,,2,2,2,2];
let obj = {};

arr.forEach(function(val){
     obj[val] === undefined ? (obj[val] = 1) : obj[val]++;

});
console.log(obj);