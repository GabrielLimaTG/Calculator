# Calculator
Calculator made with JScript


There's a bug:

1. The operation is made only by two numbers. If I add a "minus" sign with the +/- button, it 
gives an error because it can't read more than a sign or 2 separated numbers.


EDIT:

multi operations solved with a for loop. I still have problem with operations that start with negative number!


EDIT 2:

Final change, and seemingly there are no bugs anymore. The solution to the negative numbers are two:

1. Add an 'if' statement that would check if the input starts with special char, in this case if it started specifically with "-" would already work fine.

In that case (starts with \W) the split method would create an extra element to the 'split' var, starting with [0] = ''.
so shift() erases this useless element. The "result" var which is the first element of 'split' now corrected, has to become negative and the math operations have to start from position [1] of the 'usedOperations' array, and not [0] anymore.

2. The last condition of the 'if' statement is the second solution, add another counter to the operations symbol (a var named as 'calculate') where it will start independently of the arrayPosition var and count the operation from [1], not [0].
