/* Strings

> String como tipo de dado
Os literais strings, na sintaxe Javascript, são os conjuntos de zero ou mais caracteres envolvidos por aspas duplas("") ou aspas simples(''). 
String são textos.

> String como objeto
String é um objeto global da linguagem Javascript usado para criar instâncias de strings, que, por sua vez, se destinam a armazenam textos. As 
propriedades e métodos do objeto String permitem manipular os textos nele armazenados.

> Criando Strings
Existem duas sintaxes diferentes para se criar uma string conforme mostrado a seguir:
*/

//- Atribuir a string a uma variável:
var texto1 = "minha string"

//- Com o uso do objeto construtor precedido da palavra-chave new:
var texto2 = new String("minha string")

/*
> Propriedades das strings
As propriedades do objeto String são listadas a seguir: length, constructor e prototype

length
A propriedade length do objeto string destina-se a inspecionar o número de caracteres na string. Inclui espaços em branco e caracteres 
especiais.
*/
function sLength(){
    var s = document.form.texto.value;
    if(s != ''){
        document.form.comprimento.value = s.length;
    }else{
        document.form.texto.value = "Entre uma string";
    }
};


// constructor
// A propriedade constructor é uma referência à função que cria um objeto. 
var texto3 = new String("Minha string");
console.log(texto3.constructor);

/*
prototype
A propriedade prototype permite adicionar novas propriedades e/ou métodos a um objeto já existente. Trata-se de uma propriedade comum a 
todos os objetos e seu emprego para o objeto String é pouco usual. 

> Métodos para strings

charAt(índice)
O método charAt() retorna o caractere da string que ocupa a posição definida no parâmetro índice. O primeiro caractere da string ocupa o índice 0(zero) e o último, o índice igual a string.length-1.
*/

function scharAt(){
    var texto = "mau%\SR=+t$@ 098mu hjor \\\a"; //Uma string qualquer
    var indice = Number(document.form2.indice.value); //O texto do input é salvo na variável, Number transforma para um número
    if(isFinite(indice) && indice >= 0 && indice <= texto.length - 1){ //Se for finito, maior ou igual a 0 e menor que o tamanho possível da string, faça:
        document.form2.resultado.value = texto.charAt(indice); //Exibe no input a posição correspondente passada
    }else{
        console.log("Entre um índice válido."); //Índice passado é negativo ou maior do tamanho da string e  pede um índice válido
    }
};

/*
charCodeAt(índice)

O método charCodeAt() retorna a codificação Unicode da string que ocupa a posição definida no parâmetro índice. O primeiro caractere da string 
ocupa o índice. O primeiro caractere da string ocupa o índice 0(zero) e o último, o índice igual a string.length - 1.
*/

function scharCodeAt(){
    var texto = "mau%\sr=+t$@ 098mu hjor \\\a";
    var indice = Number(document.form3.indice.value); 
    if(isFinite(indice) && indice >= 0 && indice <= texto.length - 1){ 
        document.form3.resultado.value = texto.charCodeAt(indice);
    }else{
        console.log("Entre um índice válido.");
    }
};

/*
concat(string1, string2, ... , stringN)
O método concat() concatena duas ou mais strings definidas nos parâmetros stringsN.
A string resultante é formada pela junção das strings concatenadas. Esse método é não destrutivo, ou seja, as strings a serem reunidas são 
preservadas e uma nova string é criada.
*/

var string_a = "Ouviram ";
var string_b = "do Ipiranga ";
var string_c = "as margens ";
var string_d = "plácidas.";

var string_x = string_a.concat(string_b, string_c, string_d);

console.log(string_x);

/*
fromCharCode(uni1, uni2, ... , uniN)

O método fromCharCode() retorna o caractere cuja codificação Unicode foi definida nos parâmetros uniN. Esse parâmetro pode ser um ou mais 
códigos Unicode separados por vírgula. Vimos anteriormente que método charCodeAt() permite inspecionar a codificação Unicode de um caractere da 
string. Esse método faz a função inversa daquele, isto é, conhecendo-se a codificação Unicode, ele retorna o caractere correspondente

Contudo trata-se de um método estático, ou seja, um método do objeto global String e não um método aplicável a uma string em particular. A 
sintaxe para esta propriedade é mostrada no exemplo a seguir:
*/

