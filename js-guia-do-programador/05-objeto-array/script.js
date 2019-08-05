/*
[Objeto Array]

> Fundamentos
Array é um objeto destinado a armazenar uma coleção ordenada de dados indexados sequencialmente a partir de zero. Para criar um array, usamos o 
construtor Array() precedido do operador new, como fizemos para criar objetos.
*/
var meuArray = new Array();

//Para popular um array, passamos uma lista de argumentos ao construtor contendo os dados do array:
var meuArray2 = new Array('casa', 'rio', 5, 'Joinville', 125);

/*
Os dados são denominados elementos do array e a sintaxe para escrita dos elementos segue a sintaxe geral da linguagem(números sem aspas,
strings entre aspas, objetos entre chaves etc.). Os elementos do array devem ser separados com uma vírgula.

A lista de elementos passada ao construtor é ordenada, significando que cada elemento tem seu índice, começando em zero. No nosso exemplo, os 
índices vão de zero a quatro, assim o índice de "casa" é zero e de "joinville" é três. Esse sistema de índice caracteriza um array denominado 
array indexiado.

Para ler qualquer valor de um array indexiado, usamos a sintaxe geral mostrada a seguir:
*/
console.log(meuArray2);
console.log("meuArray2[1] -> " + meuArray2[1]);


//Após criar um array, podemos a qualquer momento alterar um valor existente ou acrescentar novos valores a ele.
meuArray2[5] = 'José'; //Acrescentando um novo dado
meuArray2[2] = 457; //Mudando o valor da terceira posição do array
console.log(meuArray2);

//Arrays podem conter dados do tipo objeto:
var outroArray = new Array('casa', 'rio', {x: 14, y: 'mar'});

//Lendo um dado do tipo objeto contido em um array
console.log(outroArray[2]);
console.log("outroArray[2].x -> " + outroArray[2].x);
console.log("outroArray[2]['y'] -> " +outroArray[2]['y']);

/*
Podemos dizer que array é um objeto de pares ordenados índice/valor, no qual o índice é implícito(não precisa ser declarado), formando um array 
indexado. Existe outro tipo de array denominado array associativo ao qual declaramos implicitamente o par nome/valor.

Outra forma de criar um array é definí-lo vazio e populá-lo posteriormente:
*/
var a = new Array;
a[0] = 3.14159;
a[1] = 'prego';
a[2] = true;
a[3] = 'flor';
a[4] = {nome: 'Maurício', cidade: 'Rio de Janeiro'};

console.log(a);

//Há uma sintaxe alternativa para criar arrays conhecida como sintaxe literal na qual usamos o operador colchetes []
var arr = ['casa', 'rio', 5, {nome: 'Maurício', cidade: 'Rio de Janeiro'}, [3, false, 'amor']];
//Com o uso dessa sintaxe, podemos usar arrays literais aninhadas como elemento do array, como o dado arr[4], que contém o array literal [3, false, 'amor']

console.log(arr);
console.log("arr[2] -> " + arr[2]);
console.log("arr[3].cidade -> " + arr[3].cidade);
console.log("arr[3]['cidade'] -> " + arr[3]['cidade']);
console.log("arr[4][2] -> " + arr[4][2]);

/*
Arrays associativos são aqueles nos quais cada dado é referenciado não por um índice numérico, mas por um nome. A cada dado do array se atribui 
explicitamente um nome(string), de livre escolha, para o lugar do número implícito. O nome escolhido é uma chave e, assim, um array associativo 
é constituído de pares chave/valor.
*/
var arrAssociativo = {time: 'Botafogo', estado: 'RJ', pais: 'Brasil', estadio: 'Nilton Santos'};
console.log("arrAssociativo.time -> " + arrAssociativo.time);
console.log("arrAssociativo['estadio'] -> " + arrAssociativo['estadio']);


/*
> Propriedades do objeto Array
As propriedades do objeto Array são listada a seguir: constructor, prototype e length.

construtor
*/
var arr2 = [3, 'a', 6, 4, 'd', 'e'];
console.log(arr2.constructor);

/*
prototype
A propriedade prototype permite adicionar novas propriedades e/ou métodos a um objeto existente.
Trata-se de uma propriedade comum a todos os objetos e seu emprego para o objeto Date é pouco usual.

length
A propriedade length retorna a quantidade de elementos de um array:
*/
var arr3 = new Array(1, 2, 3, 'a', 'b', 'c', {nome: 'Helen', idade: 33});
console.log("arr3.length -> " + arr3.length);

