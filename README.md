# Roman to Integer

Convert a Roman numeral string into its integer value.

## How it works

1.Use a Map    
 Include all Roman numeral symbols and subtractive notations (e.g., IV, IX, XL) ordered from largest to smallest.    
 
2.Slice input string    
 At the current index, slice the input string by the length of the Roman numeral key to compare.    
 
3.Repeat additions      
 For numerals representing 1, 10, 100, and 1000, add their values repeatedly up to 3 times.      

## Note

`num` represents the current index in the input string, which advances by the length of the matched key.    
`['M','C','X','I'].includes(key)` Repeatable symbols are accumulated up to three times, advancing the index accordingly.    

## Complexity

time: O(n), where n is the length of the input string.     
Space: O(1), as output is an integer.

## References
[LeetCode Roman to Integer](https://leetcode.com/problems/roman-to-integer/)
