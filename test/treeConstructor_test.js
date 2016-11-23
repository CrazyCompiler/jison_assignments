var Tree = require('../source/javascript/treeGenerator');
var createNode = require('../source/javascript/node.js');
var dataTypes = require('../source/javascript/dataTypes.js');
var assert = require('assert');
var Identifiers = require('../source/javascript/identifiers.js');
var identifiers = new Identifiers();

describe('Tree', function () {
    describe('toString', function () {
        it('should return string representation of the given tree', function () {
            var operatorNode = createNode('-', dataTypes.operator);
            var firstNode = createNode(1, dataTypes.number);
            var secondNode = createNode(2, dataTypes.number);
            var tree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            assert.equal(tree.toString(), '(1-2)');
        });

    })
    describe('toWods', function () {
        it('should return word representation of the given tree', function () {
            var operatorNode = createNode('-', dataTypes.operator);
            var firstNode = createNode(1, dataTypes.number);
            var secondNode = createNode(2, dataTypes.number);
            var tree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            assert.equal(tree.toWords(), '(one minus two)');
        });
    });
    describe('evaluate', function () {
        it('should evaluate the children and give the result', function () {
            var operatorNode = createNode('-', dataTypes.operator);
            var firstNode = createNode(5, dataTypes.number);
            var secondNode = createNode(2, dataTypes.number);
            var tree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            var expected = createNode(3, dataTypes.number);

            assert.deepEqual(tree.evaluate(), expected);
        });
    });
    describe('evaluate', function () {
        it('should evaluate the childrens and give the result', function () {
            var operatorNode = createNode('+', dataTypes.operator);
            var firstNode = createNode(5, dataTypes.number);
            var secondNode = createNode(2, dataTypes.number);
            var firstTree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            var thirdNode = createNode(6, dataTypes.number);
            var secondTree = new Tree(operatorNode, firstTree, thirdNode, identifiers);
            var fourthNode = createNode(10, dataTypes.number);
            var thirdTree = new Tree(operatorNode, secondTree, fourthNode, identifiers);

            var expected = createNode(23, dataTypes.number);
            assert.deepEqual(thirdTree.evaluate(), expected);
        });
    });
});
