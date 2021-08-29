## 🌈 Pre-work Brainn Bootcamp - ReactJS

Repository to store my challenges made in the week of Pre-work Brainn Bootcamp.

- [x] [Challenge One](https://github.com/rayanaprata/pre-work-bootcamp-ReactJS/blob/master/challengeOne)
- [x] [Challenge Two](https://github.com/rayanaprata/pre-work-bootcamp-ReactJS/tree/master/challengeTwo)
- [x] [Challenge Three](https://github.com/rayanaprata/pre-work-bootcamp-ReactJS/tree/master/challengeThree)
- [x] [Challenge Four](https://github.com/rayanaprata/pre-work-bootcamp-ReactJS/tree/master/challengeFour)
- [x] [Challenge Five](https://github.com/rayanaprata/pre-work-bootcamp-ReactJS/tree/master/challengeFive)

[Click here to access the official repository with the challenges](https://github.com/brainnco/desafios-pre-work-b-academy). 💻

---

## Class One ✨

### Assuntos importantes sobre Javascript

Alguns assuntos que serão estudados nesta semana de Pré Work: Javascript, Typescript, API, DOM.

### Javascript - Escopos:

Por padrão o Javascript no navegador tem o Escopo Global, ou seja, qualquer script tem acesso a outro script.

- [x] Módulo

- Antigamente:

```
(function () {
 'use strict';
 let a = 1;
 console.log('IIFE: ' + a)
})()
```

- Hoje:
  Incluo type="module" na tag de script no HTML. Módulos são script por padrão e eles precisam ser exportados e importarem outros módulos para ter acesso a eles. O módulo é como se fosse uma função fechando o escopo de todo o arquivo. Ele já é estrito por padrão.

```
export const a = 1; // exportando constante
```

```
import { a } from './main'; // importando constante
```

- [x] Bloco

```
{
  console.log('Este é um bloco de código');
}
```

```
if (true) {
  console.log('Esse também é um bloco de código que será executado.');
} else {
  console.log('Esse também é um bloco de código que não será executado.');
}
```

- [x] Função

```
() => {
  console.log('Essa é uma função anônima');
}
```

- [x] Estruturas Condicionais
      if, switch -> geram bloco de código e não geram valores

- [x] Estruturas de Repetição
      for, while, do while -> geram bloco de código e não geram valores

- [x] Boolean -> false

```
''
0
null
undefined
false
```

- [x] Manipulando o DOM

O React é uma biblioteca que abstrai o DOM, mas em alguns (raros) momentos é preciso manipular o DOM. É necessário conhecer o DOM para saber o que o React faz por baixo dos panos.

Os seletores de JS são os mesmos seletores de CSS.
Selecionando elementos no DOM:

````
document.querySelector('#idDoElementoHTML');

document.querySelectorAll('.classDoElementoHTML');
````

Hoje em dia não é muito utilizado o document.getElementById() pois ele serve para buscar os elementos especificamente por id, neste caso o querySelector acaba sendo melhor pois você quem define o seletor. Além disso, o getElementById é HTMLCollection e QuerySelector NodeList.

Diferença de HTMLCollection e NodeList: se eu porventura colocar em uma variável todos os elementos com a tag div pelo document.getElementByTagName() edds variável será mutável, ou seja, se criar outro elemento e verificar o tamanho dessa minha variável ele irá alterar de acordo com a quantidade de elementos que foram adicionados ou removidos.

**Dica**: Sempre que quiser estilizar, não utilize id, *utilize class* (melhor pela questão da especificidade). 

E quando quiser manipular algum elemento do DOM no JS não é recomendável utilizar class ou id (ids criam elementos globais), neste caso é melhor utilizar um [data attribute](https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Howto/Use_data_attributes).

→ IDs são bons para elementos de formulário (utilizando o atributo for na label com o mesmo valor do id do input e dando o foco no input quando o usuário clica na label, mas é possível envolver o input na label e não será necessário usar o for).
→ Outro bom uso dos IDs são as tags âncoras, para navegação dentro de uma página html.

Selecionando atributos através dos data attributes:

````
const app = document.querySelectior('[data-app']);
console.log(app);
````

- [x] Eventos

Eventos guiam nossas aplicações web, basicamente é um código assíncrono que responde a alguma ação do usuário ou algum evento do browser. Mas o que é evento? Alguma coisa que vai acontecer (ex: um clique num botão).

Para lidar com eventos é utilizado o addEventListener(), que basicamente é uma função que fica "ouvindo" quando um evento é disparado. 

Essa função espera três argumentos: o tipo do evento (ex: click), o segundo argumento é a função (também chamada de listner de evento, uma função que fica ouvindo o evento de click e quando esse evento acontecer o EventListner executa essa função). O terceiro argumento é o useCapture que basicamente define a ordem que o evento será disparado.

Para prevenir a ação padrão normalmente é utilizado o event.preventDefault().

Arrow Function não tem this. É melhor evitar o uso do this. 
Daciuk mostrou duas opções para este caso: event.target e event.currentTarget.

## Class Two ✨

Forms, imutabilidade...

Não é recomendado utilizar propriedades do HTML para estilizar, o ideal é utilizar CSS.

---

Made with 🤍 by [Rayana Prata](https://www.linkedin.com/in/rayanaprata/)
