// [Declarações e estruturas]

// Declaração              Finalidade
// var                     Declarar uma variável
var a;
var b = 2;
var c, d, e;
var f = 1, g = 2, h = 3;
console.log("b -> " + b);

// function                Declarar uma função
function subtracao(minuendo, subtraendo){
    console.log("subtracao(" + minuendo + ", " + subtraendo + ") -> " + (minuendo - subtraendo));
}
subtracao(10, 2);

// return                  Retornar um valor
function divisao(dividendo, divisor){
    return dividendo / divisor;
}
console.log("divisao(50, 2) -> " + (divisao(50, 2)));

// if/else                 Criar estrutura condicional
if(b > 0){
    console.log("b é maior que 0");
}else if (b < 0){
    console.log("b é menor que 0");
}else{
    console.log("b é igual a 0");
}

// switch                  Criar estrutura condicional
// case                    Usado em estrutura condicional switch
// break                   Usado em estrutura condicional switch
// default                 Usado em estrutura condicional switch
switch(h){
    case 1:
        console.log("h = 1");
        break;
    case 2:
        console.log("h = 2");
        break;
    case 3:
        console.log("h = 3");
        break;
    default:
        console.log("h é um valor diferente de 1, 2 e 3.");
        break;
}

// for                     Criar um loop
var paises = ['Brasil', 'Chile', 'Japão', 'Canadá', 'Itália'];

for(var i = 0; i < paises.length; i++){
    console.log("paises[" + i + "] -> " + paises[i]);
}
console.log("----------------------------------------");
// continue                Reiniciar um loop
for(var i = 0; i < paises.length; i++){
    if(i % 2 !== 0){
        continue;
    }else{
        console.log("paises[" + i + "] -> " + paises[i]);
    }
}

// while                   Criar estrutura de repetição
a = 0;
while(a < 5){
    console.log("a -> " + a);
    a++;
}

// do/while                Criar estrutura de repetição
console.log("----------------------------------------");
a = 0;
do{
    console.log("a -> " + a);
    a++;
}while(a > 3);

// for/in                  Criar loop em objeto
var estados = ['RJ', 'SP', 'MG', 'ES', 'PE', 'PR'];

for(estado in estados){
    console.log("estado[" + estado + "] -> " + estados[estado]);
}

/*
Estruturas para exceções
A palavra exceção faz parte da estrutura léxica da linguagem Javascript, sendo empregada para indicar que ocorreu uma situação excepcional ou 
um erro no programa. Se ao usuário são solicitados a entrada e um dado numérico, como sua idade, e a entrada é uma string(por exemplo, seu nome)
, fica caracterizada uma exceção que possivelmente causará um resultado inesperado ou mesmo a interrupção do script. Outro exemplo de exceção 
ocorre quando uma funcionalidade da linguagem não é suportada por determinado navegador.

Error
Existe uma função(objeto) no Javascript denominado Error que armazena duas propriedades e um método relacionada a erros ocorridos no script. As 
propriedades são message e name e o método é toString()

> message
A propriedade message do objeto Error retorna uma mensagem contendo detalhes do erro ocorrido. A mensagem é uma string predefinida pelos 
mecanismos internos da linguagem, por exemplo: "x is not defined" para indicar que houve o erro da falta de definição da variável x. A mensagem 
de erro também pode ser personalizada como veremos adiante.

> name
A propriedade name do objeto Error retorna o tipo de erro ocorrido. Os tipos de erros são listados a seguir:

Error.name          Descrição
---------------------------------------------------------------
EvalError           Indica erro em uma declaração eval(). Esse tipo de erro é mantido na ECMA-262 somente por questões de compatibilidade com 
                    as especificações anteriores.
RangeError          Indica que um valor numérico extrapola os limites para ele estabelecidos.
ReferenceError      Indica referência a valor não válido.
SintaxError         Indica erro de processamento na sintaxe da linguagem.
TypeError           Indica que o tipo de operando é diferente do esperado.
URIError            Indica que uma das funções da linguagem destinadas a manipular URIs foi usada em desacordo com suas definições de uso.

> toString()
O método toString() do objeto Error retorna uma string composta pelos valores retornados pelas propriedades message e name quando ocorre um 
erro. Se ambos os erros não retornarem valor undefined, o método retornará uma string como mostrada a seguir, em que houve um erro de 
referência a um valor de variável não definido:
ReferenceError: x is not defined

Segundo a ECMA-262, a string deve ser composta de Error.name seguido de dois pontos, espaço em branco e Error.message conforme mostrado.

> throw
A declaração throw cria uma referência ou sinalização personalizada para uma exceção ou erro ocorrido no script. Ao encontrar um erro, o 
interpretador Javascript cria automaticamente uma referência para erro. Usando a declaração throw, podemos criar referências personalizadas 
para erros ou, ainda, personalizar as propriedades do objeto Error. A sintaxe geral é mostrada a seguir:
throw expressão

O valor de expressão pode ser qualquer tipo de dado. Os valores mais comuns são o objeto Error ou uma string contendo uma mensagem referência 
ao erro.

> try/catch/finally
As declarações try/catch/finally fornecem um mecanismo para manipular exceções e a sintaxe geral é mostrada a seguir:

try{
    ...script com possível exceção
}catch(e){
    ...tratamento do erro
}finally{
    ...script a executar ocorra ou não a exceção
}

O bloco de código para try contém uma declaração que possivelmente retorna uma exceção, como o uso de uma funcionalidade da linguagem cujo 
suporte não é garantido em todos os navegadores.

O bloco de código para catch(e) é executado somente quando for detectada uma exceção na declaração try e destina-se a tratar o erro quer 
apontando uma solução alternativa, quer apresentando uma mensagem de erro ao usuário. Essa declaração admite um argumento que faz referência ao 
objeto Error e você pode nomear como quiser(no nosso exemplo usamos a letra e, mas poderia ser erro, er, el, err, ou seja, o que for, desde que 
um nome válido para argumento).

A declaração finally é facultativa e fornece um meio de criar um bloco de código pra ser executado caso ocorra ou não a exceção.
*/

