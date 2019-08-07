/**
 * > Funções
 * 
 * Função é um bloco de código capaz de realizar ações, como efetuar uma cálculo numérico ou manipular dados e retornar um valor para o 
 * programa principal. 
 * 
 * O bloco de código que constitui a função é denominado de corpo da função e, com o uso de sintaxe apropriada, criamos uma referência à função
 * atribuindo-lhe um nome ou uma variável para representá-la.
 * 
 * Uma vez criada a referência, ou seja, nomeada a função, podemos inseri-la em diferentes locais do programa, fazendo uso do seu nome, sem 
 * necessidade de repetir todo o corpo da função. O ato de inserir a referência a uma função no programa é conhecido como "chamar a função". 
 * Uma função é um exemplo de reutilização inteligente de código.
 * 
 * Contudo, repetição de código não é a única justificativa para criar funções. Criamos funções, também, com a finalidade de dar maior 
 * legibilidade ao programa e facilitar a manutenção. Em programas longos, é comum optar pela criação de um arquivo único contendo todas as 
 * funções utilizadas no script.
 * 
 * > Criando funções
 * 
 * Existem três sintaxes diferentes para se criar funções em Javascript.
 */

//Com o uso de declaração function
function minhaFuncao(){

};

//Com o uso do objeto construtor precedido da palavra-chave new
var minhaFuncao2 = new Function();

//Com o uso da sintaxe literal
var minhaFuncao3 = function(){

};

/**
 * > Declarar function
 * 
 * Funções criadas com o uso dessa sintaxe são denominadas funções estáticas.
 */

function ola(){
    console.log("Bem-vindo ao site.");
};

ola();

function ola2(){
    var nomeVisitante = prompt("Digite seu nome: ", "");
    nomeVisitante = (nomeVisitante) ? nomeVisitante : "Anônimo";
    console.log("Bem-vindo ao site: " + nomeVisitante);
};

ola2();

function calculaRetangulo(){
    var area = (7 * 4);
    var perimetro = (7 + 4) * 2;
    console.log("Área: " + area + "\nPerímetro: " + perimetro);
};

calculaRetangulo();

/**
 * Não há valor prático algum em desenvolver uma função para efetuar um cálculo baseado em dados imutáveis. O interessante seria desenvolver 
 * uma função capaz de efetuar o cálculo da área e perímetro de qualquer retângulo cuja base e altura fossem fornecidos.
 * 
 * Aqui entram em cena os argumentos de uma função...
 */

function calculaRetangulo2(b, h){
    var area = (b * h);
    var perimetro = (b + h) * 2;
    console.log("Área: " + area + "\nPerímetro: " + perimetro);
};

calculaRetangulo2(5, 10); //Lembrando que podemos também fazer que o usuário informe os argumentos

/**
 * > Function()
 * 
 * O construtor Function() é nativo da linguagem e destina-se a criar um objeto função.
 * var minhaFuncao = new Function(["arg1", "arg2", ... , "argn"], "corpo da função");
 * 
 * Ao construtor Function() é passada uma lista de strings que são os argumentos da função. A última string é o corpo da função e os argumentos 
 * anteriores são opcionais. A função é armazenada em uma variável definida pelo desenvolvedor.
 * 
 * Funções declaradas com o uso dessa sintaxe são denominadas funções anônimas e dinâmicas.
 */

var ola3 = new Function(console.log("Bem-vindo ao nosso site."));
console.log(ola3);
ola3();

var ola4 = new Function("var nomeVisitante = prompt('Por favor, digite seu nome: ', '');" +
    "nomeVisitante = (nomeVisitante) ? nomeVisitante : 'Visitante';" +
    "console.log('Bem-vindo ao nosso site: ' + nomeVisitante);"
);

ola4();

var calculaAreaRetangulo = new Function("return b * h;");

console.log(calculaAreaRetangulo(b = 10, h = 4));

/**
 * > Sintaxe Literal
 * 
 * Funções criadas com a sintaxe literal são também conhecidas como funções expressões. É armazenada em uma variável defina pelo desenvolvedor.
 * Funções declaradas com o uso dessa sintaxe são denominadas funções anônimas.
 */

var ola5 = function(){
    return "Bem-vindo ao meu site.";
};

console.log(ola5());

var ola6 = function(){
    var nomeVisitante = prompt("Nome: ", "");
    nomeVisitante = (nomeVisitante) ? nomeVisitante : "Curioso";
    return "Bem-vindo " + nomeVisitante;
};

