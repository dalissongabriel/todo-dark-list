/**
 * Class responsible for managing interactions with everyone's html
 */
class HtmlTodo {

  /**
   * Method responsible for adding an Todo already in HTML in the list
   * @param {*} todoHtml 
   */
  static putTodoInList(todoHtml) {
    const list = document.querySelector(".list") 
    list.insertAdjacentHTML("afterbegin", todoHtml);
  }

  /**
   * Method responsible for creating an Todo in HTML
   * @param {*} eventHtml 
   */
  static createTodoElement({target}) {
    const formElement = target
    const todo = new Todo(formElement.description.value)
    return `
      <li class='list__item list__item--open'>
        <p class="list__text">${todo.description}</p>
        <div class="list__actions">
          <button class="list__bttn list__bttn--complete" onclick='HtmlTodo.complete(this)'>Complete</button>  
          <button class="list__bttn list__bttn--drop" onclick='HtmlTodo.drop(this)'>Drop</button>
        </div>
      </li>`
  }

  /**
   * Method responsible for removing an Todo from the list
   * @param {*} targetButtonElement 
   */
  static drop(targetButtonElement) {
    targetButtonElement.parentNode.parentNode.remove()
  }
  
  /**
   * Responsible method for visually marking an Todo as completed
   * @param {*} targetButtonElement 
   */
  static complete(targetButtonElement) {
    const todoItemListHtml = targetButtonElement.parentNode.parentNode
    
    const textTodo = todoItemListHtml.children[0]

    textTodo.classList.add("list__text--complete")
    todoItemListHtml.classList.remove("list__item--open")
    todoItemListHtml.classList.add("list__item--complete")
  }
}