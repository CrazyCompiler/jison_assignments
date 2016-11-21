var Node = require('../source/javascript/node.js');
var dataType = require('../source/javascript/dataTypes.js').dataTypes;
var assert = require('assert');

var addition = function(firstNumber, secondNumber){
    return firstNumber+secondNumber;
}

describe('node', function() {
    describe('toWords', function() {
	it('should return word representation of current node', function() {
	    var node = new Node('-',dataType.operator);
	    assert.equal(node.toWords(),'minus');
	});
    });
    
    describe('toString', function() {
	it('should return string representaion of current node', function() {
	    var node = new Node('-',dataType.operator);
	    assert.equal(node.toString(),'-');
	});
    });

    describe('evaluate', function() {
	it('should evaluate the operation given to it with the other node and return result', function() {
	    var firstNode = new Node(1, dataType.number);
	    var secondNode = new Node(2, dataType.number);

	    assert.equal(firstNode.evaluate(secondNode, addition),3);
	});
    });

    describe('evaluate', function() {
	it('should return the operation value if operator is provided to it', function() {
	    var firstNode = new Node('-', dataType.operator);
	    var secondNode = new Node(2);
	    
	    assert.equal(firstNode.evaluate(secondNode, addition),'-');
	});
    });

    
});
