/*
[Funcionalidades Gerais do Javascript]

> Manipular conteúdo e apresentação
Ex.s: Inserção de data/hora no documento, inserção de uma mensagem de boas-vindas, gerar HTML etc. Geração de HTML através do JavaScript deve 
ser usada em uma situação muito específica, a geração indiscriminada é considera como péssimas práticas de desenvolvimento.

> Manipular o navegador
Ex.s: Criar janelas pop-up, apresentar mensagens ao usuário, alterar as dimensões do navegador, interferir na barra de status, retirar menus, 
fechar e abrir janelas.

> Interagir com formulários
Ex.s: Acessar os campos e valores digitados em um formulário HTML e proceder à validação dos dados, realizar cálculos e fornecer dicas de 
preenchimento dos campos.

> Interagir com outras linguagens dinâmicas
Ex.: Cumprir tarefas complementares relacionadas ao fluxo da programação.

------------------------------------------------------------------------------------------------------------------------------------------------
[Javascript em Conformidade com os Padrões Web]

> Javascript não obstrutivo:
- O conteúdo da página deve estar presente e funcional, ainda que se perca em usabilidade, caso o usuário esteja visualizando o documento em um 
dispositivo sem suporte para Javascript.
- Usar a linguagem com vistas a unicamente incrementar a usabilidade da página.
- Escrever scripts em arquivos externos para serem linkados ao documento e não inserir script na marcação HTML.

> Melhoria progressiva
- Acabar com práticas de criação de scripts voltados unicamente a acrescentar efeitos espetaculares na página, mas sem qualquer utilidade, como 
figuras acompanhando o cursor, objetos voando pela página, luzes piscando etc.

> Separação das Tecnologias
- Conceito de separação de camadas de desenvolvimento. Javascript deve ser mantido na camada de comportamento, não invadindo a camada de 
estruturação do conteúdo(HTML), nem a camada de apresentação(CSS).

------------------------------------------------------------------------------------------------------------------------------------------------
[Camadas de Desenvolvimento]

As principais vantagens de adotar a prática de separação das camadas são:
- Elimina a necessidade de repetição de códigos em diferentes páginas;
- Facilita o reaproveitamento de trechos de códigos em outros projetos;
- Facilita a busca e correção de eventuais bugs nos códigos;
- Facilita a manutenção e o entendimento dos códigos.

Melhoria progressiva(Progressive Enhancement), segundo esse princípio o desenvolvimento de uma página web deve ser feito em três etapas:
- Na primeira etapa, estruturar os conteúdos usando a linguagem HTML. Ao final dessa etapa, todos os conteúdos devem estar disponíveis para 
qualquer visitante que esteja utilizando qualquer dispositivo de usuário.
- Na segunda etapa, incrementar a apresentação da página com o uso das CSS. Essa etapa visa a melhorar a experiência dos usuários aptos a 
visualizar folhas de estilos.
- Finalmente, na terceira etapa, introduzir Javascript com a finalidade de acrescentar interatividade à página, melhorando ainda mais a 
experiência do usuário.

------------------------------------------------------------------------------------------------------------------------------------------------
[Caixas de Diálago]

Caixa de diálogo é uma janela do tipo pop-up que se destina a fornecer informações ou coletar dados do usuário.
> Caixa de alerta [Alert box]
*/
window.alert("Alô mundo!");
//ou simplesmente alert("argumento");

/*
Método ou função que admite a entrada de um argumento, que é uma string contendo a mensagem a ser apresentada ao usuário.

> Caixa de diálogo de confirmação [confirm()]
O método confirm() do objeto Window destina-se a colocar na interface do usuário uma caixa de diálogo contendo dois botões, normalmente 
denominados OK e CANCELAR.
*/
confirm("Você tem certeza que quer apagar o arquivo?\nEsta operação não poderá ser desfeita.");

/*
> Caixa de diálogo para entrada de string [prompt()]
O método prompt() do objeto Window destina-se a colocar a interface do usuário uma caixa de diálogo contendo um campo para que ele digite uma 
string.
*/
prompt("Olá visitante\nInforme a data do seu nascimento.", ["dd/mm/aaaa"]); //Quebra de linha -> \n

