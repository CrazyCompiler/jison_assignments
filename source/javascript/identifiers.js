var Tree = require('./treeGenerator');

class Identifiers {
    constructor() {
        this.variableTable = {};
    }

    assign(key, value) {
        if (value.is(Tree))
            this.variableTable[key] = value.evaluate();
        else
            this.variableTable[key] = value;
    }

    contains(key){
        if(this.variableTable[key])
            return true;
        return false;
    }

    getValueOf(key){
        return this.variableTable[key];
    }
}


module.exports = Identifiers;
