/*
It is not a statement, but a literal expression, ignored by earlier versions of JavaScript.
The purpose of "use strict" is to indicate that the code should be executed in "strict mode".
Declared at the beginning of a script, it has global scope.
*/

"use strict";

var testArray = [1,2,3];
console.log(testArray);

/*
JavaScript function definitions do not specify data types for parameters.
JavaScript functions do not perform type checking on the passed arguments.
JavaScript functions do not check the number of arguments received.
*/ 
function TestFunc(x, y, z) 
{
    //If a function is called with missing arguments (less than declared), the missing values are set to: undefined
    if( x === undefined) {
        x = 3.14;
        console.log(x);
    }
}

function FindMaxValueInParameterList() 
{ 
    //JavaScript functions have a built-in object called the arguments object; The arguments object contains an array of the parameters used when the function was called
    var maxValue = null
    if (arguments.length === 0)
        return 0;
    else 
    {
       maxValue = arguments[0];
       for(var i = 1; i < arguments.length; i++) {
           if(arguments[i] > maxValue) {
               maxValue = arguments[i];
           }
       }
    }
    return maxValue;
}

//If a function is called with missing arguments (less than declared), the missing values are set to: undefined
TestFunc();

console.log(FindMaxValueInParameterList());
console.log(FindMaxValueInParameterList(1,2,3,4,5));

///////////////////////////////////////////////////////////////////////
/* a function's default return type is undefined' */
function ReturnSquaredValue(x) {
    if (arguments.length !== 0)
        return x * x;
} 


console.log(ReturnSquaredValue());

////////////////////////////////////////////////////////////////////////
/*
Arguments are Passed by Value
The parameters, in a function call, are the function's arguments.
JavaScript arguments are passed by value: The function only gets to know the values, not the argument's locations.
If a function changes an argument's value, it does not change the parameter's original value.
Changes to arguments are not visible (reflected) outside the function.
*/

var numberParameter = 10.5;
function TestParameterPassedByValue(parameter) {
    parameter = 55.5;
    console.log(parameter);
}

console.log('numberParameter value before function call: ' + numberParameter);
TestParameterPassedByValue(numberParameter);
console.log('numberParameter value after function call: ' + numberParameter);

////////////////////////////////////////////////////////////////////////
/*
Objects are Passed by Reference
In JavaScript, object references are values.
Because of this, objects will behave like they are passed by reference:
If a function changes an object property, it changes the original value.
Changes to object properties are visible (reflected) outside the function.
*/
var person = {
        firstName:"John", 
        lastName:"Doe", 
        age:50, 
        eyeColor:"blue"
    };

function TakeObjectAsParameter(personObj) {
    personObj.firstName = "Jane";
    personObj.lastName = "Dawn";
    personObj.eyeColor = "Black";
};

console.log(person);
TakeObjectAsParameter(person);
console.log(person);

////////////////////////////////////////////////////////////////////////
/* 
When adding numbers, if one operand is not specified or undefined, the result is NaN.
*/
function AddMe(x, y) {
    return x+y;
}

var result = AddMe(5);
if (isNaN(result))
    console.log("When adding numbers, if one operand is not specified or undefined, the result is NaN");
