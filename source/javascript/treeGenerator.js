var Calculator = require('./calculator');

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
	if(this.isFinalBranch()){
	    var calculator = new Calculator(this.parent, this.leftChild, this.rightChild);
	    return calculator.calculate();
	}
	
	return this.leftChild.evaluate();
    }
};


module.exports = Tree;
