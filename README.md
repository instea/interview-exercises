# Exercises for interviews

Exercises should be imported using https://codesandbox.io/ and given to the candidate

## React

Located in `packages/react`

### Evaluated personal factors

* **Formability** - ask why a candidate chose a specific solution (for example function vs class component), listen to arguments, gauge an openness for the alternative
* **Ability to make sound arguments** - pinpoint something in the code and open a debate, listen for the quality of arguments

### Evaluated technical abilities

* **React abilities** - based on the inner component design, state management, ...
  * Suggested test: reset during execution (if useState is used for unmounted component, it will throw an error into console)
* **Clean code and good practices** - subjective evaluation + using the preconfigured Lint
* **Overall javascript knowledge** - based on the understanding of asynchronicity and how promises work
* **Code reuse** - based on BONUS2 (if some code is extracted / parameterization is used vs. copy/paste)
* **Library friendliness** - based on BONUS1 (if a candidate can produce bug-free code quickly, it shouldn't be such a problem) + usage of `lodash`/longer native solutions during the implementation
* **Problem solving ability** - if a problem occurs, watch how the candidate reacts and whether (s)he is able to fix it
