var Calculator = require('../source/javascript/calculator.js');
var dataTypes = require('../source/javascript/dataTypes.js');
var assert = require('assert');

describe('calculator', function () {
    describe('calculate', function () {
        it('should calculate the subtraction and give result', function () {
            var calculator = new Calculator('-', 2, 2);
            assert.deepEqual(calculator.calculate(), 0);
        });

        it('should calculate the addition and give result', function () {
            var calculator = new Calculator('+', 2, 2);
            assert.deepEqual(calculator.calculate(), 4);
        });

        it('should calculate the multiplication and give result', function () {
            var calculator = new Calculator('*', 2, 2);
            assert.deepEqual(calculator.calculate(), 4);
        });

        it('should calculate the division and give result', function () {
            var calculator = new Calculator('/', 2, 2);
            assert.deepEqual(calculator.calculate(), 1);
        });

        it('should calculate the power and give result', function () {
            var calculator = new Calculator('^', 2, 2);
            assert.deepEqual(calculator.calculate(), 4);
        });
    });

});
