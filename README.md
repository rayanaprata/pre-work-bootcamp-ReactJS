## 🌈 Pre-work Brainn Bootcamp - ReactJS

Repository to store my challenges made in the week of Pre-work Brainn Bootcamp.

- [x] [Challenge One](https://github.com/rayanaprata/pre-work-bootcamp-ReactJS/blob/master/challengeOne)
- [ ] [Challenge Two]()
- [ ] [Challenge Three]()
- [ ] [Challenge Four]()

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
  Incluo type="module" na tag de script no HTML. Módulos são script por padrão e eles precisam ser exportados e importarem outros módulos para ter acesso a eles.

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

## Class Two ✨

Não é recomendado utilizar propriedades do HTML para estilizar, o ideal é utilizar CSS.

---

Made with 🤍 by [Rayana Prata](https://www.linkedin.com/in/rayanaprata/)
