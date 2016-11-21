var Tree = require('../source/javascript/treeGenerator');
var Node = require('../source/javascript/node.js');
var assert = require('assert');

describe('Tree', function() {
  describe('toString', function() {
      it('should return string representation of the given tree', function() {
	  var operatorNode = new Node('-');
	  var firstNode = new Node('1');
	  var secondNode = new Node('2');
	  var tree = new Tree(operatorNode, firstNode, secondNode);

	  
	  assert.equal(tree.toString(),'(1-2)');
      });

      it('should return word representation of the given tree', function() {
	  var operatorNode = new Node('-');
	  var firstNode = new Node('1');
	  var secondNode = new Node('2');
	  var tree = new Tree(operatorNode, firstNode, secondNode);
	  assert.equal(tree.toWords(),'(one minus two)');
      });
  });
});
