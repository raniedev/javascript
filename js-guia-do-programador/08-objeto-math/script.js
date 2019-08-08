/*
> Objeto Math
Destina-se a realizar operações matemáticas, examinando suas propriedades e métodos.

> Conceitos
O objeto Math, ao contrário da maioria dos objetos Javascript, não é um construtor. Não tem uma propriedade interna constructor, sendo assim não é possível usá-lo como operador new. Também não tem uma propriedade interna call e, consequentemente, não é possível usá-lo como uma função. Diz-se que suas propriedades e métodossão estáticas.

> Propriedades do objeto Math
As propriedades do objeto Math armazenam constantes matemáticas notáveis, como os valores PI, da constante de Euler(E), entre outros.

[Propriedade]           [Valor Armazenado]
------------------------------------------------------------------------------------------------------------------------------------------------
Math.E                  Número de Euler. Base dos logaritmos naturais = 2.7182818284590452354
Math.LN10               Logaritmo natural de 10 = 2.302585092994046
Math.LN2                Logaritmo natural de 2 = 0.69314718055994046
Math.LOG10E             Logaritmo na bse 10 de E(número de Euler) = 0.4342944819032518
Math.LOG2E              Logaritmo na base 2 de E(número de Euler) = 1.4426950408889634
Math.PI                 Constante matemática PI = 3.1415926535897932
Math.SQRT1_2            Raiz quadrada de 1/2 = 0.7071067811865476
Math.SQRT2              Raiz quadrada de 2 = 1.4142135623730951

A fórmula matemática do comprimento de uma circunferência é:
C = 2PIr (Circunferência = 2 x PI x raio)
*/
function comprimentoCircunferencia(r){
    return 2 * Math.PI * r;
};

console.log(comprimentoCircunferencia(3));