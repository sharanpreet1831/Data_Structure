
function precedence(operator) {
    if (operator === '+' || operator === '-') return 1;
    if (operator === '*' || operator === '/') return 2;
    return 0;
  }
  
  function isOperator(char) {
    return ['+', '-', '*', '/'].includes(char);
  }
  

  function infixToPostfix(expression) {
    let stack = []; 
    let postfix = ''; 
  
    for (let i = 0; i < expression.length; i++) {
      let char = expression[i];
  
      
      if (char.match(/[a-zA-Z0-9]/)) {
        postfix += char;
      }
      
      else if (char === '(') {
        stack.push(char);
      }
      
      else if (char === ')') {
        while (stack.length > 0 && stack[stack.length - 1] !== '(') {
          postfix += stack.pop();
        }
        stack.pop(); 
      }
     
      else if (isOperator(char)) {
        while (
          stack.length > 0 &&
          precedence(stack[stack.length - 1]) >= precedence(char)
        ) {
          postfix += stack.pop();
        }
        stack.push(char);
      }
    }
  
   
    while (stack.length > 0) {
      postfix += stack.pop();
    }
  
    return postfix;
  }
  
  
  let infix = 'a+b*c';
  
  console.log('Postfix Expression:', infixToPostfix(infix));