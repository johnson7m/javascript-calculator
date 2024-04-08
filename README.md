# javascript-calculator
JavaScript (React) Calculator developed for freeCodeCamp


this project was developed and finalized online using codepen.io

the goal was to develop a calculator app that could correctly evaluate expression/formula logic.

the code as is passes all 16/16 tests in the test suite and can be easily adapted to a local environment. The imports have been converted to work with codepen's babel preprocessor. 

Notable mentions: 

1.) Mathjs was used for their invaluable { evaluate } function. This saved me time from having to hand code an operations parser for the each input string.

2.) React was used as the main framework here because the course is noted as the Front-End Development Library and I thought it apt to continue using React throughout. Notably, this is a project I think could be done more efficiently from scratch using JavaScript. 

3.) I chose to use React classes for my components as that is what I learned during the course, though I do understand and recognize the utility of the "function()" approach which seems more common nowadays. 

4.) There are a few issues that could hypothetically arise if the user has values to large. I have no code in place to handle overflow. can't be bothered. 
