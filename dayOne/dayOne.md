## Assuntos importantes sobre Javascript

Alguns assuntos que serão estudados nesta semana de Pré Work: Javascript, Typescript, API, DOM.

### Javascript - Escopos:

Por padrão o Javascript no navegador tem o Escopo Global, ou seja, qualquer script tem acesso a outro script.

#### - [x] Módulo

 - Antigamente:
 ```
(function () {
  'use strict';
  let a = 1;
  console.log('IIFE: ' + a)
})()
```

 - Hoje: 
Incluo type="module" na tag de script no HTML. Módulos são script por padrão e eles precisam ser exportados e importarem outros módulos para ter acesso a eles.

```
export const a = 1; // exportando constante
```

```
import { a } from './main'; // importando constante
```


#### - [x] Bloco

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

#### - [x] Função


#### - [x] Estruturas Condicionais
if, switch -> geram bloco de código e não geram valores

#### - [x] Estruturas de Repetição
for, while, do while -> geram bloco de código e não geram valores

----------

# Desafio do dia 01

## Setup

Primeiro, instale as dependências do projeto e coloque o servidor para rodar em modo de desenvolvimento.

Lembre-se de, após resolver cada exercício abaixo, fazer um commit para "registrar" o ajuste.

## Exercício 01

Resolver o erro que aparece no console:

```
GET http://localhost:3000/main.js net::ERR_ABORTED 404 (Not Found)
```

## Exercício 02

Ao resolver o primeiro erro, resolva o segundo erro que deverá aparecer no console:

```
Uncaught SyntaxError: Cannot use import statement outside a module
```

## Exercício 03

Olhe novamente para o console, e resolva o próximo erro:

```
main.js:3 Uncaught TypeError: Cannot set property 'innerHTML' of null
```

## Exercício 04

Crie um link no HTML (fora da div `.app`), e adicione à ele um evento de clique.
O clique nesse botão deverá alternar a visibilidade do `.app`: se o `.app` estiver visível,
ele deverá ser escondido. Se estiver escondido, o clique deve exibí-lo.
