var createNode = require('../source/javascript/node.js');
var Identifiers = require('../source/javascript/identifiers.js');
var dataType = require('../source/javascript/dataTypes.js');
var assert = require('assert');

var addition = function (firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

describe('node', function () {
    describe('createNode', function () {
        it('should return node value present in Identifier', function () {
            var identifiers = new Identifiers();
            var firstNode = createNode(20, dataType.number, identifiers);
            identifiers.assign('foo', firstNode);
            var storedNode = createNode('foo', dataType.variable, identifiers);
            assert.deepEqual(storedNode, firstNode);
        });
        it('should throw error if the variable is not present in identifier', function () {
            var identifiers = new Identifiers();
            try {
                createNode('foo', dataType.variable, identifiers);
            }
            catch (e){
                assert.equal(e.toString(),'Error: foo not defined');
            }

        });
    });

    describe('toWords', function () {
        it('should return word representation of current node', function () {
            var node = createNode('-', dataType.operator);
            assert.equal(node.toWords(), 'minus');
        });
    });

    describe('toString', function () {
        it('should return string representaion of current node', function () {
            var node = createNode('-', dataType.operator);
            assert.equal(node.toString(), '-');
        });
    });

    describe('evaluate', function () {
        it('should evaluate itself and return result', function () {
            var firstNode = createNode(1, dataType.number);
            assert.equal(firstNode.evaluate(), 1);
        });
    });
});