// throw                   Sinalizar erros
// try/catch/finally       Tratar erros

try{ //Bloco de código onde é testada a existência de uma exceção
    var x = u; //Declaramos uma variável x e a ela atribuímos o valor u. Como u não foi definido, a declaração causará um erro no script. Introduzimos o erro propositadamente para demonstrar funcionamento do try/catch.
    var y = x + 2; //Não serão executadas, pois o erro cessa o script e direciona a execução para a primeira declaração catch encontrada no fluxo do programa
    alert(y);
}catch(e){//Para a declaração catch, foi atribuído o argumento e
    alert(e.message + "\n" + e.name + "\n" + e.toString()); //Bloco de código a ser executado somente quando houver uma exceção na declaração try anterior. No exemplo, criamos uma caixa de alerta contendo a mensagem de erro, o nome do erro e a concatenação nome com a mensagem. Para isso, usamos as propriedades message e anem e o método toString() do objeto Erro
};

/*
Pela falta de consistência no retorno das propriedades do objeto Error, conforme acabamos de constatar, preferimos personalizar as mensagens de erro e garantir que serão apresentados de forma única em todos os navegadores. Para personalizar as mensagens de erro, vamos usar a declaração throw em conjunto com try/catch. Lembre-se de que throw cria uma referência para o erro detectado ou personaliza as propriedades do objeto Error.
*/

//Criamos uma caixa de entrada de dados para o usuário e armazenamos o valor entrando em uma variável abc. Esperamos que o usuário entre com um número entre 0 e 11
var abc = prompt("Entre um número maior que 0 e menor que 11", "");
//Iniciamos uma declaração try para sinalizar um erro caso o valor entrado pelo usuário não seja um número entre 0 e 11, como esperado.
try{
    //Se o número for menor que ou igual a 0, criamos uma referência para o erro denominado "er1"
    if(abc <= 0){
        throw("er1");
    }
    //Se o número for maior que ou igual a 11, criamos uma referência para o erro denominado "er2"
    if(abc >= 11){
        throw("er2");
    }
    //A caixa de entrada de dados prompt por padrão transforma o dado entrado em uma string, assim quando entramos um número, ele é transformado em string. A condicional nesta linha verifica se o dado entrado é um número. A função parseInt() transforma strings iniciadas por números em número. Caso a string não possa ser transformada em número, a função parseInt() retorna NaN(não é número). A função isNaN() retorna true caso o seu argumento não seja um dado do tipo número. Se o dado entrado não for um número, criaremos uma referência para o erro denominado "er3".
    if(isNaN(parseInt(abc))){
        throw("er3");
    }
//Iniciamos o tratamento do erro porventura ocorrido.
}catch(e){
    //Verificamos se a referência ao erro passado para o argumento e da declaração catch é "er1". Caso isso seja verdadeiro, mostramos uma caixa de alerta ao usuário contendo uma mensagem personalizada para esse erro.
    if(e == "er1"){
        alert("O número deve ser maior que 0.");
    }
    //... "er2" ...
    if(e == "er2"){
        alert("O número deve ser menor que 11.");
    }
    //... "er3" ...
    if(e == "er3"){
        alert("Entre somente número maior que 0 e menor que 11.");
    }
}

