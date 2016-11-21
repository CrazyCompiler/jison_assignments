var util = require('./util.js');

class Node{
	constructor(value){
		this.value = value;
	}

	toWords(){
		return util.getWordRepresentation(this.value);
	}

    toString(){
	return this.value;
    }
};

module.exports = Node;
