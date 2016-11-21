var Node = require('../source/javascript/node.js');
var assert = require('assert');

describe('node', function() {
  describe('toWords', function() {
      it('should return word of current node', function() {
	var node = new Node('-');
	assert.equal(node.toWords(),'minus');
    });
  });
});
