/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex
%{
	var path = require('path');
	var Tree = require(path.resolve('./source/javascript/treeGenerator.js'));
    	var Node = require(path.resolve('./source/javascript/node.js'));
    	var dataType = require(path.resolve('./source/javascript/dataTypes')).dataTypes;
    
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
        { $$ = new Tree(new Node('+', dataType.operator), $1, $3);}
    | e '-' e
        { $$ = new Tree(new Node('-', dataType.operator) , $1, $3);}
    | e '*' e
        { $$ = new Tree(new Node('*', dataType.operator) , $1, $3);}
    | e '/' e
        { $$ = new Tree(new Node('/', dataType.operator) , $1, $3);}
    | e '^' e
        { $$ = new Tree(new Node('^', dataType.operator), $1, $3);}
    | '(' e ')'
        {$$ = new Node($2, dataType.number);}
    | NUMBER
        {$$ = new Node(Number(yytext),dataType.number);}
    ;