/*
O primeiro argumento, é uma instrução ao usuário para o que se espera que ele digite no campo de texto. O segundo argumento, um valor default, 
facultativo, inserido no campo de texto.

Em uma situação real, o script mostrado deveria ser complementado, ficando em condições de receber a resposta do usuário e manipulá-la.

------------------------------------------------------------------------------------------------------------------------------------------------
> Escrever HTML com Javascript
Vimos os três métodos do objeto Window destinados a criar caixas de diálogo. Vamos examinar a seguir o método write() do objeto Document cuja 
finalidade é escrever marcação HTML em um documento. Uma vez que Document é um objeto de Window, a sintaxe para esse método é mostrada a seguir:
*/
window.document.write("<h2>O método <code>write()</code></h2><p>O método <code>write()</code> do objeto document destina-se a escrever marcação HTML com uso do Javascript.</p>");

/*
ou simplesmente document.write();
O método writeln() é semelhante ao método write(), com a diferença que acrescenta um caractere de nova linha ao final do conteúdo inserido.

------------------------------------------------------------------------------------------------------------------------------------------------
> Atrelar um evento com Javascript

Eventos são ações capazes de disparar uma reação. Ex.: Clicar um link ou colocar o ponteiro do mouse sobre um elemento são eventos. Ao clicar 
um link, desencadeamos uma reação que poderá ser a de abrir uma nova página. Ao colocar o ponteiro do mouse sobre um elemento, podemos, por 
exemplos, alterar a opacidade dele.

<button type="button" onclick="alert('Caixa de Alerta');">Onclick</button>

Lembrando que foi usado junto com o HTML apenas para exemplificação, o conteúdo deve ficar separado.

------------------------------------------------------------------------------------------------------------------------------------------------
> Inserir Javascript na HTML
Existem três maneiras de inserir Javascript em um documento HTML:
- Inline: Inserir o script diretamente na seção body do documento. Trata-se de prática não recomendada de acordo com o princípio da separação 
das camadas de desenvolvimento.
- Incorporado: Inserir o script na seção head do documento.
- Externo: Escrever o script em um arquivo externo e inserir com um link na seção head do documento.

Exemplos no arquivo .html

------------------------------------------------------------------------------------------------------------------------------------------------
[Sistema léxico do Javascript]
Entende-se por sistema léxico de uma linguagem o conjunto de palavras que compõem a linguagem.
1) Tamanho de caixa: A linguagem Javascript é sensível ao tamanho de caixa (case sensitive). Isso significa que nomes de variáveis, funções e 
demais identificadores são diferenciados quando escritos com letras maiúsculas ou minúsculas.
Ex.: As variáveis total, Total, toTal e TOTAL são diferentes.

2) Comentários: São pequenos textos que o desenvolvedor insere ao longo do script com a finalidade de facilitar o entendimento e a manutenção 
do código.
*/

// Linha única

/*
Múltiplas linhas
*/

/*
3) Declarações
Um script consiste em uma série de instruções escritas segundo uma sintaxe própria e rígida. As instruções, escritas em uma sequência lógica, 
determinam a realização de tarefas com a finalidade de obter um resultado final.
*/

//Declarações na mesma linha
a = 3; b = 6; c = 9;

//Declarações em linhas separadas
x = 3;
y = 6;
z = 9;

/*
4) Espaços em branco e quebras de linha
Quebra de linhas e espaços em branco, quando inseridos entre nomes de variáveis, nomes de funções, números e entidades similares da linguagem, 
são ignorados na sintaxe Javascript. Contudo, para strings e expressões regulares, tais espaçamentos são considerados.
alert("Olá")     =      alert ( "Olá" )
a = 10           !=      a = 1 0   -> Vai gerar um erro

5) Literais
Na terminologia Javascript, a palavra literal designa qualquer dado - valor fixo - que se insere no script. Nos exemplos a seguir, os valores 
45 e "Olá mundo!" são literais
*/
numero = 45;
mensagem = "Olá mundo!";

/*
Existem 6 tipos de dados literais conforme descritos a seguir:
- Inteiros;
- Decimais;
- Booleanos;
- Strings;
- Arrays;
- Objetos.

- Inteiros: São os números inteiros escritos em base decimal(base 10), hexadecimal(base 16) ou octal(base 8). A base octal está em desuso mas 
ainda é válida.

A base 10 é o sistema de numeração representado pela letra Z na matemática, ou seja, o conjunto dos números inteiros positivos e negativos mais 
o número zero.
Z = {..., -2, -1, 0, 1, 2, ...}
*/
console.log("Base Decimal (base 10)");
console.log("Z = {...," + (-1) + ", " + (0) + ", " + (1) + ", ...}");

