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

O método match() retorna as ocorrências da string definida no parâmetro expreg. Esse parâmetro é uma expressão regular supostamente contida na 
string em que se faz a procura. O retorno desse método é um array contendo as ocorrências encontradas.

Para entender o funcionamento desse método, é necessário conhecer as expressões.
*/

var texto6 = "DjkAarstbEc43AfgBhmn";
var sResultado = texto6.match(/[A-E]/gi);

console.log(sResultado);
console.log(sResultado[0]);
console.log(sResultado[5]);

/*
replace(string|expreg, nova_string|função)

O método replace() encontra em uma string a primeira ocorrência da string definida no parâmetro string ou expreg e substitui essa ocorrência 
pela string definida no parâmetro nova_string ou pelo valor retornado pela função definida no parâmetro função.

Ambos os parâmetros desse método são obrigatórios. O primeiro parâmetro é a substring a procurar dentro da string principal e pode ser tanto 
uma substring como uma expressão regular definido a substring e o segundo parâmetro é a string que substituirá as ocorrências encontradas e 
será definida em forma de uma string ou do valor de retorno de uma função.
*/

console.log("Trocar a primeira ocorrência da palavra: Maracujá")
var texto7 = "Sorvete de Maracujá\nSuco de Maracujá\nMousse de Maracujá";
console.log(texto7);
var sResultado2 = texto7.replace('Maracujá', 'Morango');
console.log(sResultado2);

//Exemplo com expressão regular
var sResultado3 = texto7.replace(/Maracujá/g, 'Morango');
console.log(sResultado3);

//Exemplo com expressão regular e função
var sResultado4 = texto7.replace(/[aiueo]/g, function(casou, pos, string){
    switch(casou){
        case 'a':
            return 'α';
        case 'i':
            return 'ι';
        case 'u':
            return 'μ';
        case 'e':
            return 'ε';
        case 'o':
            return 'σ';
    }
});

console.log(sResultado4);

/*
search(expreg)

O método search() retorna a posição da primeira ocorrência do padrão definido no parâmetro expreg. Esse parâmetro é uma expressão regular 
supostamente contida na string em que se faz a procura. Se for fornecido um parâmetro que não seja uma expressão regular, será automaticamente 
transformado em uma com o suo de new RegExp(valor).

Se a string procurada não for encontrada na string pesquisada, o método retornará -1.
*/

var texto8 = "DjkAarstbEc43AfgBhmn";
console.log(texto8.search(/[A-C]/));
console.log(texto8.search('s'));
console.log(texto8.search(/[A-E]/gi));
console.log(texto8.search(/[m-p]/));

/*
slice(início [,fim])

O método slice() permite criar uma nova string resultante da extração de parte de uma string. O parâmetro início indica a posição a partir da 
qual a extração deve começar. O parâmetro opcional fim indica a posição na qual a extração deve parar, e se for omitido, entrende-se que a 
extração deve seguir até o final da string.

O caractere na posição início é incluído na extração, mas aquele na posição fim é excluído, ou seja, uma extração entre as posições 2 e 5 
extrai os caracteres nas posições 2, 3 e 4.

É válido definir um parâmetro fim com sinal negativo e, nesse caso, a contagem para o final da extração se faz de trás para frente na string, 
estando o último caractere na posição -1, o penúltimo na -2, e assim por diante.
*/

var texto9 = "JavaScript é uma linguagem legal.";

function sslice(inicio, fim){
    var inicio = document.form6.inicio.value;
    var fim = document.form6.fim.value;
    if(fim == ''){
        fim = texto9.length+1;
    }
    var resultado = texto9.slice(inicio, fim);
    document.form6.resultado.value = resultado;
};

/*
split([separador] [,limite])

O método split() destina-se a criar um array de substrings extraídas de uma string. Os parâmetros separador e limite são opcionais. O primeiro 
controla o caractere para separar as substrings do array e o segundo é um número inteiro que especifica a quantidade de itens do array. Se o 
parâmetro separador for omitido, o array retornado conterá uma substring somente, igual à string original.

Usar uma string vazia("") como separador resulta em um array constituídos pelos caracteres da strin original separados por vírgula. Usar um espaço em branc(" ") como separador resulta em um array constituído pelas substrings naturais da string original separadas por vírgula.
*/

console.log(texto9.split());
console.log(texto9.split(''));
console.log(texto9.split(' '));
console.log(texto9.split('', 8));
console.log(texto9.split(' ', 2));

/*
substr(início [,comprimento])

O método substr() está em desuso em ECMA-262, prefira os métodos slice() ou substring()...
Cria uma nova string resultante da extração de parte de uma string.
*/

