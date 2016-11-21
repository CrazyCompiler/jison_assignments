var util = require('./util.js');

class Node{
    constructor(value){
	this.value = value;
    }

    evaluate(){
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