/*
A base hexadecimal utiliza 16 símbolos(base 16) para representar os números. Os símbolos são os dez números de {0 até 9} mais as seis letras do 
alfabeto {a até f}.
Na sintaxe Javascript, números hexadecimais deverão ser precedidos de 0x:
0xf = 15    0x10 = 16   0x1f = 31   0x20 = 32
*/
console.log("Base Hexadecimal (base 16)");
console.log("0xf -> "+ 0xf);
console.log("0x10 -> "+ 0x10);
console.log("0x1f -> "+ 0x1f);
console.log("0x20 -> "+ 0x20);

//A base hexadecimal utiliza 16 símbolos(base 16) para representar os números. Os símbolos são os dez números de {0 até 7}
console.log("Base Octal (base 8)");
console.log("0o7 -> "+ 0o7);
console.log("0o10 -> "+ 0o10);
console.log("0o17 -> "+ 0o17);
console.log("0o20 -> "+ 0o20);

//- Decimais: São os números constituídos por um número inteiro e um número fracionário. As casas decimais são separadas por um ponto (.):
console.log("Número decimal -> " + 3.14159);

/*
A sintaxe Javascript admite a notação científica(ou notação exponencial) para escrever tanto literais inteiros como literais fracionários. 
Notação científica é uma maneira alternativa de representar números compostos por muitos algarismos e consiste em acrescentar a letra 'E' ou 
'e' a um número para indicar expoentes de 10.
*/
console.log("1E3 -> " + 1E3);
console.log("1x10^3 = 1*10**3 -> " + 1*10**3);
console.log("1E3 -> " + 1E-3);
console.log("1x10^3 = 1*10**-3 -> " + 1*10**-3);

//- Booleanos: são as palavras-chave true e false, destinadas a definir as condições de valores lógicos: verdadeiro e falso.
verdade = true;
falso = false;
console.log(verdade);
console.log(falso);

//- Strings: São o conjunto de zero ou mais caracteres envolvidos por aspas duplas("") ou aspas simples('').
nome1 = "Helen Mercedes da Silva";
nome2 = 'Pedro de Souza Lima';
console.log(nome1);
console.log(nome2);

/*
Alguns caracteres especiais da linguagem e a sintaxe geral para caracteres Latin-1 e Unicode:
    \b      ->                  \u0008                  ->  Backspace
    \f      ->                  \u000C                  ->  Form Feed
    \n      ->                  \u000A                  ->  Nova Linha
    \r      ->                  \u000D                  ->  Retorno do Carro
    \v      ->                  \u000B                  ->  Tabulação Vertical
    \t      ->                  \u0009                  ->  Tabulação Horizontal
    \'      ->                  \u0027                  ->  Apóstrofo
    \"      ->                  \u0022                  ->  Aspas duplas
    \\      ->                  \u005C                  ->  Barra Invertida
    \XXX    ->             Octais de 1 a 377            ->  em Latin-1
    \xXX    ->          Hexadecimais de 00 a FF         ->  em Latin-1
    \uXXXX  ->       Quatros dígitos hexadecimais       ->  em Unicode

Exemplo de 3 caracteres e seus respectivos códigos na sintaxe Javascript.
        Caractere               Octal      Latin-1(16)       Unicode
    © (Copyright)           ->  \251    ->    \xA9      ->   \u00A9
    ® (Marca Registrada)    ->  \256    ->    \xAE      ->   \u00AE
*/
console.log("\\xA9 -> " + "\xA9");
console.log("\\xAE -> " + "\xAE");

/*
- Arrays: São conjuntos de zero ou mais valores, separados por vírgula e envolvidos por colchetes([]). Os valores contidos em um array recebem um indice sequencial começando com zero. A sintaxe para criar um array literal é mostrada a seguir:
*/
frutas = ['Laranja', 'Pera', 'Goiaba', 'Morango'];

//Para recuperarmos os valores de um array, usamos a sintaxe composta pelo nome do array seguida de um índice, entre colchetes:
console.log(frutas);
console.log("frutas[0] -> " + frutas[0]);
console.log("frutas[1] -> " + frutas[1]);
console.log("frutas[2] -> " + frutas[2]);
console.log("frutas[3] -> " + frutas[3]);

//Um array pode conter qualquer tipo de dado do Javascript, incluindo expressões, objetos e outros arrays.
arrayMisto = ['Laranja', 34, true, [1, 2, 3], a + b];

