1. 20
2. 20
3. Doing so makes it more cognitively taxing to understand the code. The whole "hoisting" thing makes it so you don't know that a variable is declared until you reach it lower in the code which can be confusing.
4. 20
5. The code provides a ReferenceError since result is not defined in the function's scope and only in the if statement's scope since let does not hoist variables.
6. The code provides a TypeError since the assignment of constants cannot be changed.
7. The code does not reach line 13. It has an error on line 9, but ignoring that, the result would be the same as #5.