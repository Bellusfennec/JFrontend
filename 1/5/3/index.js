const userName = prompt('Как вас зовут?');

userName.trim().toLowerCase()

alert(`Вас зовут ${userName}`)

// --- Задание #4 ---

let userAge = prompt('Сколько вам лет?');

userAge.trim()
userAge = Number(userAge)

alert(`Вас зовут ${userName} и вам ${userAge} лет`)