console.log(ola6());

var calculaAreaRetangulo2 = function(b, h){
    return b * h;
};

calculaAreaRetangulo2(8, 7);


//> Retornando mais de um valor
function calculaRetangulo3(b, h){
    var area = b * h;
    var perimetro = (b + h) * 2;
    return area;
    return perimetro; //Não vai funcionar
};

function calculaRetangulo4(b, h){
    var area = b * h;
    var perimetro = (b + h) * 2;
    return [area, perimetro];
};

var resultados = calculaRetangulo4(3, 8);
console.log(typeof resultados);
console.log(resultados);
console.log(resultados[0]);

//> Retornando objeto
function calculaRetangulo5(b, h){
    var area = b * h;
    var perimetro = (b + h) * 2;    
    return {
        a: area,
        p: perimetro
    };
};

var resultados2 = calculaRetangulo5(8, 4);
console.log(typeof resultados2);
console.log(resultados2);
console.log(resultados2['a']);

//Passagem por referência
var referencia = calculaRetangulo5;
console.log(referencia(2, 6));


/**
 * > Escopo de uma Função
 * 
 * O corpo de uma função cria um escopo local para variáveis nele declaradas com o uso da palavra-chave var. Além disso, os argumentos de uma 
 * função também pertencem ao escopo local. Tais variáveis e os argumentos pertencem ao escopo da função e não podem ser acessados fora dela.
 * 
 * As variáveis declaradas fora do corpo de uma função, usem ou não a palavra-chave var, pertencem ao escopo global e pode ser acessadas de 
 * qualquer lugar do script, inclusive de dentro do corpo das funções.
 */

function testeEscopo(){
    var soma = 2 + 6;
    console.log("A soma é: " + soma);
};
testeEscopo();

try{
    console.log("O dobro da soma é: " + (2 * soma));
}catch(e){
    console.log(e.message);
}

function testeEscopo2(){
    soma2 = 2 + 6;
    console.log("A soma é: " + soma2);
};
testeEscopo2();

try{
    console.log("O dobro da soma é: " + (2 * soma2));
}catch(e){
    console.log(e.message);
}

//Como regra geral, para evitar resultados inesperados, adote a prática de sempre declarar as variáveis com o uso da palavra-chave var.


/**
 * > Closures
 * 
 * Closure é uma espécie de cenário em um script, criado quando ocorrem determinadas situações em geral com relação ao posicionamento de 
 * funções. A tradução para a palavra inglesa closure é clausura, que, em português, significa ambiente fechado, confinamento. Genericamente, a 
 * ideia central de um closure é exatamente a de confinamento de uma função dentro de uma outra.
 * 
 * Vimos anteriormente o conceito de escopo de uma função. De acordo com tal conceito, podemos concluir que uma função interna pertence ao 
 * escopo da função na qual foi definida e não poderá ser chamada fora dela. Bem, a verdade é que ao contrário de outras linguagens de 
 * programação nas quais funções internas funcionam somente dentro das funções nas quais foram inseridas, em Javascript existem mecanismos de 
 * escape para funções internas.
 */

function funcaoExterna(){
    console.log("Função Externa");
    function funcaoInterna(){
        console.log("Função Interna");
    };
};

funcaoExterna();
//funcaoInterna(); //Não será executado (funcaoInterna is not defined)

function funcaoExterna2(){
    console.log("Função Externa 2");
    function funcaoInterna2(){
        console.log("Função Interna 2");
    };
    funcaoInterna2();
};

funcaoExterna2();

/**
 * A linguagem Javascript prevê mecanismos capazes de fazer as funções internas escaparem de closures e serem executadas fora delas.
 * 
 * Uma maneira de escape é criar uma referência global para a função interna. Fazendo uma chamada para a função externa, modificamos a variável 
 * global e, após a chamada, a função interna encontra-se disponível no escopo global.
 */
var variavelGlobal;

function funcaoExterna3(){
    console.log("Função Externa 3");
    function funcaoInterna3(){
        console.log("Função Interna 3");
    };
    variavelGlobal = funcaoInterna3;
};

funcaoExterna3();
variavelGlobal();

//Outro mecanismo para escape de closure faz uso da declaração return para funções e consiste em fazer a função externa retornar a interna

function funcaoExterna4(){
    console.log("Função Externa 4");
    function funcaoInterna4(){
        console.log("Função Interna 4");
    };
    return funcaoInterna4;
};
var referenciaFuncao = funcaoExterna4();

