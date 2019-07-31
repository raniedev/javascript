/*
[Expressões]

É tudo capaz de ser avaliado pelo interpretador da linguagem, ou seja, qualquer declaração que resulte em um dado não necessariamente numérico, 
como um nome de variável, uma função, uma string ou um literal qualquer. Exemplos de expressões:
"Olá mundo"
function(){}
46.8
true
i

Uma combinação de expressões com o uso de operadores resulta também em uma expressão:
i + 46.8

------------------------------------------------------------------------------------------------------------------------------------------------
[Operadores]

Operador                Finalidade
+ - * / %               Adição, subtração, multiplicação, divisão, módulo (resto de uma divisão)
"" + ""                 Concatenar strings
+ -                     Operador unário
< > <= =>               Menor que, maior que, maior ou igual, menor ou igual
++ --                   Pré ou pós incremento, pré ou pós decremento
== !=                   Teste de igualdade, teste de desigualdade
=== !==                 Teste de identidade, tesde não identidade
&& ||                   Concatenação lógica 'e', concatenação lógica 'ou'
.                       Acessar propriedade de um objeto
[]                      Indexar arrays
()                      Chamar função
?:                      Ternário
<< >> >>>               Operar bit numérico (bit shifting)
~                       Operar bit numérico (unário)
!                       Complemento lógico (unário)
& | ^                   Operadores de bit AND, OR e XoR
'                       Separar valores
=                       Atribuir valor
+= -= *= /=             Atribuir valor somando, subtraindo, multiplicando, dividindo
<<= >>= >>>=            Operador de bytes (unário)
&= |= ^=                Operador de bytes AND, OR e XoR (unário)
delete                  Tornar indefinida uma propriedade
in                      Verificar existência de uma propriedade
instaceof               Verificar o tipo de objeto
new                     Criar objeto
typeof                  Retornar o tipo de dado
void                    Retornar valor indefinido
*/

console.log("5 + 2 -> " + (5 + 2) + "\n5 - 2 -> " + (5 - 2) + "\n5 * 2 -> " + (5 * 2) + "\n5 / 2 -> " + (5 / 2));
console.log("\"Junt\" + \"ando\" -> " + "Junt" + "ando");
console.log("+ com 7 -> " + (+7) + "\n- com 7 -> " + (-7));
console.log("10 < 8 -> " + (10 < 8) + "\n10 > 8 -> " + (10 > 8) + "\n7 <= 7 -> " + (7 <= 7) + "\n7 >= 7 -> " + (7 >= 7));
var x = 10;
console.log("x -> " + x + "\n++x -> " + (++x) + "\nx++ -> " + (x++) + "\nx -> " + x + "\n--x -> " + (--x) + "\nx-- -> " + (x--) + "\nx -> " + x);
console.log("5 == 5 -> " + (5 == 5) + "\n5 == '5' -> " + (5 == '5') + "\n5 != 5 -> " + (5 != '5') + "\n5 != '5' -> " + (5 != '5'));
console.log("5 === 5 -> " + (5 === 5) + "\n5 === '5' -> " + (5 === '5') + "\n5 !== 5 -> " + (5 !== 5) + "\n5 !== '5' -> " + (5 !== '5'));
console.log("true && false -> " + (true && false) + "\ntrue || false -> " + (true || false));
var pessoa = new Object();
pessoa.nome = "Ana";
console.log(pessoa);
console.log("pessoa.nome -> " + pessoa.nome);
var time = ["Botafogo"];
console.log("time[0] -> " + time[0]);
var recado = function(){
    return "Volte sempre!";
};
console.log("recado() -> " + recado());
5 > 2 ? console.log("Argumento 1: true") : console.log("Argumento 2: false");
console.log("5 >> 1 -> " + (5 >> 1) + "\n5 << 1 -> " + (5 << 1) + "\n5 >>> 1 -> " + (5 >>> 1));
console.log((5..toString(2)) + " >> " + (1..toString(2)) + " -> " + ((5>>2).toString(2)) + "\n" + (5..toString(2)) + " << " + (1..toString(2)) + " -> " + ((5<<2).toString(2)) + "\n" + (5..toString(2)) + " >>> " + (1..toString(2)) + " -> " + ((5>>>2).toString(2)));
console.log("~10 e ~(-10) -> " + ~(10) + " " + ~(-10));
console.log("!true -> " + !true);
console.log("5 & 1 -> " + (5 & 1) + "\n" + (5..toString(2)) + " & " + (1..toString(2)) + " -> " + ((5 & 1).toString(2)));
console.log("5 | 1 -> " + (5 & 1) + "\n" + (5..toString(2)) + " | " + (1..toString(2)) + " -> " + ((5 | 1).toString(2)));
console.log("5 ^ 1 -> " + (5 & 1) + "\n" + (5..toString(2)) + " ^ " + (1..toString(2)) + " -> " + ((5 ^ 1).toString(2)));
console.log("x += y -> x = x + y");
console.log("typeof boolean -> " + typeof boolean);

