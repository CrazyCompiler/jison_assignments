var util = require('./util.js');
var dataTypes = require('./dataTypes.js').dataTypes;

class Node{
    constructor(value, type){
	this.value = value;
	this.type = type
    }

    evaluate(nextNode, operation){
	if(this.type == dataTypes.number && this.type != undefined)
	    return operation(this.value, nextNode.value);
	return this.value;
    }
    
    toWords(){
	return util.getWordRepresentation(this.value);
    }
    
    toString(){
	return this.value;
    }
};

module.exports = Node;
