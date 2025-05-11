grammar Ejercicio5; 

program : stat+ ;

stat : decl  // Declaración
    | assign // Asignación
    | expr  // Expresiones aritméticas simples
    ;

decl : declaracion ID (EQ expr)? SEMI;

declaracion : LET 
            | VAR
            ;

assign : ID EQ expr SEMI;

expr : expr md expr
    | expr sr expr
    | LPAREN expr RPAREN
    | ID
    | INT
    ;

md : MULT 
    | DIV
    ;

sr : SUM
    | REST
    ;


AND : 'and' ;
OR : 'or' ;
NOT : 'not' ;
EQ : '=' ;
COMMA : ',' ;
SEMI : ';' ;
LPAREN : '(' ;
RPAREN : ')' ;
LCURLY : '{' ;
RCURLY : '}' ;

LET : 'let';
VAR : 'var';

MULT : '*';
DIV  : '/';
SUM  : '+';
REST : '-';

INT : [0-9]+ ;
ID: [a-zA-Z_][a-zA-Z_0-9]* ;
WS: [ \t\n\r\f]+ -> skip ; 