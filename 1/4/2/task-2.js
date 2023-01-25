//1
console.log(+'50', typeof +'50'); // неявное
console.log(Number('50'), typeof Number('50'));
//2
console.log(Number('100'), typeof Number('100')); // явное
//3
console.log('' + 1, typeof '' + 1); // неявное
console.log(String('' + 1), typeof String('' + 1));
//4
console.log(String(1), typeof String(1)); // явное
//5
console.log(Boolean(0), typeof Boolean(0)); // явное
//6
console.log(+'001', typeof +'001'); // неявное
console.log(Number('001'), typeof Number('001'));
//7
console.log(1 + '', typeof 1 + ''); // неявное
console.log(Number(1 + ''), typeof Number(1 + ''));
//8
console.log(Boolean(1), typeof Boolean(1)); // явное
//9
console.log(String(001), typeof String(001)); // явное
//10
console.log(Number('Hello World'), typeof Number('Hello World')); // явное

console.log('--- Задание #3 ---');
console.log(String(console.log), Number(console.log), Boolean(console.log));
console.log(String({ name: 'Maxim' }), Number({ name: 'Maxim' }), Boolean({ name: 'Maxim' }));
console.log(String(Symbol('key')), Boolean(Symbol('key')));
console.log(String(Number), Number(Number), Boolean(Number));
console.log(String(''), Number(''), Boolean(''));
console.log(String(0), Number(0), Boolean(0));
console.log(String(-10), Number(-10), Boolean(-10));
console.log(String('-105'), Number('-105'), Boolean('-105'));

console.log('--- Задание #4 ---');
// 1  12345
console.log(Number(' 1 2 3 4 5'));
// 2  12345
console.log(Number('1234 5'));
// 3  12345
console.log(Number('12345'));
// 4  'false'
console.log(String(false));
// 5  false
console.log(Boolean(0000000));
// 6  true
console.log(Boolean(0.0000001));
// 7  'undefined'
console.log(String(undefined));
// 8  100
console.log(Number('100f'));
// 9  100
console.log(Number('100'));
// 10 1
console.log(Number('000001'));