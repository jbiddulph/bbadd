import {db} from "../../db";
import {v4 as uuid} from "uuid";
import {sendError} from "h3"

export default defineEventHandler(async (e) => {
  const method = e._method;
  if (method === "GET") {
    return db.todos;
  }
  if (method === "POST") {
    const body = await readBody(e); // Await the result of the async function

    if (!body.item) {
      const TodoNotFoundError = createError({
        statusCode: 400,
        statusMessage: "no item provided",
        data: {}
      });

      sendError(e, TodoNotFoundError);
    }

    const newTodo = {
      id: uuid(),
      item: body.item,
      completed: false,
    };

    db.todos.push(newTodo);

    return newTodo;
  }
});