/*
> Operandos
São as expressões (números, funções, strings, variáveis etc.) envolvidas em uma operação ou interligadas por um operador. Poe exemplo, o 
operador adição (+) destina-se a somar duas expressões, assim cada uma delas é um operando. Operadores que conbinam dois operandos, como o 
operador adição, são denominados operadores binários.

Considere agora a expressão 7 e o número negativo -7 resultante da aplicação do operador negativo (-) na expressão 7. Nesse caso, há um só
operando para o operador e ele denomina-se operador unário.

Existe também o operador ternário, combinando três expressões

> Tipos de Operandos
Em Javascript, não é possível multiplicar strings, por exemplo: "Olá mundo" * "Cheguei" é ilegal. Contudo "7" + "4" é legal e retornará "74", 
pois nesse caso o operador + é concatenador de strings.

O modo como Javascript trata os operandos quando se misturam diferentes tipos de dados em uma expressão pode levar a resultados inesperados, 
pois antes de invalidar uma operação, os mecanismos internos da linguagem tentam realizar o cálculo, fazendo uma conversão do tipo de dados
envolvidos na expressão.
*/

console.log("8 + 4 -> " + (8 + 4) + " -> " + typeof (8 + 4));
console.log("'8' + '4' -> " + ('8' + '4') + " -> " + typeof ('8' + '4'));
console.log("'8.56' + 4 -> " + ('8,56' + 4) + " -> " + typeof ('8.56' + 4));
console.log("'8' * 4 -> " + ('8' * 4) + " -> " + typeof ('8' * 4));
console.log("8 / '4' -> " + (8 / '4') + " -> " + typeof (8 / '4'));
console.log("8 + true -> " + (8 + true) + " -> " + typeof (8 + true));
console.log("'Olá' + true -> " + ('Olá' + true) + " -> " + typeof ('Olá' + true));
console.log("8 * 'olá' -> " + (8 * 'olá') + " -> " + typeof (8 * 'olá'));
console.log("8 + 'olá' -> " + (8 + 'olá') + " -> " + typeof (8 + 'olá'));
console.log("'oi' * 'olá' -> " + ('oi' * 'olá') + " -> " + typeof ('oi' * 'olá'));
console.log("typeof NaN -> " + typeof NaN);

/*
> Conversão de dados
Evite misturar dados quando criar uma operação nos scripts, existem conversões de dados para tal tarefa:
---------------------------------------------------------------
 Valor                         Conversão
Inicial         Booleano        Número          String
---------------------------------------------------------------
null            false           0(*)            "Null"
Object          true            NaN             "Object"
String          true            NaN             String
true            true            1(*)            "true"
false           false           0(*)            "false"
undefined       false           NaN             "undefined"
Number          true se !== 0   Valor do nº     "Valor do nº"
                ou NaN
---------------------------------------------------------------

A conversão para booleanos se faz conforme mostrado a seguir:
1) Os valores especiais undefined e null se convertem para false;
2) Os números 0 e NaN se convertem para false;
3) Uma string vazia se converte para false;
4) Todos os demais valores se convertem para true.

> Precedência dos operadores

---------------------------------------------------------------
Prec.           Operador
---------------------------------------------------------------
1               . [] new
2               ()
3               ++ -- 
4               ! ~ +(unário) -(unário) typeof void delete
5               ** * / %
6               +(adição) -(subtração)
7               << >> >>>
8               < <= > >= in instanceof
9               == != === !==
10              &
11              ^
12              |
13              &&
14              ||
15              ?:
16              = += -= *= /= %= <<= >>= >>>= &= ^= |=
17              ,
---------------------------------------------------------------

> Associatividade dos Operadores
Associatividade é o nome que se dá ao mecanismo interno da linguagem Javascript que estabelece a ordem em que são efetuados os cálculos 
envolvendo operadores de mesma precedência. A ordem, ou associatividade, pode ser de duas formas, a saber, da esquerda para a direita, 
abreviadamente denominada de associatividade L, ou da direita para a esquerda, denominada abreviadamente de associatividade R.

Associatividade L significa que os cálculos são realizados s esquerda para direita e R, vice-versa.

1. O operador (+) tem associatividade L e o cálculo é efetuado de forma equivalente a:
    x = ((8 + 4) + 18)
Ou seja, primeiro se soman 8 + 4 e, depois, o resultado é somado a 18. Neste exemplo pode não ser relevante entender este funcionamento de 
associatividade pois sabemos que a ordem da parcelas não altera a soma. Mas vejamos outro exemplo:

2. O operador atribuição (=) tem associatividade R e, em x = y = 40, a atribuição do valor 40 para as variáveis x e y se faz de forma 
equivalente a (x = (y = 40)), ou seja, primeiro se faz y = 40 e, depois, x = 40. 

Agora suponha que y = 20 e x = y = z. Em matemática, as três incógnitas  estão devidamente definidas e têm valor 20. Se fizermos isso em 
Javascript, nosso script para de funcionar na linha contendo x = y = z, retornando o erro: "a variável z não foi definida". A associatividade 
para x = y = z é R, portanto a atribuição equivale a (x = (y = z)), ou seja, primeiro Javascript tenta fazer y = z, mas como z não foi definido 
anteriormente, resultado: erro!

Associatividade dos operadores do Javascript
    Ass.        Operador    
    L           . [] () * / % + - << >> >>> < <= > >= == != === !== & ^ | && || ?: , in instanceof
    R           ! ~ = += -= *= /= %= <<= >>= >>>= &= ^= |= +(unário) -(unário) new typeof void delete

Aos operadores de incremento (++) e decremento (--) não se aplica o conceito de associatividade.

[Operações]
------------------------------------------------------------------------------------------------------------------------------------------------

Os operadores Javascript, segundo suas características, podem ser agrupados em sete categorias a saber:
- matemáticos;
- de comparação;
- lógicos;
- de strings;
- de bits;
- de atribuição;
- especiais.

> Operações Matemáticas: Se destinam a realizar operação com valores definidos por variáveis ou valores literais e retornar um valor.

Operador        Operação
+               Adição
-               Subtração
*               Multiplicação
/               Divisão
%               Módulo
+               Unário mais
-               Unário menos
++              Incremento
--              Decremento

> Adição
O operador binário adição (+) tem dupla finalidade: somar dois operandos ou concatenar duas strings. Quem determina a soma ou concatenação é a natureza dos operandos.
*/

