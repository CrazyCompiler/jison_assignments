/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
\w+		      return 'WORD'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
"="		      return 'ASSIGNMENT'
";"		      return ';'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex
%{
	var path = require('path');
	var Tree = require(path.resolve('./source/javascript/treeGenerator.js'));
    	var Node = require(path.resolve('./source/javascript/node.js'));
    	var dataType = require(path.resolve('./source/javascript/dataTypes')).dataTypes;
    	var Identifiers = require(path.resolve('./source/javascript/identifiers'));
	var identifiers = new Identifiers();
%}

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {return $1; }
    ;

e
    : e '+' e
        { $$ = new Tree(new Node($2, dataType.operator), $1, $3);}
    | e '-' e
        { $$ = new Tree(new Node($2, dataType.operator) , $1, $3);}
    | e '*' e
        { $$ = new Tree(new Node($2, dataType.operator) , $1, $3);}
    | e '/' e
        { $$ = new Tree(new Node($2, dataType.operator) , $1, $3);}
    | e '^' e
        { $$ = new Tree(new Node($2, dataType.operator), $1, $3);}
    | '(' e ')'
        {$$ = new Node($2, dataType.number);}
	
    | WORD ASSIGNMENT e ';'
      	{ identifiers.assign($1, $3)}
    | NUMBER
        {$$ = new Node(Number(yytext),dataType.number);}
    ;

