document.querySelector(".form").addEventListener("submit", (event)=> {
  event.preventDefault()
  const newTodo = HtmlTodo.createTodoElement(event)
  HtmlTodo.putTodoInList(newTodo)

  const form = event.target
  form.reset()
  form.description.focus()
})