console.log("\nAdição");
//Se os dois operandos são valores numéricos, a operação é a soma:
console.log(8 + 3);
console.log(9.7 + 4);

//Se os dois operandos são strings, a operação é a concatenação
console.log("Olá " + "Mundo");
console.log("45.63" + "92");

// Se um operando é string e o outro não string, este é convertido para string e a operação é cancatenação:
console.log("Olá" + 45.7);
console.log("Olá" + function(){});

/*
> Subtração
O operador binário subtração (-) efetua o cálculo subtraindo a segundo operando do primeiro. Se um ou os dois operando não forem valores 
numéricos, o operador tentará convertê-los em números.
*/

console.log("\nSubtração");
//Se os dois operandos são valores numéricos, a operação é a diferença
console.log(8 - 3);
console.log(9.7 - 4);

//Se os dois operandos são string, o resultado é NaN:
console.log("Olá " - "Mundo!");

//Se os dois operandos são strings numéricas, o resultado é o número diferença:
console.log("7" - "3");

/*
> Multiplicação
O operador binário multiplicação (*) efetua o cálculo multiplicando os dois operandos. Se um ou os dois operandos não forem valores numéricos, 
o operador tentará convertê-los em números
*/

console.log("\nMultiplicação");
//Se os dois operandos são valores numéricos, a operação é a multiplicação:
console.log(8 * 3);
console.log(9.7 * 4);

/*
> Divisão
O operador binário divisão (/) efetua o cálculo dividindo o primeiro operando pelo segundo operando. Se um ou os dois operandos não forem 
valores numéricos, o operador tentará convertê-los em números
*/

console.log("\nDivisão");
//Se os dois operandos são valores numéricos, a operação é a divisão:
console.log(8/2);
console.log(9.6/3);

//Se os dois operandos são strings, o resultado será NaN:
console.log("Olá "/"Mundo!");

//Se os dois operandos são strings numéricas, o resultado é o número divisão:
console.log("8"/"2");

/*
> Módulo
O operador binário módulo (%) efetua o cálculo dividindo o primeiro operando pelo segundo operando e retornando o resto da divisão. Se um ou dois operandos não forem valores numéricos, o operador tentará convertê-los em números
*/
console.log("\nMódulo");
console.log(3%2);
console.log(9%5);
console.log(-7%4);
console.log(6.7%5);

/*
> Unário menos
O operador unário menos (-) destina-se a trocar o sinal do operando ao qual é aplicado, ou seja, converte em negativo um número positivo e vice-versa. Se o operando não for um valor numérico, o operador tentará convertê-lo em número.
*/
console.log("\nUnário Menos")
console.log(-4);
console.log(-6.87);

/*
> Unário mais
O operador unário mais (+) é o simétrico do unário menos e destina-se a declarar explicitamento, o sinalde um operando. Se o operando não for um valor numérico, o operador tentará convertê-lo em número e, como consequência, o uso desse operador em uma string numérica, por exemplo, forçará sua conversão em número.
*/
console.log("\nUnário Mais");
console.log(+1000);
console.log(+"40");