function ssubstr(inicio, fim){
    var inicio = document.form7.inicio.value;
    var comprimento = document.form7.comprimento.value;
    var resultado = texto9.substr(inicio, comprimento);
    document.form7.resultado.value = resultado;
};

/*
substring(indiceA [,indiceB])

O método subtring() é semelhante ao método slice(). Uma das diferenças é o fato de que para esse método, sendo o primeiro parâmetro maior que o 
segundo, há uma inversão automática dos parâmetros e o retorno da substring, e para aquele, uma situação destas retorna uma string vazia.

Este método permite criar uma nova string resultante da extração de parte de uma string. O parâmetro indiceA indica a posição a partir da qual 
a extração deve começar. O parâmetro opcional indiceB indica a posição na qual a extração deve parar, e se for omitido, entende-se que a 
extração deve seguir até o final da string.

O caractere na posição indiceA é incluído na extração, mas aquele na posição indiceB é excluído, ou seja, uma extração entre as posições 2 e 5 
extrai os caracteres nas posições 2, 3 e 4.

Se um dos parâmetros, tanto indiceA como indiceB, for negativo, será considerado como se fosse zero.
Se os parâmetros indiceA e indiceB forem iguais, a substring retornada será vazia.
Se o parâmetro indiceA for maior do que o parâmetro indiceB, haverá troca de posições, isto é,
substring(indiceA, indiceB) == substring(indiceB, indiceA)
*/

function ssubstring(indiceA, indiceB){
    var indiceA = document.form8.indicea.value;
    var indiceB = document.form8.indiceb.value;
    var resultado = texto9.substring(indiceA, indiceB);
    document.form8.resultado.value = resultado;
};

/*
toLowerCase()
O método toLowerCase() retorna uma string igual à string original, mas com todos os seus caracteres em letras minúsculas.
*/
var texto10 = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩ";
var texto11 = "abcdefghijklmnopqrstuvwxyz";

console.log(texto10.toLowerCase());
console.log(texto11.toUpperCase());

/*
valueOf()
O método valueOf() retorna o valor primitivo de um objeto. Esse método é usado pelos mecanismos internos da Javascript, não sendo comum seu uso 
em desenvolvimento.
*/
console.log(texto9.valueOf());

/*
> Métodos HTML para strings

Os métodos HTML para strings fornecem uma maneira de se gerar marcação HTML como container para uma string.
EMBORA AMPLAMENTE SUPORTADO PELOS NAVEGADORES ATUAIS, SEU USO DEVE SER EVITADO, POIS, ALÉM DE GERAR MARCAÇÃO NÃO SEMÂNTICA, EMPREGA ELEMENTOS HTML EM DESUSO E APRESENTA SÉRIAS RESTRIÇÕES À ACESSIBILIDADE.

anchor(nome)
O método anchor() cria um elemento 'a'(âncora) para container da string. O parâmetro nome é obrigatório e define o valor do atributo name do 
elemento.
*/
console.log("\nGERAR MARCAÇÃO HTML NÃO É RECOMENDADO, APENAS PARA FINS DE ESTUDO")
var palavra = "javascript";
console.log(palavra.anchor("js"));


//big()
//O método big() cria um elemento big(font aumentada) para container da string.
console.log(palavra.big());

//bold()
//O método bold() cria um elemento b(negrito) para container da string.
console.log(palavra.bold());

//fixed()
//O método fixed() cria um elemento tt(fonte teletipo ou monoespaçada) para container da string.
console.log(palavra.fixed());

//fontcolor()
//O método fontcolor() cria um elemento font e seu atributo color com valor para a cor definido no parâmetro cor, para container da string. Esse elemento está em desuso
console.log(palavra.fontcolor("#ff0000"));

//fontsize(tamanho)
//O método fontsize() cria um elemento font e seu atributo size com valor para o tamanho da fonte definido no parâmetro tamanho, para container da string. Esse elemento está em desuso.
console.log(palavra.fontsize(7));

//italics()
//O método italics() cria um elemento i(estilo de fonte itálico) para container da string.
console.log(palavra.italics());

//link(url)
//O método link() cria um elemento(link) e seu atributo href com valor definidono parâmetro url, para container da string.
console.log(palavra.link("https://www.javascript.com/"));

//small()
//O método small() cria um elemento small(fonte menor) para container da string.
console.log(palavra.small());

//strike()
//O método strike() cria um elemento strike(texto riscado) para container da string. Esse elemento está em desuso.
console.log(palavra.strike());

//sub()
//O método sub() cria um elemento sub(texto subscrito) para container da string.
console.log(palavra.sub());

//sup()
//O método sup() cria um elemento sup(texto supescrito) para container da string.
console.log(palavra.sup());