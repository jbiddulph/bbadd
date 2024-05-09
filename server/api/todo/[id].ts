import { db } from "../../db";
import {sendError} from "h3"

export default defineEventHandler((e) => {
  const method = e._method;
  const context = e.context;
  const { id } = context?.params || {};
  const findTodoById = (todoId: string | undefined) => {
    let index = -1; // Initialize index with a default value
    const todo = db.todos.find((t, i) => {
      if (t.id === todoId) {
        index = i;
        return true;
      }
      return false;
    })

    if (!todo) {
      const TodoNotFoundError = createError({
        statusCode: 404,
        statusMessage: "Todo not found",
        data: {}
      });

      sendError(e, TodoNotFoundError);
    }

    return {todo, index} 
  }
  if (method === "PUT" && context && context.params && 'id' in context.params) {

    const {todo, index} = findTodoById(id)

    const updatedTodo = {
      ...todo,
      completed: !todo!.completed,
    }

    if (!db.todos) db.todos = [];
    if (index !== -1) { // Check if index has been updated
      db.todos[index] = updatedTodo;
    } else {
      throw new Error("Todo not found");
    }
    return updatedTodo;
  }
  if (method === "DELETE") {
    const {index} = findTodoById(id)

    db.todos.splice(index, 1)

    return {
      message: "Item deleted"
    }
  }
})
