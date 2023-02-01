const getMathResult = (expression) => {
  if (expression.length < 3) return 'Ошибка'
  const z = [">", "<", "=", "+", "-", "*", "/"]
  if (expression.length > 3) {
    expression = expression.filter(item => {
      console.log(item);
      Number(item) === 'number' // || z.indexOf(item) 
    } )
  }
  
  console.log(expression);
}

getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]); // 500
getMathResult(['200', '+', 300]); // 500
getMathResult(['20', '-', '5']); // 15
getMathResult([100, '/', 100]); // 1
getMathResult([2, '-', 2]); // 0
getMathResult(['5', '>', '10']); // false
getMathResult(['5', '<', '10']); // true
getMathResult(['1', '=', 1]); // true
getMathResult(['1', '**', 1]); // 'Ошибка'
getMathResult(['+', '100', 10]); // 'Ошибка'