/*
Create a function `min` which founds the minimum value of a number array.

If the array is empty or null, return null.

Example:
* [1, 2, 3] -> 1
* [3, -2, 1] -> -2
* [] -> null

You can't use the function Math.min()

*/

function min(array)
{

    if(array === null || array.length === 0)
    {
        return null;
    }

    let min = array[0];

    let i = 1;
    while(i < array.length)
    {
        console.log(array[i]);
        
        // est-ce que min est > a array[i]
        if (min > array[i])
        {
            // si oui : min <- array[i]
            min = array[i]; 
        }

        i = i + 1;
        console.log(min);
        console.log('fin de boucle');
    }

    return min;
}

// TODO add your code here

module.exports = min;
