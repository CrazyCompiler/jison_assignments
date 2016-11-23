/* lexical grammar */
%lex
%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
\w+		      		  return 'WORD'
"*"                   return '*'
"/"                   return '/'
"-"                   return '-'
"+"                   return '+'
"^"                   return '^'
"!"                   return '!'
"%"                   return '%'
"("                   return '('
")"                   return ')'
"="		              return 'ASSIGNMENT'
";"		              return 'SEMICOLON'
<<EOF>>               return 'EOF'
.                     return 'INVALID'

/lex
%{
	var path = require('path');
	var Tree = require(path.resolve('./source/javascript/treeGenerator.js'));
    	var Node = require(path.resolve('./source/javascript/node.js'));
    	var dataType = require(path.resolve('./source/javascript/dataTypes'));
    	var Identifiers = require(path.resolve('./source/javascript/identifiers'));
	var identifiers = new Identifiers();
	var result;
%}

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'
%left '=' ';'


%start expressions

%% /* language grammar */

expressions
    : statement EOF
        { return result; }
    ;

statement
    : expression
    { result = $$;}
    | expression SEMICOLON statement

    | assignment_expression

    | assignment_expression expression SEMICOLON
    | assignment_expression statement
    ;

assignment_expression
    :assignment SEMICOLON
    |assignment
    ;

assignment
    :WORD ASSIGNMENT expression
    { identifiers.assign($1,$3);}
    ;

expression
    : expression '+' expression
        {$$ = new Tree(new Node($2, dataType.operator), $1, $3, identifiers); }

    | expression '-' expression
        { $$ = new Tree(new Node($2, dataType.operator) , $1, $3, identifiers); }

    | expression '*' expression
        { $$ = new Tree(new Node($2, dataType.operator) , $1, $3, identifiers); }

    | expression '/' expression
        { $$ = new Tree(new Node($2, dataType.operator) , $1, $3, identifiers); }

    | expression '^' expression
        { $$ = new Tree(new Node($2, dataType.operator), $1, $3, identifiers);}

    | '(' expression ')'
        {$$ = new Node($2, dataType.number);}

    | NUMBER
        {$$ = new Node(Number(yytext),dataType.number);}

    | WORD
        { $$ = identifiers.getValueOf($$);}
    ;