/*
- Objetos: São os conjuntos de pares nome/valor separados por vírgulas e envolvidos por chaves({}). O par nome/valor pode ser uma propriedade do objeto e seu respectivo valor, um método do objeto e seu valor(normalmente uma função) ou mesmo outro objeto.
*/
Carro = {
    marca: "Renault",       //propriedade/valor
    modelo: "Logan",        //propriedade/valor
    ipva: "valor('rb15')",  //propriedade/método
    dimensoes: {            //propriedade/objeto
        c: "4.250mm",
        l: "1.735mm",
        h: "1.525mm"
    }
};

console.log(Carro);
console.log("Carro.marca -> " +Carro.marca);
console.log("Carro.modelo -> " +Carro.modelo);
console.log("Carro.ipva -> " +Carro.ipva);
console.log("Carro.dimensoes:");
console.log(Carro.dimensoes);
console.log("Carro.dimensoes.c -> " + Carro.dimensoes.c);
console.log("Carro.dimensoes.l -> " + Carro.dimensoes.l);
console.log("Carro.dimensoes.h -> " + Carro.dimensoes.h);

/* 
6) Seção CDATA
Seções CDATA se destinam a esconder do parseador XML blocos de texto que contenham caracteres de dados ou marcação.

Parseador XML é um processador nativo do navegador cuja finalidade é transformar uma marcação XML em um objeto DOM.

Na sintaxe XML caracteres tais como &, " e ' devem ser codificados para &amp;, &quot; e &apos; respectivamente. O mesmo ocorre com o caractere 
< quando usado de outra maneira que não para indicar abertura de tag, caso em que deverá ser codificado para &lt;

------------------------------------------------------------------------------------------------------------------------------------------------
[Variáveis]
Variável é um nome qualquer ao qual se atribui um valor ou dado. Uma variável pode conter uma string, um número inteiro, um número fracionário, 
um array, um booleano, uma função, um objeto etc. Variáveis são também chamadas de identificadores.

Algumas restrições para o nome da variável, devem começar por um dois três caracteres a seguir:
> uma letra;
> underscore (_);
> cifrão ($).

Embora seja possível, o cifrão($) é destinado para bibliotecas Javascript - como Jquery, não é recomendado o uso.

Os caracteres que seguem podem ser letras maiúsculas ou minúsculas (A-Z ou a-z), números(0-9), underscores(_) ou caractere cifrão($). Alguns 
exemplos:

_variavel
variavel
minha_variavel
minhaVariavel
$variavel
variavel123

Boas práticas:
- Escolher nomes que transmitem uma dica de conteúdo da variável. Ex.: qtdLivros para uma variável destinada e armazenar uma quantidade  de 
livros.
- Evite nome de variáveis como a, f34, variavelParaArmazenarUmObjeto, pois são muito sucintas ou verbosas. Use letras i, j, k,... para nomear 
variáveis contadoras.
-Variáveis nomeadas com um nome composto podem ser escritas de várias formas. Por exemplo: nomevendedor, nome_vendedor e nomeVendedor. As duas 
últimas são as recomendadas, e dentre estas a última é conhecida como CamelCase - inicialização de uma nova palavra em letra maiúscula. O 
importante é adotar uma das duas e manter a consistência.
- Há, ainda, restrição final para escolher nomes de variáveis. Algumas palavras fazem parte da sintaxe da linguagem Javascript e não pode ser 
usadas para nomear variáveis, são as palavras reservadas.

(Palavras-chave Javascript)
break, case, catch, continue, default, delete, do,
else, finally, for, function, if, in, instanceof,
new, return, switch, this, throw, try, typeof,
var, void, while, with

(Palavras reservadas pela especificação ECMA-262)
abstract, boolean, byte, char, class, const, debugger, double,
enum, export, extends, final, float, goto, implements, import,
int, interface, long, native, package, private, protected, public,
short, static, super, synchronized, throws, transient, volatile

(Palavras reservadas dos dispositivos de hospedagem)
alert, array, blur, boolean, date, document, escape,
eval, focus, function, history, image, isNaN, length,
location, math, name, navigator, number, object, onLoad,
open, outerHeight, parent, parseFloat, regExp, status, string

> Declarar variáveis
Um conceito importante ao declararmos uma variável é o chamado escopo da variável, que é o ambiente ou, mais precisamente, o trecho ou região 
do script no qual a variável assume o valor que foi para ela declarado.

Uma variável pertence ao escopo global e denomina-se variável global quando seu valor é reconhecido em qualquer trecho do script. Por outro 
lado, diz-se que uma variável é local e pertence ao escopo local quando seu valor é reconhecido somente no treco do script no qual ela foi 
declarada.

Para declarar uma variável pertencente ao escopo local, usa-se a palavra-chave var, que é própria da sintaxe Javascript. Declarar uma variável 
sem uso da palavra-chave var implica que a variável pertença ao escopo global.
*/
var escopo = 30;
console.log(escopo);

