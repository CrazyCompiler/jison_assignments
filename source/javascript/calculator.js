
var addition = function(firstNumber, secondNumber){
    return firstNumber+secondNumber;
};

var subtraction = function(firstNumber, secondNumber){
    return firstNumber-secondNumber;
}

var multiplication = function(firstNumber, secondNumber){
    return firstNumber*secondNumber;
};

var division = function(firstNumber, secondNumber){
    return firstNumber/secondNumber;
};

var power = function(firstNumber, secondNumber){
    return Math.pow(firstNumber,secondNumber);
};

var operations = {
    '+':addition,
    '-':subtraction,
    '*':multiplication,
    '/':division,
    '^':power
}

class Calculator{
    constructor(parent, leftChild, rightChild){
	this.parent = parent;
	this.leftChild = leftChild;
	this.rightChild = rightChild;
    }

    calculate(){
	return operations[this.parent](this.leftChild, this.rightChild);
    }
}

module.exports = Calculator;