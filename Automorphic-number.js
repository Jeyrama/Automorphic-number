/*
A number is called Automorphic number if and only 
if its square ends in the same digits as the number itself.

Task:
  Given a number determine if it Automorphic or not.

Notes:
  The number passed to the function is positive
  Input >> Output Examples

Example:
  autoMorphic (25) -->> return "Automorphic" 
Explanation:
  25 squared is 625 , Ends with the same number's digits which are 25 .
*/


// Solution

const automorphic = n => String(n*n).endsWith(String(n)) ? "Automorphic" : "Not!!";

// or

function automorphic(n) {
  let len = n.toString().length
  let num = (n * n).toString().slice(-len)
  return (n == num) ? "Automorphic" : "Not!!"
}