global_ = function(){
    console.log(escopo); //Pegando a variável escopo de fora
    escopo2 = 50;
};

local_ = function(){
    var escopo = 60;
    console.log(escopo); //Pegando a variável escopo de dentro
};

global_func = function(){
    console.log(escopo2); //Pegando a variável global que está dentro de uma função
}

global_();
local_();
global_func(); 

//O uso de variáveis globais devem ser utilizado de modo reduzido e em casos bastante específicos.

/*
> Sintaxe para declarar variáveis
É importante declarar as variáveis na primeira linha de código da região para a qual ela será válida, mas não há uma sintaxe rígida para a 
forma de declará-las:
*/
var m1 = 10; var m2 = 20; var m3 = "Teste";

var n1 = 5;
var n2 = 10;
var n3 = "Teste";

var o1 = 2, o2 = 4, o3 = "Teste";

//A última é mais simplificada, pois utiliza somente um var

/*
> null
É um valor literal que indica ausência de valor, ou um objeto sem um valor que o represente. Se uma variável é declarada null, não existe um 
objeto, um array, uma string, m literal ou qualquer outro valor a ela associado.
*/
var nulo = null;
console.log(nulo);

/*
> undefined
Uma variável assume o valor undefined quando é declarada e não inicializada, ou seja, não se atribui um valor a ela.
*/
var indefinida;
console.log(indefinida);

/*
> NaN
Um valor que não seja um número
*/
var naoNum = 3 * "Olá";
console.log(naoNum);

/*
> Infinity
Para representar um valor infinito positivo. A faixa de números manipuláveis pelo interpretador Javascript está compreendida entre:
-1.7976931348623157e+308 e 1.7976931348623157e+308
*/
var limite_1 = -1.7976931348623157e+308;
var limite_2 = 1.7976931348623157e+308;
console.log(limite_1);
console.log(limite_2);
console.log(limite_1 * 1.001); // x 0,1 %
console.log(limite_2 * 1.001); // x 0,1 %

/*
------------------------------------------------------------------------------------------------------------------------------------------------
[Variáveis e Propriedades dos Objetos]
Vimos que propriedades de um objeto nada mais são do que valores de uma variável do objeto. Nesse sentido, não há diferença entre variáveis e 
propriedades dos objetos. Ambas são conceitualente idênticas. O item a seguir esclarece melhor esse conceito.

> Objeto Global
Para esclarecer e identificar o objeto global, tomemos como exemplo um navegador web que é um ambiente de hospedagem para Javascript.

Quando abrimos o navegador, cria-se um objeto global que, na sintaxe Javascript, se denomina window. Esse objeto contém todas as propriedades e 
métodos, da linguagem e do respectivo navegador. Os métodos para criar caixasde diálogo que estudamos anteriormente são do objeto Window e, 
assim sendo, as sintaxes a seguir são perfeitamente válidas:

window.alert("Teste");
window.confirm("Tem certeza?");
window.prompt("Digite seu nome", "");

Pode-se fazer referência ao objeto global window com o uso de uma palavra-chave própria da linguagem Javascript denominada this. Assim, as 
sintaxes a seguir são equivalentes às mostradas anteriormente e perfeitamente válidas:

this.alert("Teste");
this.confirm("Tem certeza?");
this.prompt("Digite seu nome", "");

A palavra-chave this refere-se ao objeto windwo quando usada fora do corpo de uma função. Quando utilizada no corpo de uma função, refere-se a 
um objeto que não window. É um objeto próprio da função denominado genericamente de call object. 

Quando declaramos, em nossos scripts, variáveis globais, estas são automaticamente declaradas como propriedades do objeto global window. Assim, 
de acordo com os conceitos já estudados, as seguintes sintaxes são válidas:
*/

q = 50;
console.log(window.q); //50

funcaoUm = function(){
    var w = 30;
};
funcaoUm(window.w); //undefined pq w é local

//Os exemplos anteriores podem ser escritos com a palavra-chave this como mostrado a seguir:

e = 50;
console.log(this.e); //50

funcaoDois = function(){
    var r = 30;
};
funcaoDois(this.r); //undefined pq r é local