var Node = require('../source/javascript/node.js');
var Tree = require('../source/javascript/treeGenerator.js');
var dataType = require('../source/javascript/dataTypes.js').dataTypes;
var assert = require('assert');

var addition = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

describe('node', function () {
    describe('toWords', function () {
        it('should return word representation of current node', function () {
            var node = new Node('-', dataType.operator);
            assert.equal(node.toWords(), 'minus');
        });
    });

    describe('toString', function () {
        it('should return string representaion of current node', function () {
            var node = new Node('-', dataType.operator);
            assert.equal(node.toString(), '-');
        });
    });

    describe('evaluate', function () {
        it('should evaluate itself and return result', function () {
            var firstNode = new Node(1, dataType.number);
            assert.equal(firstNode.evaluate(), 1);
        });
    });

    describe('is', function () {
        it('should return true if node class is given', function () {
            var node = new Node();
            assert.equal(node.is(Node), true);
        })
        it('should return false if other than node class is given', function () {
            var node = new Node();
            assert.equal(node.is(Tree), false);
        })
    })
});
