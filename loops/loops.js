// LOOPS IN JAVASCRIPT FOR DSA
// Main types:
// 1. for loop
// 2. while loop
// 3. do...while loop

// ---------------------------------
// 1. for loop
// Best when you know how many times you want to run the loop.
// Syntax:
// for (start; condition; change) {
//   code
// }

// for (let i = 0; i < 5; i++) {
//   console.log("for loop:", i);
// }


// ......... 
// increment use case 
// for(let i = 1; i<100; i++){
//     console.log(i)
// }

// decrement use case 
// for(let i = 200; i>99; i--){
//     console.log(i)
// }

// 1. print 10 time hello 

// for(let i = 1; i<=10; i++){
//  console.log("hello")
// }  


//& ---------------------------------

// 2. sum of natural numbers to n number; 

// let num = Number(prompt("Enter a number"));

// if (isNaN(num)) {
//     console.log("Number is Invalid")
// } else {
//     if (num > 0) {
//         let sum = 0;

//         for (let i = 1; i <= num; i++) {
//             sum = sum + i;
//         }
//         console.log(sum)
//     }else{
//         console.log("Number should be +ive")
//     }
// }

//& --------------------------------


//^ ---------------------------------

// 3. factorial of natural numbers to n number; 

let num = Number(prompt("Enter a number"));

if (isNaN(num)) {
    console.log("Number is Invalid")
} else {
    if (num > 0) {
        let factorial = 1;

        for (let i = 1; i <= num; i++) {
            factorial = factorial * i;
        }
        console.log(factorial)
    }else{
        console.log("Number should be +ive")
    }
}

//^ --------------------------------


//^ ---------------------------------

// 3. factorial of natural numbers to n number; 

let n = Number(prompt("Enter a number"));

if (isNaN(n)) {
    console.log("Number is Invalid")
} else {
    if (n > 0) {
      
        for (let i = 1; i <= n; i++) {
            if(n % i === 0){
                console.log(i)
            }
        }
    }else{
        console.log("Number should be +ive")
    }
}

//^ --------------------------------




// ---------------------------------
// Time complexity idea:
// One simple loop over n elements -> O(n)
// Two nested loops over n elements -> O(n^2)

// ---------------------------------
// Practice questions:
// 1. Print numbers from 1 to 10
// 2. Print array in reverse
// 3. Find the smallest element in an array
// 4. Count odd numbers in an array
// 5. Print all pairs in an array
