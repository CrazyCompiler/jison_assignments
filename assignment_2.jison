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
    var numberToWord = require('number-to-words');

    var getWordOfNumber = function(number){
        if( isNaN(number * ''))
            return number;
        return numberToWord.toWords(number);
    }
%}

/* operator associations and precedence */

%left '+' '-'
%left '*' '/'

%start expressions

%% /* language grammar */

expressions
    : e EOF
        { typeof console !== 'undefined' ? console.log($1) : print($1);
          return $1; }
    ;

e
    : e '+' e
        {$$ = [getWordOfNumber($1), " plus ", getWordOfNumber($3)] }
    | e '-' e
        { $$ = [getWordOfNumber($1), " minus ", getWordOfNumber($3)] }
    | e '*' e
        { $$ = [getWordOfNumber($1)," times ", getWordOfNumber($3)] }
    | e '/' e
        { $$ = [getWordOfNumber($1)," by ",getWordOfNumber($3)] }
    | NUMBER
        {$$ = yytext}
    ;