var ijk = prompt("Entre um número maior que 0 e menor que 11", "");
//Personalizando a mensagem de erro sem criar referência para o erro.
try{
    if(ijk <= 0){
        //Passar uma string para o objeto Error com o uso do operador new altera a propriedade message padrão do objeto para o valor da string.
        throw new Error("O número deve ser maior que 0.");
    }
    if(ijk >= 11){
        throw new Error("O número deve ser menor que 11.");
    }
    if(isNaN(parseInt(ijk))){
        throw new Error("Entre somente número maior que 0 e menor que 11.");
    }
}catch(e){
    alert(e.message);
}

/*
Outra sintaxe:

try{
    if(bcd <= 10){
        throw "O número deve ser maior que 0.";
    }
    if(bcd >= 11){
        throw "O número deve ser menor que 11.";
    }
    if(isNaN(parseInt(bcd))){
        throw "Entre somente número maior que 0 e menor que 11.";
    }
}catch(e){
    alert(e.message);
}

Podemos criar um objeto Error personalizado alterando suas propriedades padrão como mostrado a seguir:
*/
var xyz = prompt("Entre um número maior que 0 e menor que 11", "");

try{
    if(xyz <= 0){
        throw{
            name: "Erro Javascript",
            message: "O número deve ser maior que 0"
        }
    }
    if(xyz >= 11){
        throw{
            name: "Erro Javascript",
            message: "O número deve ser menor que 11"
        }
    }
    if(isNaN(parseInt(xyz))){
        throw{
            name: "Erro Javascript",
            message: "Entre somente número maior que 0 e menor que 11."
        }
    }
}catch(e){
    alert(e.name + "\n" + e.message);
}

//Além das exemplificadas anteriormente, as seguintes sintaxes são válidas para a declaração throw:
    // throw true;
    // throw new SintaxError("Mensagem de erro de sintaxe");

// with                    Alterar o escopo
/*
A declaração with destina-se a criar um escopo para um determinado bloco de código. A sintaxe geral é mostrada a seguir:

with(objeto){
    ...bloco de código
}

O argumento objeto da declaração with traz o objeto para frente da caeia de escopo no bloco de código que se segue. Tal ação pode ser útil, sendo usada principalmente para abreviar o código. Exemplo prático:
*/
var Carro = {
    marca: "Renault",
    modelo: "Logan",
    dimensoes: {
        comprimento: "4.250mm",
        largura: "1.735mm",
        altura: "1.525mm"
    }
};

console.log("----------------------------------------");
console.log("Sem with");
console.log(Carro.dimensoes.comprimento + "\n" + Carro.dimensoes.largura + "\n" + Carro.dimensoes.altura);
console.log("----------------------------------------");

//Com o uso da declaração with, o mesmo efeito poderia ser obtido conforme mostrado a seguir:
console.log("Com with");
with(Carro.dimensoes){
    console.log(comprimento + "\n" + largura + "\n" + altura);
}
//O objeto Carro.dimensoes foi trazido para frente do escopo, consequentemente o objeto referência para o script é aquele definido em with.

//Sintaxe alternativa para alterar o escopo, que consiste em atribuir o objeto a uma variável e a ele fazer referência usando essa variável como mostrado a seguir:
var ref = Carro.dimensoes;
console.log("----------------------------------------");
console.log("Alternativo");
console.log(ref.comprimento + "\n" + ref.largura + "\n" + ref.altura);
//O uso da sintaxe com atribuição do objeto a uma variável proporciona uma maneira mais robusta e confiável do que a com o uso da declaração with. Prefira a sintaxe com varia´vel e evite o uso de with.


// ;                       Declarar variável vazia
var v;