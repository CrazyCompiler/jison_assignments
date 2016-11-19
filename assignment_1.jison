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
    
%}

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'
%left '^'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1.toString()) : print($1);
          return $1; }
    ;

e
    : e '+' e
        { $$ = new Tree('+' , $1, $3);}
    | e '-' e
        { $$ = new Tree('-' , $1, $3);}
    | e '*' e
        { $$ = new Tree('*' , $1, $3);}
    | e '/' e
        { $$ = new Tree('/' , $1, $3);}
    | e '^' e
        { $$ = new Tree('^' , $1, $3);}
    | '(' e ')'
        {$$ = $2;}
    | NUMBER
        {$$ = Number(yytext)}
    ;