/*
> Métodos do objeto Array

Os métodos do objeto Array são descritos a seguir:
    concat()            every()             filter()            forEach()
    indexOf()           lastIndexOf()       join()              map()
    pop()               push()              reduce()            reduceRight()
    reverse()           shift()             slice()             some()
    sort()              splice()            toLocaleString()    toString()
    unshift()
*/

//concat(arg1, arg2, ... , argn)
var paises = ['Brasil', 'Uruguai'];
console.log(paises);
paises = paises.concat('Argentina', 'Paraguai'); //Acrescenta novos valores em um array
console.log(paises);

/*
every(função(elem, ind, obj) [,thisObjeto])

Este método destina-se a percorrer cada um dos elementos de um array e executar uma função callback. Assim que a função encontra um elemento 
que não satisfaça as condições impostas no corpo da função, retorna false. Caso todos os elementos do array satisfaçam a função, retorna true. 
Não altera o array orignal e admite um argumento obrigatório, que é uma função callback, e um argumento opcional.

A função é executado para cada um dos elementos do array e o valor retornado é true ou false. A função requer três argumentos que representam, 
respectivamente, o valor de cada elemento do array, o índice de cada elemento e o objeto Array sendo percorrido.

O argumento opcional thisObjeto define um objeto a ser usado como this na função callback. Se for omitido, é usado o objeto global sendo 
percorrido.
*/
function funcaoUm(elem, ind, obj){
    return (typeof elem == 'string');
}

var x = paises.every(funcaoUm);
console.log(x);

/*
filter(função(elem, ind, obj) [,thisObjeto])

Este método destina-se a filtrar elementos em um array e retornar o array após aplicação do filtro. Não altera o array original e admite um 
argumento obrigatório, que é uma função de filtragem, e um argumento opcional.

A função de filtragem é executada para cada um dos elementos do array e o valor retornado é inserido em um novo array que se constitui no array 
resultado da aplicação do filtro. A função requer três argumentos que representam, respectivamente, o valor de cada elemento do array, o índice 
de cada elemento e o objeto Array sendo filtrado.

O argumento opcional thisObjeto define um objeto a ser usado como this na função de filtragem. Se for omitido, será usado o objeto global sendo 
filtrado.
*/

//Exemplo 1
var array_a = [21, 3, 18, 'a', 290, 'b', 7];
console.log(array_a);

function filtrarArray(elem, ind, obj){
    return (elem >= 18);
};
console.log("elem >= 18 -> " + array_a.filter(filtrarArray));

//Exemplo 2
function filtrarArray2(elem, ind, obj){
    return (typeof elem == 'string');
};
console.log("typeof elem == 'string' -> " + array_a.filter(filtrarArray2));

//Exemplo 3
function filtrarArray3(elem, ind, obj){
    return (ind < 4);
};
console.log("ind < 4 -> " + array_a.filter(filtrarArray3));


/*
forEach(função(elem, ind, obj) [,thisObjeto])

Este método destina-se a percorrer cada um dos elementos de um array e executar uma função callback. Não altera o array original e admite um 
argumento obrigatório, que é uma função callback, e um argumento opcional.

A função é executada para um dos elementos do array e o valor retornado é inserido em um novo array que se constitui no array resultado da 
aplicação da função. A função requer três argumentos que representam, respectivamente, o valor de cada elemento do array, o índice de cada 
elemento e o objeto Array sendo percorrido.

O argumento opcional thisObjeto define um objeto a ser usado como this na função callback. Se for omitido, será usado o objeto global sendo 
percorrido.
*/
var array_b = [21, 3, 18, 'a', 290];
var msg = "";

function funcaoDois(elem, ind, obj){
    msg += "array_b[" + ind + "] = " + elem + "\n";
};
array_b.forEach(funcaoDois);
console.log(msg);

/*
indexOf(elemento, [arg2, true ou false])

Este método foi criado e inspirado no método de mesmo nome para Strings. Retorna o 
índice do elemento de um array. Admite um argumento obrigatório, que é o elemento do 
array cujo índice desejamos saber, Caso o elemento não exista no array, retorna -1.

A busca do índice no array se faz levando em conta o tipo de dado, ou seja, o 
argumento elemento deve ser um dado do mesmo tipo do dado do array. Por exemplo: 
indexOf('9') busca somente string 9 e indexOf(9), somente o número 9.
*/

var array_c = [1, 2, 'a', 'b', '2', 'c', 1, 'a', '45'];
var a1 = array_c.indexOf('b'); //Retorna 3
var a2 = array_c.indexOf('a'); //Retorna 2
var a3 = array_c.indexOf(23); //Retorna -1
var a4 = array_c.indexOf(2); //Retorna 1
var a5 = array_c.indexOf(45); //Retorna -1
console.log(array_c);

