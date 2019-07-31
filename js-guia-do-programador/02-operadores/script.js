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

Operador                    Finalidade
*/

//1) + - * / %               Adição, subtração, multiplicação, divisão, módulo (resto de uma divisão)
console.log("5 + 2 -> " + (5 + 2) + "\n5 - 2 -> " + (5 - 2) + "\n5 * 2 -> " + (5 * 2) + "\n5 / 2 -> " + (5 / 2));

//2) "" + ""                 Concatenar strings
console.log("\"Junt\" + \"ando\" -> " + "Junt" + "ando");

//3) + -                     Operador unário
console.log("+ com 7 -> " + (+7) + "\n- com 7 -> " + (-7));

//4) < > <= =>               Menor que, maior que, maior ou igual, menor ou igual
console.log("10 < 8 -> " + (10 < 8) + "\n10 > 8 -> " + (10 > 8) + "\n7 <= 7 -> " + (7 <= 7) + "\n7 >= 7 -> " + (7 >= 7));

//5) ++ --                   Pré ou pós incremento, pré ou pós decremento
var x = 10;
console.log("x -> " + x + "\n++x -> " + (++x) + "\nx++ -> " + (x++) + "\nx -> " + x + "\n--x -> " + (--x) + "\nx-- -> " + (x--) + "\nx -> " + x);

//6) == !=                   Teste de igualdade, teste de desigualdade
console.log("5 == 5 -> " + (5 == 5) + "\n5 == '5' -> " + (5 == '5') + "\n5 != 5 -> " + (5 != '5') + "\n5 != '5' -> " + (5 != '5'));

//7) === !==                 Teste de identidade, tesde não identidade
console.log("5 === 5 -> " + (5 === 5) + "\n5 === '5' -> " + (5 === '5') + "\n5 !== 5 -> " + (5 !== 5) + "\n5 !== '5' -> " + (5 !== '5'));

//8) && ||                   Concatenação lógica 'e', concatenação lógica 'ou'
console.log("true && false -> " + (true && false) + "\ntrue || false -> " + (true || false));

//9) .                       Acessar propriedade de um objeto
var pessoa = new Object();
pessoa.nome = "Ana";
console.log(pessoa);
console.log("pessoa.nome -> " + pessoa.nome);

//10) []                      Indexar arrays
var time = ["Botafogo"];
console.log("time[0] -> " + time[0]);

//11) ()                      Chamar função
var recado = function(){
    return "Volte sempre!";
};
console.log("recado() -> " + recado());

//12) ?:                      Ternário
5 > 2 ? console.log("Argumento 1: true") : console.log("Argumento 2: false");

//13) << >> >>>               Operar bit numérico (bit shifting)
console.log("5 >> 1 -> " + (5 >> 1) + "\n5 << 1 -> " + (5 << 1) + "\n5 >>> 1 -> " + (5 >>> 1));
console.log((5..toString(2)) + " >> " + (1..toString(2)) + " -> " + ((5>>2).toString(2)) + "\n" + (5..toString(2)) + " << " + (1..toString(2)) + " -> " + ((5<<2).toString(2)) + "\n" + (5..toString(2)) + " >>> " + (1..toString(2)) + " -> " + ((5>>>2).toString(2)));

//14) ~                       Operar bit numérico (unário)
console.log("~10 e ~(-10) -> " + ~(10) + " " + ~(-10));

//15) !                       Complemento lógico (unário)
console.log("!true -> " + !true);

//16) & | ^                   Operadores de bit AND, OR e XoR
console.log("5 & 1 -> " + (5 & 1) + "\n" + (5..toString(2)) + " & " + (1..toString(2)) + " -> " + ((5 & 1).toString(2)));
console.log("5 | 1 -> " + (5 & 1) + "\n" + (5..toString(2)) + " | " + (1..toString(2)) + " -> " + ((5 | 1).toString(2)));
console.log("5 ^ 1 -> " + (5 & 1) + "\n" + (5..toString(2)) + " ^ " + (1..toString(2)) + " -> " + ((5 ^ 1).toString(2)));

//17) ,                       Separar valores
var carro, bicicleta, motocicleta;

//18) =                       Atribuir valor
carro = "Ford Focus";

//19) += -= *= /=             Atribuir valor somando, subtraindo, multiplicando, dividindo
console.log("x += y -> x = x + y");
console.log("x -= y -> x = x - y");
console.log("x *= y -> x = x * y");
console.log("x /= y -> x = x / y");

//20) <<= >>= >>>=            Operador de bytes (unário)
var x = 10;
var y = 2;
console.log("x -> " + x + ", y -> " + y);
console.log("x >>= y -> x = x >> y -> " + (x >>= y));

//21) &= |= ^=                Operador de bytes AND, OR e XoR (unário)
console.log("x &= y -> " + (x &= y));

//22) delete                  Tornar indefinida uma propriedade
var meuObj = {
    x: 5,
    y: 7.5,
    z: 10
}
console.log("meuObj.z -> " + meuObj.z);
delete meuObj.z;
console.log("meuObj.z -> " + meuObj.z);

//23) in                      Verificar existência de uma propriedade
console.log("'y' in meuObj -> " + ('y' in meuObj));

//24) instaceof               Verificar o tipo de objeto
var j = function(){
    //...
}

console.log("j instanceof Function -> " + (j instanceof Function));

//25) new                     Criar objeto
var h = new Object();
console.log(h);

//26) typeof                  Retornar o tipo de dado
console.log("typeof boolean -> " + typeof boolean);

//27) void                    Retornar valor indefinido
console.log("3 -> " + 3);
console.log("void 3 -> " + void 3);

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

console.log("-------------------------------------\nTipos de Operandos");
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
*/