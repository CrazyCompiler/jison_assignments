var Tree = require('../source/javascript/treeGenerator');
var Node = require('../source/javascript/node.js');
var dataTypes = require('../source/javascript/dataTypes.js').dataTypes;
var assert = require('assert');
var Identifiers = require('../source/javascript/identifiers.js');
var identifiers = new Identifiers();

describe('Tree', function () {
    describe('toString', function () {
        it('should return string representation of the given tree', function () {
            var operatorNode = new Node('-', dataTypes.operator);
            var firstNode = new Node(1, dataTypes.number);
            var secondNode = new Node(2, dataTypes.number);
            var tree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            assert.equal(tree.toString(), '(1-2)');
        });

    })
    describe('toWods', function () {
        it('should return word representation of the given tree', function () {
            var operatorNode = new Node('-', dataTypes.operator);
            var firstNode = new Node(1, dataTypes.number);
            var secondNode = new Node(2, dataTypes.number);
            var tree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            assert.equal(tree.toWords(), '(one minus two)');
        });
    });
    describe('evaluate', function () {
        it('should evaluate the childrens and give the result', function () {
            var operatorNode = new Node('-', dataTypes.operator);
            var firstNode = new Node(5, dataTypes.number);
            var secondNode = new Node(2, dataTypes.number);
            var tree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            var expected = new Node(3, dataTypes.number);

            assert.deepEqual(tree.evaluate(), expected);
        });
    });
    describe('evaluate', function () {
        it('should evaluate the childrens and give the result', function () {
            var operatorNode = new Node('+', dataTypes.operator);
            var firstNode = new Node(5, dataTypes.number);
            var secondNode = new Node(2, dataTypes.number);
            var firstTree = new Tree(operatorNode, firstNode, secondNode, identifiers);
            var thirdNode = new Node(6, dataTypes.number);
            var secondTree = new Tree(operatorNode, firstTree, thirdNode, identifiers);
            var fourthNode = new Node(10, dataTypes.number);
            var thirdTree = new Tree(operatorNode, secondTree, fourthNode, identifiers);

            var expected = new Node(23, dataTypes.number);
            assert.deepEqual(thirdTree.evaluate(), expected);
        });
    });
    describe('is', function () {
        it('should return true if tree class is given', function () {
            var tree = new Tree();
            assert.equal(tree.is(Tree), true);
        })
        it('should return false if other than tree class is given', function () {
            var tree = new Tree();
            assert.equal(tree.is(Node), false);
        })
    })
});