referenciaFuncao();

/*Um exemplo clássico relacionado a closures e, consequentemente, envolvendo escopo de variáveis ocorre quando criamos uma função para ser executada dentro de um loop.

window.onload = function(){
    var botao = document.getElementsByTagName('button');
    //O script Não vai funcionar, qualquer que seja o botão clicado a mensagem na caixa de alerta será sempre: "Você clicou no botão 6". Isso 
    //ocorre porque o escopo de definição da variável i é o loop e ela vai sendo atualizada dentro desse escopo até o valor final do loop.
    for(var i = 0; i < botao.length; i++){
        botao[i].onclick = function(){
            alert("Você clicou o botão " + i);
        };
    } 
};*/

window.onload = function(){
    var botao = document.getElementsByTagName('button');
    function funcaoAuxiliar(j){
        return function(){
            alert("Você clicou o botão " + j);
        }; 
    };
    for(var i = 0; i < botao.length; i++){
        botao[i].onclick = funcaoAuxiliar(i);
    }
};

//Agora escapamos da closure e o alerta retornará o índice de cada botão clicado.

/**
 * > Funções Globais
 * 
 * Em Javascript, denominam-se funções globais as que não estão associadas a um objeto particular da linguagem.
 * 
 * encodeURI(uri)
 * Destina-se a reescrever um URI(Uniform Resource Identifier) substituindo alguns caracteres especiais por sua codificação UTF-8 e 
 * transformando essa codificaçao em uma sequência hexadecimal escapada de um, dois ou três bytes da forma %xx.
 * 
 * O argumento uri é uma string contendo o URI a ser codificado. Codificar um URI pode ser necessário quando dados são passados por ele. A 
 * maioria dos navegadores modernos faz a conversão automaticamente, mas em determinadas situações uma aplicação poderá requerer a codificação.
 * 
 * Os seguintes caracteres não são codificados: ; , / ? : @ & = + $ - _ . ! ~ * ' ( ) #.
 */

var uri = "http://maujor-lição um css.php?cap=um&item=um";
var uriCodificada = encodeURI(uri);
console.log(uriCodificada);

//Note que os sinais : // - ? = & não foram codificados, enquanto a letra acentuada ç foi codificada como %C3%A7, a letra ã, como %C3%A3, e o espaço, como %20. Também não são codificados os caracteres alfanuméricos.

//decodeURI(uri)
//Destina-se a recuperar um URI que tenha sido codificado com a função encodeURI(uri).
var uriCodificada2 = "http://maujor-li%C3%A7%C3%A3o%20um%20css.php?cap=um&item=um";
var uri2 = decodeURI(uriCodificada2);
console.log(uri2);

//encodeURIComponent(uri)
//Esta função é semelhante à função encodeURI(), com a diferença de que se destina a codificar partes de um URI e também codifica alguns dos caracteres não codificados por tal função.
//Os seguintes caracteres não são codificados - _ . ! ~ * ' ( )
var uri3 = "http://maujor-lição um css.php?cap=um&item=um";
var uriCodificada3 = encodeURIComponent(uri3);
console.log(uriCodificada3);

//decodeURIComponent(uri)
//Destina-se a reecuperar um URI que tenha sido codificado com a função encodeURIComponent(uri).
var uriCodificada4 = "http%3A%2F%2Fmaujor-li%C3%A7%C3%A3o%20um%20css.php%3Fcap%3Dum%26item%3Dum";
var uri4 = decodeURIComponent(uriCodificada4);
console.log(uri4);

/**
 * escape(string)
 * Destina-se a codificar uma string substituindo alguns caracteres especiais por sua codificação UTF-8 e transformando essa codificação em uma
 * sequência hexadecimal escapada de um, dois ou três bytes da forma %xx. Os seguintes caracteres não são codificados * @ - _ + . /
 * 
 * Esta função, bem como a função unescape(), que tem a finalidade inversa, foi removida da ECMAScript v3. Quando for necessário codificar uma
 * string, use as funções mostradas anteriormente.
 * 
 * 
 * eval(string)
 * Destina-se a executar o script inserido no argumento código. Esse argumento é uma string contendo um código Javascript. O uso desta função 
 * deve ser considerado com muito cuidado, pois proporciona meios de se servir, com relativa facilidade, código malicioso. O consenso é que se 
 * evite o uso desta função. Contudo, é certo que existem situações em que seu uso pode e deve ser considerado, como em uma interface para 
 * ensino da linguagem, com a finalidade de agilizar a interação do aluno com a interface de aprendizado.
 */
