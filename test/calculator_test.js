var Calculator = require('../source/javascript/calculator.js');
var assert = require('assert');

describe('calculator', function() {
    describe('calculate', function() {
	it('should calculate the subtraction and give result', function() {
	    var calculator = new Calculator('-',4,2);
	    assert.equal(calculator.calculate(),2);
	});

	it('should calculate the addition and give result', function() {
	    var calculator = new Calculator('+',4,2);
	    assert.equal(calculator.calculate(),6);
	});

	it('should calculate the multiplication and give result', function() {
	    var calculator = new Calculator('*',4,2);
	    assert.equal(calculator.calculate(),8);
	});

	it('should calculate the division and give result', function() {
	    var calculator = new Calculator('/',4,2);
	    assert.equal(calculator.calculate(),2);
	});

	it('should calculate the power and give result', function() {
	    var calculator = new Calculator('^',2,2);
	    assert.equal(calculator.calculate(),4);
	});
	
	
    });
    
});
