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
    var Tree = require('./treeGenerator.js');
    var Node = require('./node.js');
    var dataType = require('./dataTypes').dataTypes;
%}

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        {console.log($1.toString(),'\n\n',$1.toWords(),'\n\n',$1.evaluate());  return $1; }
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

