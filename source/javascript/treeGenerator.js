var Calculator = require('./calculator');
var Node = require('./node');
var dataTypes = require('./dataTypes').dataTypes;

class Tree {
    constructor(operator, leftChild, rightChild, identifiers) {
        this.operator = operator;
        this.leftChild = leftChild;
        this.rightChild = rightChild;
        this.identifiers = identifiers;
    }

    toString() {
        var leftChild = this.leftChild.toString();
        var operator = this.operator.toString();
        var rightChild = this.rightChild.toString();
        return `(${leftChild}${operator}${rightChild})`;
    }

    is(classType) {
        return Tree == classType;
    }

    toWords() {
        var leftChild = this.leftChild.toWords();
        var operator = this.operator.toWords();
        var rightChild = this.rightChild.toWords();
        var stringRepresentation = `(${leftChild} ${operator} ${rightChild})`;
        return stringRepresentation;
    }

    evaluateValues(node){
        if(this.identifiers.contains(node))
            return this.identifiers.getValueOf(node).evaluate();
        else if(node.evaluate)
            return node.evaluate();

    }

    evaluate() {
        var leftChildResult = this.evaluateValues(this.leftChild);
        var rightChildResult = this.evaluateValues(this.rightChild);
        var operator = this.evaluateValues(this.operator);

        var calculator = new Calculator(operator, leftChildResult, rightChildResult);
        var result = calculator.calculate();
        return new Node(result, dataTypes.number);
    }
}
;


module.exports = Tree;