var texto4 = String.fromCharCode(74, 97, 118, 97, 83, 99, 114, 105, 112, 116);

console.log(texto4);


/*
indexOf(stringProcurada [,início])

O método indexOf() retorna o índice da primeira ocorrência da string definida no parâmetro stringProcurada. Esse parâmetro é uma substring 
supostamente contida na string em que se faz a procura. Se definimos um caractere como stringProcurada, o método retorna o índice daquele 
caractere e, em consequência, funciona de forma inversa ao méto charAt().

O método é sensível ao tamanho de caixa e se a string procurada não for encontrada na string pesquisada, o índice retornado será -1.
Mas a procura não se restringe a um caractere e pode ser feita para uma substring(sequência de dois ou mais caracteres).

O parâmetro início é opcional e destina-se a definir a partir de qual índice a procura deve ser iniciada. Omitindo esse parâmetro, o 
valor-padrão é o início da string, isto é, índice zero.
*/

function sindexOf(){
    var texto = "JavaScript é uma linguagem muito legal.";
    var s = document.form4.s.value;
    var i = Number(document.form4.i.value);
    if(isFinite(i) && i >= 0 && i <= texto.length - 1){ 
        document.form4.resultado.value = texto.indexOf(s, i);
    }else{
        console.log("Entre um índice válido.");
    }
};

/*
lastIndexOf(stringProcurada [,início])

O método lastIndexOf() retorna o índice da última ocorrência da string definida no parâmetro stringProcurada. Esse parâmetro é uma substring 
supostamente contida na string em que se faz a procura. Se definimos um caractere como stringProcurada, o método retorna o índice desse 
caractere. Havendo mais de um caractere, o índice retornado é o do último na string.

O método é sensível ao tamanho de caixa e se a string procurada não for encontrada na string pesquisada, o índice retornado será -1.
Mas a procura não se restringe a um caractere e pode ser feita para uma substring(sequência de dois ou mais caracteres).

Este método é semelhante ao anterior, com a diferença de que naquele a busca se faz para a primeira ocorrência e neste, para a última.



localeCompare(string)

O método localeCompare() compara duas strings e define a ordem alfabética delas retornando um número negativo, o número 0 ou um número 
positivo. A sintaxe para esse método é mostrada a seguir:
string1.localeCompare(string2)

O valor retornado tem o seguinte significado:
-N(-1) se string1 precede string2 na ordem alfabética;
0 se string1 e string2 possuem a mesma ordem alfabética;
N(1) se string1 e string2 no ordem alfabética.
*/

var texto5 = "México";
console.log(texto5.localeCompare("Brasil"));
console.log(texto5.localeCompare("Uruguai"));
console.log(texto5.localeCompare("méxico"));
console.log(texto5.localeCompare("Mexico"));

/*
Por ser N variável, sugere-se o uso do seguinte script crossbrowser para verificar a ordem alfabética entre duas strings. Esse script 
encontra-se disponível no site do livro e você poderá fazer comparações de ordem alfabética entre strings digitadas em caixas de texto:
*/

function slocalecompare(string2){
    var string1 = document.form5.string1.value;
    var string2 = document.form5.string2.value;
    var resultado = string1.localeCompare(string2);

    if(resultado < 0){
        document.form5.resultado.value = "A string\"" + string1 + "\" precede a string \"" + string2 + "\"";
    }else if(resultado > 0){
        document.form5.resultado.value = "A string\"" + string1 + "\" sucede a string \"" + string2 + "\"";
    }else{
        document.form5.resultado.value = "A string\"" + string1 + "\" é igual à string \"" + string2 + "\"";
    }
};

/*
match(expreg)
*/