function executarEval(){
    eval("x = 3; y = 4; var soma = x + y; console.log(soma);");
};

executarEval();

/**
 * isFinite(valor)
 * Destina-se a testar um valor passado como argumento da função.
 * 
 * Esta função retorna os booleanos true caso valor seja um número ou false caso contrário. Valores iguais a -Infinito e +Infinito retornam 
 * false.
 */

function ehFinito(x){
    eval("var bool = isFinite(x); console.log(bool);");
};

console.log("----------");
ehFinito(1.56);
ehFinito(-3/5);
ehFinito('teste');
ehFinito('20/04/1999');
ehFinito(0);
ehFinito(+3/0);
ehFinito(-5/0);


/**
 * isNaN(valor)
 * Destina-se a testar um valor passado como argumento da função.
 * 
 * Esta função tem comportamento contrário ao da função anterior isFinite(). Retorna os booleanos true caso valor não seja um número ou false 
 * caso contrário. Valores iguais a -Infinito e +Infinito retornam false.
 */

function naoEhNumero(x){
    eval("var bool = isNaN(x); console.log(bool);");
};

console.log("----------");
naoEhNumero(-3/5);
naoEhNumero(1.56);
naoEhNumero('teste');
naoEhNumero('20/04/1999');
naoEhNumero(0);
naoEhNumero(+3/0);
naoEhNumero(-5/0);

/**
 * Number(valor)
 * Destina-se a converter em um número o valor passado como argumento da função.
 * 
 * Não sendo possível fazer a conversão, o valor retornado pela função é NaN(Not a Number)
 */
function numero(x){
    eval("var num = Number(x); console.log(num);");
};

console.log("----------");
numero(-3/5);
numero(1.56);
numero('teste');
numero(new Date());
numero(0);
numero(+3/0);
numero(-5/0);

//A conversão de datas em número com o uso desta função resulta no número de milissegundos transcorridos desde 01 de Janeiro de 1971 às 00:00h UTC até a data constante do argumento da função.

/**
 * parseFloat
 * Destina-se a converter em um número a string passada como argumento da função. Admite um argumento opcional que é a base na qual o número 
 * deverá ser retornado. Omitindo-se esse argumento, a conversão é feita para a base 10.
 * 
 * Caso a string não comece com um número, o valor retornado pela função é NaN(Not a Number) e a conversão não pode ser feita.
 * A função percorre a string até que seja encontrado um caractere que não seja parte válida de um número.  
 */

function numero2(x){
    eval("var s = parseFloat(x); console.log(s);");
};

console.log("----------");
numero2('10.7');
numero2('xpto97');
numero2('34maujor670');
numero2('20/5/2010');
numero2('45 33');
numero2('5345h94');
numero2('64#545');

/**
 * parseInt(string [,base])
 * Destina-se a converter em um número inteiro a string passada como argumento da função. Admite um argumento opcional, que é a base na qual o 
 * número deverá ser retornado. Omitindo-se esse argumento, a conversão é feita para a base 10.
 * 
 * Caso a string não comece com um número, o valor retornado pela função é NaN(Not a Number) e a conversão não pode ser feita.
 * 
 * A função percorre a string até que seja encontrado um caractere que não seja parte válida de um número na base especificada. Encontrado tal 
 * caractere, a função retorna o número inteiro.
 */

function numero3(x){
    eval("var s = parseInt(x); console.log(s);");
};

console.log("----------");
numero3('10.7');
numero3('xpto97');
numero3('34maujor670');
numero3('20/5/2010');
numero3('45 33');
numero3('5345h94');
numero3('64#545');

//String(valor)
//Destina-se a converter em string o valor passado como argumento da função.
function string(x){
    eval("var s = String(x); console.log(s);");
};

console.log("----------");
string('10.7');
string('xpto97');
string('34maujor670');
string('20/5/2010');
string('45 33');
string('5345h94');
string(64);
console.log("----------");

