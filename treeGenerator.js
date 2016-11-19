

class Tree{

	constructor(operator, leftChild, rightChild){
		this.operator = operator;
		this.leftChild = leftChild;
		this.rightChild = rightChild;
	}

	toString() {
		return  '(' + this.leftChild.toString() + this.operator + this.rightChild + ')';
		
	}
};


module.exports = Tree;
