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
//Esta função é semelhante