const form = document.querySelector('.create-task-block')
const tasks = document.querySelector('.tasks-list')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  const text = event.target[0].value
  const id = new Date().getTime()
  tasks.insertAdjacentHTML('beforeend', `<p id='${id}'>${text}</p>`)
})