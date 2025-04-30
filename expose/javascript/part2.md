1. 3 is printed and an error is NOT thrown because the var keyword was used to declare i which hoisted it into the function scope.
2. 150 is printed and an error was NOT thrown for an identical reason to #1. 
3. 150 is printed because final price was already declared at the top of the function and it was within the scope where the print statement was called.
4. The function will return an array containing the values 50, 100, and 150 because the function is functional and accurately applies the 50% "discount" to the list of prices passed in to the function. 
5. The code will give a ReferenceError since i is no longer in scope due to not being hoisted by a var declaration.
6. The code will give a ReferenceError for an identical reason to #5.
7. 150 Again, this is the boring case where the variable was in the proper scope to be accessed by the print statement without issues.
8. Identical to #4.
9. Identical to #5.
10. The code runs just fine and the value 3 is printed since the input array has three elements.
11. Identical to #4.
12. A. student.name
12. B. student["Grad Year"]
12. C. student.greeting()
12. D. student["Favorite Teacher"].name
12. E. student.courseLoad[0]
13. A. '32': The 2 is cast to a string and the '3' and '2' are then concatenated together.
13. B. 1: The 3 is cast to a number and the subtraction 3 - 2 results in 1.
13. C. 3: null is cast to the number 0 and the addition 3 + 0 results in 3.
13. D. '3null': null is cast to the string 'null' and the + operator performs string concatenation on the '3' and 'null' to get '3null'
13. E. 4: true is cast to the number 1 and the addition 1 + 3 results in 4.
13. F. 0: both false and null are cast to the number 0 and the addition 0 + 0 results in 0.
13. G. '3undefined': the undefined is cast to the string 'undefined' and the + operator performs string concatenation on the '3' and 'undefined' to get '3undefined'
13. H. NaN: the '3' is cast to the number 3 and the undefined is cast to the "number" NaN. Any operation with NaN is NaN, so 3 - Nan results in NaN. 
14. A. true: the '2' is cast to the number 2 and since 2 > 1, the result is true.
14. B. false: no cast is done, the strings are compared in lexicographical order, the string starting with '1' would come before string starting with '2' in the dictionary, so false.
14. C. true: the '2' is cast to the number 2 and since 2 = 2, the non-strict equality check passes.
14. D. false: since both sides are different types, then the strict equality check fails.
14. E. false: the true is cast to the number 1 and since 1 != 2, then the non-strict equality check fails.
14. F. true: since both sides are of type Boolean AND have equal values (true), the strict equality check passes.
15. In short, the === checks for equality without type conversion, while the == operator allows for type conversion before checking for equality.
16. See part2-question16.js
17. The result will be an array with the values 2, 4, and 6. This is because the modify array function takes a list and a function and returns a copy of that list with the function applied to each element. Since the function passed in was a doubling function, then with the input of [1,2,3], the output would be a list of those values doubles, i.e. a list containing [2,4,6].
18. See part2-question18.js
19. 1 4 3 2