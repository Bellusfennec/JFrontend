let userString = prompt('Введите текст для обрезки');

userString.trim()

let startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки');

startSliceIndex.trim()
startSliceIndex = Number(startSliceIndex)

let endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки');

endSliceIndex.trim()
endSliceIndex = Number(endSliceIndex)

let string = userString.substring(startSliceIndex, endSliceIndex)

alert(`Результат: ${string}`)
