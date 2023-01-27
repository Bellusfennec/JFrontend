for (let i = 0; i < 3; i += 1) {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }
}

let k = 0
while (k < 3) {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }
  k++
}

let j = 0
do {
  let newStudent = prompt('Введите имя нового студента!');
  if (newStudent) {
    newStudent = newStudent.trim();
    alert(`Добро пожаловать, ${newStudent}!`)
  }
  j++
} while (j < 3);