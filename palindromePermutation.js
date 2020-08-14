/**Write a function that accepts a string and determine if the
 * permutations of the string are a palindrome or not
 *
 * input: Tact Coa
 * output: True (Permutations: taco cat, acto tca)
 *
 * constraints: empty string, case insensitive, spaces ignored?
 *  */

function palindromePermutation(str) {
  const charOccurrence = new Map();
  for (s of str) {
    if (s !== ' ') {
      if (!charOccurrence.has(s)) {
        charOccurrence.set(s, 0);
      } else {
        charOccurrence.delete(s);
      }
    }
  }

  return charOccurrence.size <= 1;
}