/**
 * > Propriedades das Funções
 * ~ arguments
 *      ~ arguments.length
 *      ~ arguments.calle
 * ~ length
 * ~ constructor
 * ~ prototype
 * 
 * 
 * arguments
 * A variável local arguments de uma função é um objeto assemelhado a um array contendo os argumentos passados para a função. Não deve ser 
 * tratada como um array puro, pois não suporta os métodos e propriedades dos arrays, exceto length. Contudo, como veremos adiante, existem 
 * mecanismos capazes de transformar o objeto arguments em um array puro.
 * 
 * O objeto, assemelhado ao array, contém os argumentos da função, indexados a partir de zero. Assim, podemos fazer referência a um argumento 
 * da função com a sintaxe para arrays. Convém ressaltar que arguments existe somente a partir do momento que a função é chamada até o término 
 * de sua ação e está acessível somente no corpo da função. Tentar acessar arguments fora da função resulta em erro.
 */

function calcular(x, y, z){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
    return (x * y)/z;
};

var resultado = calcular(15, 3, 5);
console.log(resultado);

//arguments.length
//A propriedade length do objeto arguments retorna a quantidade de argumentos da função.
function calcular2(x, y, z){
    console.log(arguments.length);
    return (x * y)/z;
};

var resultado2 = calcular2(4, 8, 6);

/**
 * arguments.callee
 * A propriedade callee do objeto arguments fornece um mecanismo para chamar uma função anônima dentro de si mesma, ou seja, permite que se 
 * faça referência a uma função anônima sem ter que criar um nome para ela.
 * 
 * Chamar uma função dentro de si mesma é conhecido como mecanismo recursivo e diz-se que se trata de uma função recursiva.
 * 
 * A recursão é o processo pelo qual passa um certo procedimento quando um dos passos do procedimento em questão envolve a repetição completa 
 * deste mesmo procedimento. Um procedimento que se utiliza da recursão é dito recursivo. Também é dito recursivo qualquer objeto que seja 
 * resultado de um procedimento recursivo.
 * 
 * O exemplo clássico de recursividade é a função para cálculo do fatorial de um número natural. A matemática define como fatorial de um número 
 * o produto dos números menor que ou igual a n. O símbolo que indica fatorial é um ponto de exclamação logo após o número. Por exemplo: 5! 
 * indica o fatorial do número 5 que é igual a 120, pois 1 x 2 x 3 x 4 x 5 = 120. Por definição, 0! = 1
 * 
 * Note que:
 * 5! = 5 x 4! = 5 x 4 x 3! = 5 x 4 x 3 x 2! = 5 x 4 x 3 x 2 x 1! = 5 x 4 x 3 x 2 x 1 = 120
 * 
 * n! = n(n - 1)(n - 2)(n - 3) ... 1, que é o resultado da multiplicação sucessiva(recursiva) de um número pelo seu antecedente.
 */

 
var fatorial = function(n){
    if(n == 0){
        return 1;
    }
    return n * fatorial(n - 1);
};
console.log(fatorial(5));


var fatorial = function(n){
    if(n == 0){
        return 1;
    }
    return n * arguments.callee(n - 1);
};
console.log(fatorial(5));
console.log(fatorial(456));

/*
Note que o fatorial de 456 resultou em Infinity. Isso porque a faixa de números manipuláveis pelo interpretador Javascript está compreendida
entre:
 
-1.7976931348623157E+308 e +1.7976931348623157E+308
 
 
length
A propriedade length objeto função destina-se a inspecionar o número de argumentos esperados pela função. Difere da propriedade 
arguments.length porque esta retorna o número de argumentos passados para a função e ela, o número de argumentos esperados pela função.
Além disso, só existe no corpo da função e aquela pode ser acessada fora da função. O exemplo a seguir esclarece essa propriedade e a 
diferença entre as duas propriedades:
*/

function soma(x, y){
    console.log(arguments.length);
    return x + y;
};

console.log(soma(15, 5));



/* constructor
A propriedade constructor é uma referência à função que cria um objeto. No exemplo a seguir, criamos um objeto chamado Cilindro e a caixa de 
alerta retorna a função. */

function Cilindro(r, h){
    this.raioBase = r,
    this.altura = h
};

cilindroUm = new Cilindro(2, 5);
cilindroUm.constructor;

// prototype
// A propriedade prototype permite adicionar novas propriedades e/ou métodos a um objeto já existente. O exemplo a seguir exclarece a propriedade:

function Cilindro(r, h){
    this.raioBase = r,
    this.altura = h
};

Cilindro.prototype.cor = 'null';
Cilindro.cor = 'Azul';

console.log(Cilindro.cor);

