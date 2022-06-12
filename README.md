# Exercises for interviews

Exercises should be imported using https://codesandbox.io/ and given to the candidate

## React - write component

Located in `packages/react-write-component`

The goal is to write a React component based on the textual description and a type specification

### Exercise description

`src/concurrentElements.tsx`

### Evaluated personal factors

* **Formability** - ask why a candidate chose a specific solution (for example function vs class component), listen to arguments, gauge an openness for the alternative
* **Ability to make sound arguments** - pinpoint something in the code and open a debate, listen for the quality of arguments

### Evaluated technical abilities

* **React abilities** - based on the inner component design, state management, ...
  * Suggested test: reset during execution (if useState is used for unmounted component, it will throw an error into console)
* **Clean code and good practices** - subjective evaluation + using the preconfigured Lint
* **Overall javascript knowledge** - based on the understanding of asynchronicity and how promises work
* **Code reuse** - based on BONUS (if some code is extracted / parameterization is used vs. copy/paste)
* **Problem solving ability** - if a problem occurs, watch how the candidate reacts and whether (s)he is able to fix it

## React - read & refactor

Located in `packages/react-read-refactor`

The goal is to read code and overall application design and come up with a fix in accordance with React principles

### Exercise description

`src/App.tsx`

### Evaluated technical abilities

* **React abilities** - based on the inner component design, state management, ability to detect the source of the bug, ...
* **Ability to read code** - based on the understanding of the overall structure
* **Clean code and good practices** - subjective evaluation + using the preconfigured Lint

## Javscript - read & refactor

Located in `packages/javascript-read-refactor`

The goal is to read code snippets, provide some feedback and try to refactor them

### Exercise description

`src/*.ts`

### Evaluated technical abilities

* **Ability to read code** - based on the understanding of what the code should do
* **Clean code and good practices** - subjective evaluation + using the preconfigured Lint
* **Overall javascript knowledge** - based on the various syntax tricks and inner workings of the language
* **Library friendliness/usage** - based on the usage of libraries vs. custom code
