const getMathResult = (expression) => {
  if (expression.length < 3) return "Ошибка";
  const symbol = [">", "<", "=", "+", "-", "*", "/"];
  let exp = []
  let sum = 0

  for (let i = 0; i < expression.length; i++) {
    const isNumber = Boolean(String(expression[i]).match(/^\d+$/))
    const isSymbol = Boolean(symbol.indexOf(String(expression[i])) !== -1);
    if (!(isNumber || isSymbol)) continue;
    const value = isNumber ? Number(expression[i]) : String(expression[i])
    exp.push(value)
  }
  switch (exp[1]) {
    case '>': sum = exp[0] > exp[2]; break;
    case '<': sum = exp[0] < exp[2]; break;
    case '=': sum = exp[0] === exp[2]; break;
    case '+': sum = exp[0] + exp[2]; break;
    case '-': sum = exp[0] - exp[2]; break;
    case '*': sum = exp[0] * exp[2]; break;
    case '/': sum = exp[0] / exp[2]; break;
    default:
      return 'Ошибка'
  }
  return sum
};

getMathResult(["100", "hello", "javascript", "help200", "+", 4]); // 104
getMathResult(["200", "+", 300]); // 500
getMathResult(["20", "-", "5"]); // 15
getMathResult([100, "/", 100]); // 1
getMathResult([2, "-", 2]); // 0
getMathResult(["5", ">", "10"]); // false
getMathResult(["5", "<", "10"]); // true
getMathResult(["1", "=", 1]); // true
getMathResult(["1", "**", 1]); // 'Ошибка'
getMathResult(["+", "100", 10]); // 'Ошибка'