/**
 * > Métodos para Funções
 * Os métodos para funções são listados a seguir : call, apply e toString
 * 
 * call(this,argumentos)
 * O método call permite mesclar dois ou mais métodos em um só objeto. Isso é possível chamado um método dentro do outro e passando o objeto 
 * como parâmetro.
 * 
 * Este método admite dois parâmetros obrigatórios. A palavra-chave this e os argumentos do método a ser mesclado.
 * O resultado dessa técnica é um objeto com vários métodos. Exemplo:
 * 
 * Suponha que tenhamos dois objetos distintos nomeados apartamentoDescricao e apartamentoVenda destinados a descrever e mostrar relatórios de 
 * vendas, respectivamente, dos apartamentos de um imobiliária.
 * Considere, ainda, o uso desses dois objetos para instanciar dois novos objetos nomeados zonaSulDescricao e zonaSulVenda destinaados a 
 * armazenar dados da descrição e vendas de apartamentos localizados na zona sul.
 */


//Exemplo 1
function apartamentoDescricao(local, quartos, garagem){
    this.local = local,
    this.quartos = quartos,
    this.garagem = garagem 
};
function apartamentoVenda(local, quantidade, vendidos){
    this.local = local,
    this.quantidade = quantidade,
    this.vendidos = vendidos 
};

zonaSulDescricao = new apartamentoDescricao('Zona Sul', 4, 'sim');
zonaSulVenda = new apartamentoVenda('Zona Sul', 12, 7);

console.log("-----------");
console.log(zonaSulDescricao.local + "\n" + zonaSulDescricao.quartos + "\n" + zonaSulDescricao.garagem + "\n" +
            zonaSulVenda.local + "\n" + zonaSulVenda.quantidade + "\n" + zonaSulVenda.vendidos);


//Exemplo 2
function apartamentoDescricao2(local, quartos, garagem){
    this.local = local,
    this.quartos = quartos,
    this.garagem = garagem 
};
function apartamentoVenda2(local, quartos, garagem, quantidade, vendidos){
    this.local = local,
    this.quantidade = quantidade,
    this.vendidos = vendidos,
    apartamentoDescricao2.call(this, local, quartos, garagem);
};

zonaSul = new apartamentoVenda2('Zona Sul', 4, 'sim', 12, 7);

console.log("-----------");
console.log(zonaSul.local + "\n" + zonaSul.quartos + "\n" + zonaSul.garagem + "\n" +
            zonaSul.local + "\n" + zonaSul.quantidade + "\n" + zonaSul.vendidos);

/* Observe que o método call chama o objeto apartamentoDescricao2 dentro do objeto apartamentoVenda2. Assim sendo, este objeto passa a conter 
aquele e transforma-se em um novo objeto construtor para todos os dados(argumentos da função) de um imóvel. Os dois objetos foram mesclados.


apply(this, array)
O método apply funciona de maneira semelhante ao método call mostrado anteriormente. A diferença é somente na forma como os parâmetros são 
passados pelo método. Enquanto para o método call os parâmetros são uma lista dos valores dos argumentos do objeto separados por vírgula, 
para o método apply, a passagem dos parâmetros deve ser feita como um array.

As três sintaxes para se criar o array de parâmetros são mostradas a seguir:
- com o uso do sintaxe literal [par1, par2, ... , parN];
- com o uso do operador new: new Array(par1, par2, ... , parN);
- com o uso da propriedade arguments.

Lembre-se de que a propriedade arguments é um pseudoarray dos argumentos de uma função.
*/

function apartamentoDescricao3(local, quartos, garagem){
    this.local = local,
    this.quartos = quartos,
    this.garagem = garagem 
};
function apartamentoVenda3(local, quartos, garagem, quantidade, vendidos){
    this.local = local,
    this.quantidade = quantidade,
    this.vendidos = vendidos,
    apartamentoDescricao3.apply(this, arguments);
    //ou apartamentoDescricao3.apply(this, [local, quartos, garagem]);
    //ou apartamentoDescricao3.apply(this, new Array(local, quartos, garagem));
};

zonaSul2 = new apartamentoVenda3('Zona Sul', 4, 'sim', 12, 7);

console.log("-----------");
console.log(zonaSul2.local + "\n" + zonaSul2.quartos + "\n" + zonaSul2.garagem + "\n" +
            zonaSul2.local + "\n" + zonaSul2.quantidade + "\n" + zonaSul2.vendidos);
console.log("-----------");

// toString()
// O método toString() retorna uma string mostrando o código da função.
function apartamentoDescricao4(local, quartos, garagem){
    this.local = local,
    this.quartos = quartos,
    this.garagem = garagem 
};

console.log(apartamentoDescricao4.toString());