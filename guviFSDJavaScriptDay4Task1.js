// // Do the below programs in anonymous function & IIFE
// ////======anonymous==================================================================
// //1. Print odd numbers in an array
// const oddCheck = function (arr){
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 != 0){
//             result.push(arr[i]);
//         }
//     }
//     return result;        
// }
// arr = [1,4,5,6,4,3,7,9];
// console.log(oddCheck(arr));
// ////--------IIFE---------------------------------------------------------------------------
// const oddCheck = (arr)=>{
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 != 0){
//             result.push(arr[i]);
//         }
//     }
//     return result;        
// }
// arr = [1,4,5,6,4,3,7,9];
// console.log(oddCheck(arr));

// ////=========anonymous===============================================================================
// //2. Convert all the strings to title caps in a string array

// const titleCaps = function (arr){
//         let result = [];
//         for(let i = 0; i < arr.length; i++){
//             result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
//         }
//         return result;        
//     }
// let uin="Convert all the strings to title caps in a string array";
// let strArray=uin.split(" ");
// console.log(titleCaps(strArray));
// ////--------IIFE---------------------------------------------------------------------------
// const titleCaps =  (arr)=>{
//         let result = [];
//         for(let i = 0; i < arr.length; i++){
//             result.push(arr[i].charAt(0).toUpperCase() + arr[i].substr(1).toLowerCase());
//         }
//         return result;        
//     }
// let uin="Convert all the strings to title caps in a string array";
// let strArray=uin.split(" ");
// console.log(titleCaps(strArray));
// ////=========anonymous===============================================================================
// //3. Sum of all numbers in an array

// const sumOfNumbers = function (arr){
//     let sum=0;
//     for(let i = 0; i < arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;        
// }
// let numArray=[4,7,3,9,5,7];
// console.log(sumOfNumbers(numArray));
// ////---------IIFE--------------------------------------------------------------------------
// const sumOfNumbers = (arr)=>{
//     let sum=0;
//     for(let i = 0; i < arr.length; i++){
//         sum+=arr[i]
//     }
//     return sum;        
// }
// let numArray=[4,7,3,9,5,7];
// console.log(sumOfNumbers(numArray));
// ////==========anonymous==============================================================================

// //4. Return all the prime numbers in an array
// const primeCheck = function(num){
//     let flag = true;
//     for (let i = 2; i <= num - 1; i++){
//         if (num % i == 0) {
//             flag = false;
//             break;
//         } 
//     }
//     return flag;     
// }
// const primeNumbers = function (arr){
//     let primes=[];
//     for(let i = 0; i < arr.length; i++){
//        if(primeCheck(arr[i]))
//             primes.push(arr[i]) 
//     }
//     return primes;        
// }
// let numArr=[4,7,3,9,5,7];
// console.log(primeNumbers(numArr));
// ////--------IIFE---------------------------------------------------------------------------
// const primeCheck = (num)=>{
//     let flag = true;
//     for (let i = 2; i <= num - 1; i++){
//         if (num % i == 0) {
//             flag = false;
//             break;
//         } 
//     }
//     return flag;     
// }
// const primeNumbers = (arr)=>{
//     let primes=[];
//     for(let i = 0; i < arr.length; i++){
//        if(primeCheck(arr[i]))
//             primes.push(arr[i]) 
//     }
//     return primes;        
// }
// let numArr=[4,7,3,9,5,7];
// console.log(primeNumbers(numArr));
// ////==========anonymous==============================================================================

// //5. Return all the palindromes in an array
// const palindromeCheck = function(num){
//     let flag = false;
//     let numcopy=num;
//     let rev=0;
//     while(numcopy>0){
//         rev=(rev*10)+(numcopy%10);
//         numcopy=parseInt(numcopy/10);
//     }
//     if(num===rev){
//         flag= true;
//     }
//     return flag; 
// }
// const palindromes = function (arr){
//     let palindromes=[];
//     for(let i = 0; i < arr.length; i++){
//        if(palindromeCheck(arr[i]))
//        palindromes.push(arr[i]) 
//     }
//     return palindromes;        
// }
// let numArr1=[234,424,656,789,989,232];
// console.log(palindromes(numArr1));
// ////----------IIFE-------------------------------------------------------------------------
// const palindromeCheck =(num)=>{
//     //console.log(num);
//     let flag = false;
//     let numcopy=num;
//     let rev=0;
//     while(numcopy>0){
//         rev=(rev*10)+(numcopy%10);
//         numcopy=parseInt(numcopy/10);
//     }
//     if(num===rev){
//         flag= true;
//     }
//     return flag; 
// }
// const palindromes =  (arr)=>{
//     let palindromes=[];
//     for(let i = 0; i < arr.length; i++){
//        if(palindromeCheck(arr[i]))
//        palindromes.push(arr[i]) 
//     }
//     return palindromes;        
// }
// let numArr1=[234,424,656,789,989,232];
// console.log(palindromes(numArr1));
// ////==========anonymous==============================================================================

// //6. Return median of two sorted arrays of the same size.

// const getMedian= function (ar1, ar2, n)
// {
//     var i = 0; 
//     var j = 0; 
//     var count;
//     var m1 = -1, m2 = -1;
 
//     /* Since there are 2n elements, median will be average
//     of elements at index n-1 and n in the array obtained after
//     merging ar1 and ar2 */
//     for (count = 0; count <= n; count++)
//     {
//         /*Below is to handle case where all elements of ar1[] are
//         smaller than smallest(or first) element of ar2[]*/
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
 
//         /*Below is to handle case where all elements of ar2[] are
//         smaller than smallest(or first) element of ar1[]*/
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
//         /* equals sign because if two
//             arrays have some common elements */
//         if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar2[j];
//             j++;
//         }
//     }
//     return (m1 + m2)/2;
// }
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2)
//     console.log("Median is "+ getMedian(ar1, ar2, n1));
// else
//     console.log("Doesn't work for arrays of unequal size");