console.log(a1);
console.log(a2);
console.log(a3);
console.log(a4);
console.log(a5);

//O segundo argumento deste método é facultativo e, quando definido, estabelece o índice do elemento do array a partir do qual (inclusive) deverá iniciar=se a busca.

var b1 = array_c.indexOf(1); //Retorna 0
var b2 = array_c.indexOf(1, 2); //Retorna 6

console.log(b1);
console.log(b2);

//O terceiro argumento deste método é facultativo e admite os booleanos true ou false, sendo false o valor padrão. Quando definido true, faz a busca sem diferenciar o tipo de dado.

var c1 = array_c.indexOf(45);
var c2 = array_c.indexOf(45, 0, true);

console.log(c1);
console.log(c2); //Não suportado


/*
lastIndexOf(elemento, [arg2, true ou false])

Este método também foi inspirado no método de mesmo nome para Strings. Retorna o índice do elemento de um array, admite os mesmos argumentos do 
método indexOf(), mas a única diferença em relação a ese método é que retorna o último índice do elemento procurado caso haja mais de um. Caso 
o elemento não exista no array, retorna -1.
*/

var d1 = array_c.indexOf('a'); //Retorna 2
var d2 = array_c.lastIndexOf('a'); //Retorna 7

console.log(d1);
console.log(d2);

/*
join([arg])

Este método transforma os elementos de um array em uma string. Admite um argumento opcional que se destina a criar um separador para os elementos do array. Se não for especificado o argumento, o separador adotado por padrão é a vírgula(,).
*/
var e1 = paises.join();
var e2 = paises.join(' - ');

console.log(e1);
console.log(e2);

/*
map(função(elem, ind, obj) [,thisObjeto])

Este método destina-se a percorrer cada um dos elementos de um array e modificá-lo conforme definido em uma função callback. Não altera o array original e admite um argumento obrigatório, que é uma função callback, e um argumento opcional.

A função é executada para cada um dos elementos do array e o valor retornado é inserido em um novo array. A função requer três argumentos que representam respectivamente, o valor de cada elemento do array, o índice de cada elemento e o objeto Array sendo percorrido.

O argumento opcional thisObjeto define um objeto a ser usado como this na função callback. Se for omitido, será usado o objeto global sendo percorrido.
*/

var array_d = [21, 3, 18, 290];
function funcaoTres(elem, ind, obj){
    return (elem = elem * 10);
};
var f1 = array_d.map(funcaoTres);
console.log(array_d);
console.log(f1);

//pop()
//Este método remove o último elemento de um array e retorna o valor que foi removido
var array_e = [1, 2, 'a', 'b'];
console.log(array_e);

var g1 = array_e.pop();

console.log(g1);
console.log(array_e);
console.log(array_e.length);

//push(arg1, arg2, ... , argn)
//Este método acrescenta os argumentos no final de um array e retorna a nova quantidade de elementos do array
var g2 = array_e.push(5, 6, 7, 'm');
console.log(array_e);
console.log(g2);

/*
reduce(função(v1, v2, ind, arr)[,vInicial])

Este método destina-se a percorrer cada um dos elementos de um array e executar uma função callback. Não altera o array original e admite um 
argumento obrigatório, que é uma função callback, e um argumento opcional definido um valor inicial.

A função é executada para cada um dos elementos do array e é retornado um valor único resultante da aplicação da função sucessivamente para 
cada elemento do array.

A função requer quatro argumentos que denominaremos, respectivamente, de v1(valor anterior), v2(valor corrente), ind(índice de cada elemento) e 
arr(o objeto Array sendo percorrido).

Se for especificado o argumento opcional valorInicial, o valor v1 será igual a ele e o valor v2, igual ao valor do primeiro elemento do array. 
Se não for especificado o argumento opcional valorInicial, o valor v1 será igual ao valor do primeiro elemento do array e o v2, igual ao valor 
do segundo elemento do array.

Exemplo 1)
*/

var array_f = [1, 4, 7, 15];
funcaoQuatro = function(v1, v2, ind, arr){
    return v1 + v2;
};
console.log(array_f);

var h1 = array_f.reduce(funcaoQuatro);
console.log(h1);

