# Roman to Integer

Convert a Roman numeral string into its integer value.

## How it works

1.Use a Map   
 Use a `Map` that contains only the basic Roman numeral symbols (I, V, X, L, C, D, M) without explicitly listing exceptions like 4, 9, 40, etc.    
 
2.Iterate through s     
 Loop through string s character by character. Use `.get(key)` to assign the current value to curr and the next value to next for comparison and exception handling.

## Note

`curr < next` use to handle subtraction cases (e.g., 4, 9, 40, 90, 400, 900) where the current value should be subtracted instead of added.

## Complexity

time: O(n), iterate through each character once
Space: O(1), fixed-size Map

## References
[LeetCode Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
