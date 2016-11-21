var util = require('./util.js');

class Node{
<<<<<<< HEAD
    constructor(value){
	this.value = value;
    }

    evaluate(){
	return this.value;
    }
    
    toWords(){
	return util.getWordRepresentation(this.value);
    }
=======
	constructor(value){
		this.value = value;
	}

	toWords(){
		return util.getWordRepresentation(this.value);
	}
>>>>>>> 59efa974fdd06d4d8208a0d7601289e0e3094f43

    toString(){
	return this.value;
    }
};

module.exports = Node;
