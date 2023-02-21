const tasks = []

const form = document.querySelector('.create-task-block')
const tasksList = document.querySelector('.tasks-list')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = event.target[0].value
  const id = new Date().getTime()
  tasksList.insertAdjacentHTML('beforeend', `<p id='${id}'>${text}</p>`)
  tasks.push({id, text})
})