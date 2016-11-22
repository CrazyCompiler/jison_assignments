var Calculator = require('./calculator');
var Node = require('./node');
var dataTypes = require('./dataTypes').dataTypes;

class Tree{
    constructor(parent, leftChild, rightChild){
		this.parent = parent;
		this.leftChild = leftChild;
		this.rightChild = rightChild;
    }

    toString() {
		var leftChild = this.leftChild.toString();
		var parent = this.parent.toString();
		var rightChild = this.rightChild.toString();
		return  `(${leftChild}${parent}${rightChild})`;
    }

    toWords(){
		var leftChild = this.leftChild.toWords();
		var parent = this.parent.toWords();
		var rightChild = this.rightChild.toWords();
		var stringRepresentation = `(${leftChild} ${parent} ${rightChild})`;
		return stringRepresentation;
    }

    isFinalBranch(){
		return ((+this.leftChild) && (+this.rightChild))
    }

    evaluate(){
		var leftChildResult = this.leftChild.evaluate();
		var rightChildResult = this.rightChild.evaluate();
		var operator = this.parent.evaluate();
	
		var calculator = new Calculator(operator, leftChildResult, rightChildResult);
		var result = calculator.calculate();
		return new Node(result, dataTypes.number);
    }
};


module.exports = Tree;
