# Coding Exercise

Write a function called strictEquals(a, b) that returns the same value
as a === b. Your implementation must not use the === or !== operators.
Given the strictEquals function
When <A> and <B> are compared
Then the result will be <Result>
A B Result
1 1 true
NaN NaN false // Rule Exception
0 -0 true // Rule Exception
-0 0 true // Rule Exception
1 ‘1’ false
true false false
false false true
‘Water’ ‘oil’ fals
