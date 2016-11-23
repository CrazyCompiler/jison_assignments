var assert = require('assert');
var Tree = require('../source/javascript/treeGenerator.js');
var Node = require('../source/javascript/node.js');
var Identifiers = require('../source/javascript/identifiers.js');
var dataTypes = require('../source/javascript/dataTypes.js').dataTypes;

describe('identifiers', function () {
    describe('assign', function () {
        it('should return true if value has been assigned', function () {
            var identifier = new Identifiers();
            var node = new Node(2,dataTypes.number);
            identifier.assign('a', node);
            assert.equal(identifier.contains('a'), true);
        });
        it('should return evaluated value of tree', function () {
            var identifier = new Identifiers();
            var node = new Node(2);
            var operatorNode = new Node('+');
            var tree = new Tree(operatorNode, node, node, identifier);
            var expected = new Node(4, dataTypes.number);
            identifier.assign('a', tree);
            assert.deepEqual(identifier.getValueOf('a'), expected);
        });
    });

});
