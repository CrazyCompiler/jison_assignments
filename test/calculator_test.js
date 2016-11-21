var Calculator = require('../source/javascript/calculator.js');
var dataTypes = require('../source/javascript/dataTypes.js').dataTypes;
var Node = require('../source/javascript/node.js');
var assert = require('assert');

describe('calculator', function() {
    describe('calculate', function() {
	it('should calculate the subtraction and give result', function() {
	    var firstNode = new Node(4, dataTypes.number);
	    var secondNode = new Node(2, dataTypes.number);
	    var operationNode = new Node('-', dataTypes.operator);
	    
	    var calculator = new Calculator(operationNode, firstNode, secondNode);
	    var result = new Node(2, dataTypes.number);
	    assert.deepEqual(calculator.calculate(),result);
	});

	it('should calculate the addition and give result', function() {
	    var firstNode = new Node(4, dataTypes.number);
	    var secondNode = new Node(2, dataTypes.number);
	    var operationNode = new Node('+', dataTypes.operator);
	    
	    var calculator = new Calculator(operationNode, firstNode, secondNode);
	    var result = new Node(6, dataTypes.number);
	    assert.deepEqual(calculator.calculate(),result);
	});

	it('should calculate the multiplication and give result', function() {
	    var firstNode = new Node(4, dataTypes.number);
	    var secondNode = new Node(2, dataTypes.number);
	    var operationNode = new Node('*', dataTypes.operator);
	    
	    var calculator = new Calculator(operationNode, firstNode, secondNode);
	    var result = new Node(8, dataTypes.number);
	    assert.deepEqual(calculator.calculate(),result);

	});

	it('should calculate the division and give result', function() {
	    var firstNode = new Node(4, dataTypes.number);
	    var secondNode = new Node(2, dataTypes.number);
	    var operationNode = new Node('-', dataTypes.operator);
	    
	    var calculator = new Calculator(operationNode, firstNode, secondNode);
	    var result = new Node(2, dataTypes.number);
	    assert.deepEqual(calculator.calculate(),result);

	});

	it('should calculate the power and give result', function() {
	    var firstNode = new Node(4, dataTypes.number);
	    var secondNode = new Node(2, dataTypes.number);
	    var operationNode = new Node('^', dataTypes.operator);
	    
	    var calculator = new Calculator(operationNode, firstNode, secondNode);
	    var result = new Node(16, dataTypes.number);
	    assert.deepEqual(calculator.calculate(),result);
	});
    });
    
});
