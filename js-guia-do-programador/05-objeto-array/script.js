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