/*
A função será chamada para cada elemento do array e retornará o seguinte. Note que para cada chamada da função, v1 é o valor anterior e v2, o valor corrente.
- Primeira chamada: v1 = 1 e v2 = 4, retornando 1 + 4 = 5
- Segunda chamada: v1 = 5 e v2 = 7, retornando 5 + 7 = 12
- Terceira chamada: v1 = 12 e v2 = 15, retornando 12 + 15 = 27

Exemplo 2)
*/
var h2 = array_f.reduce(funcaoQuatro, 100);
console.log(h2);

/*
Nesse exemplo, definimos o valorInicial igual a 100 e a função retorna o valor como mostrado a seguir:
- Primeira chamada: v1 = 100 e v2 = 1, retornando 100 + 1 = 101 
- Segunda chamada: v1 = 101 e v2 = 4, retornando 101 + 4 = 105
- Terceira chamada: v1 = 105 e v2 = 7, retornando 105 + 7 = 112
- Quarta chamada: v1 = 112 e v2 = 15, retornando 105 + 7 = 127


reduceRight(função(v1, v2, ind, arr)[,vInicial])

Este método destina-se a percorrer cada um dos elementos de um array e executar uma função callback. Funciona de modo semelhante ao método reduce(), com a diferença que a função callback percorre o array do último para o primeiro elemento. Não altera o array original e admite um argumento obrigatório, que é uma função callback, e um argumento opcional definindo um valor inicial.

A função é executada para cada um dos elementos do array e é retornado um valor único resultante da aplicação da função sucessivamente para cada elemento do array.

A função requer quatro argumentos que denominanaremos, respectivamente, de v1(valor anterior), v2(valor corrente), ind(índice de cada elemento) e arr(o objeto Array sendo percorrido).

Se for especificado o argumento opcional valorInicial, o valor v1 será igual a ele e o valor v2, igual ao valor do último elemento do array. Se não for especificado o argumento opcional valorInicial, o valor v1 será igual ao valor do último elemento do array e o v2, igual ao valor do penúltimo elemento do array.

Exemplo 1)
*/
var h3 = array_f.reduceRight(funcaoQuatro);
console.log(h3);

/*
A função será chamada para cada elemento do array e retornará o seguinte. Note que para cada chamada da função, v1 é o valor anterior e v2, o valor corrente.
- Primeira chamada: v1 = 15 e v2 = 7, retornando 15 + 7 = 22
- Segunda chamada: v1 = 22 e v2 = 4, retornando 22 + 4 = 26
- Terceira chamada: v1 = 26 e v2 = 1, retornando 26 + 1 = 27

Exemplo 2)
*/
var h4 = array_f.reduce(funcaoQuatro, 100);
console.log(h4);

/*
Nesse exemplo, definimos o valorInicial igual a 100 e a função retorna o valor como mostrado a seguir:
- Primeira chamada: v1 = 100 e v2 = 15, retornando 100 + 15 = 115 
- Segunda chamada: v1 = 115 e v2 = 7, retornando 115 + 7 = 122
- Terceira chamada: v1 = 122 e v2 = 4, retornando 122 + 4 = 126
- Quarta chamada: v1 = 126 e v2 = 1, retornando 126 + 1 = 127


reverse()
Este método inverte a ordem dos elementos de um array. Não cria um novo array com os elementos invertidos, e, sim, altera o array existente:
*/
var array_g = [15, 'Itália', true, 3.1415, {nome: 'Alan', idade: 41}];
console.log(array_g);
console.log(array_g.reverse());
/*
shift()
Este método remove o primeiro elemento de um array e retorna o valor que foi removido:
*/
var i1 = array_g.shift();
console.log(i1);
console.log(array_g);

/*
slice(arg1 [,arg2])

Este método retorna um subarray do array. Admite um ou dois argumentos que definem o índice inicial e o final do subarray a extrair.

As diretrizes de extração do subarray são:

- o subarray extraído contém o elemento definido no índice inicial(arg1), mas não o elemento definido no índice final(arg2);
- se for definido apenas um índice(arg1), o subarray extraído começa com o elemento de índice arg1 inclusive e vai até o último elemento;
- argumentos negativos revertem o início de contagem do índice para o último elemento, ou seja, -1 é o último elemento, -2, o penúltimo, e assim por diante.
*/

var array_h = [1, 2, true, false, 'a', 'b', 7.2, 15.9];
var j1 = array_h.slice(2, 5);
var j2 = array_h.slice(3);
var j3 = array_h.slice(-5, 6);
var j4 = array_h.slice(-6, -4);

console.log("---------------------------");
console.log(array_h);
console.log(j1);
console.log(j2);
console.log(j3);
console.log(j4);