// ////----------IIFE-------------------------------------------------------------------------
// const getMedian=  (ar1, ar2, n)=>{
//     var i = 0; 
//     var j = 0; 
//     var count;
//     var m1 = -1, m2 = -1;
 
//     /* Since there are 2n elements, median will be average
//     of elements at index n-1 and n in the array obtained after
//     merging ar1 and ar2 */
//     for (count = 0; count <= n; count++)
//     {
//         /*Below is to handle case where all elements of ar1[] are
//         smaller than smallest(or first) element of ar2[]*/
//         if (i == n)
//         {
//             m1 = m2;
//             m2 = ar2[0];
//             break;
//         }
 
//         /*Below is to handle case where all elements of ar2[] are
//         smaller than smallest(or first) element of ar1[]*/
//         else if (j == n)
//         {
//             m1 = m2;
//             m2 = ar1[0];
//             break;
//         }
//         /* equals sign because if two
//             arrays have some common elements */
//         if (ar1[i] <= ar2[j])
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar1[i];
//             i++;
//         }
//         else
//         {
//             m1 = m2; /* Store the prev median */
//             m2 = ar2[j];
//             j++;
//         }
//     }
//     return (m1 + m2)/2;
// }
// var ar1 = [1, 12, 15, 26, 38];
// var ar2 = [2, 13, 17, 30, 45];
// var n1 = ar1.length;
// var n2 = ar2.length;
// if (n1 == n2)
//     console.log("Median is "+ getMedian(ar1, ar2, n1));
// else
//     console.log("Doesn't work for arrays of unequal size");
// ////==========anonymous==============================================================================

// // //7. Remove duplicates from an array


// let arr = [1,3,4,5,3,4,45,4,4,1,21,2]; 
// const removeDuplicates=function (arr) {
//     let unique = [];
//     for (i = 0; i < arr.length; i++) {
//         if (unique.indexOf(arr[i]) === -1) {
//             unique.push(arr[i]);
//         }
//     }
//     return unique;
// }
// console.log(removeDuplicates(arr));

// // ////----------IIFE-------------------------------------------------------------------------
// // let arr = [1,3,4,5,3,4,45,4,4,1,21,2]; 
// // const removeDuplicates=(arr) =>{
// //     let unique = [];
// //     for (i = 0; i < arr.length; i++) {
// //         if (unique.indexOf(arr[i]) === -1) {
// //             unique.push(arr[i]);
// //         }
// //     }
// //     return unique;
// // }
// // console.log(removeDuplicates(arr));
// // ////==========anonymous==============================================================================
// // //8. Rotate an array by k times

// const rotate=function(a, n, k) 
// {  
//     k = k % n; 
//     let result=[];
//     for (let i = 0; i < n; i++) { 
//         if (i < k) { 
//             result.push(a[n + i - k]); 
//         } 
//         else {    
//             result.push((a[i - k])); 
//         } 
//     } 
//     return result;
// } 
// let Array = [1, 2, 3, 4, 5]; 
// let N = Array.length; 
// let K = 2; 
  
// console.log(rotate(Array, N, K));
// //  ////---------IIFE--------------------------------------------------------------------------

// //  const rotate = (a, n, k) =>{  
// //      k = k % n; 
// //      let result=[];
// //      for (let i = 0; i < n; i++) { 
// //          if (i < k) { 
// //              result.push(a[n + i - k]); 
// //          } 
// //          else {    
// //              result.push((a[i - k])); 
// //          } 
// //      } 
// //      return result;
// //  } 
// //  let Array = [1, 2, 3, 4, 5]; 
// //  let N = Array.length; 
// //  let K = 2; 
// //  console.log(rotate(Array, N, K));

// ////========================================================================================  
