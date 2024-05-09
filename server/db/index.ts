// Define a type for a todo item
interface TodoItem {
  id: string;
  item: string;
  completed: boolean;
}

// Initialize db.todos as an array of TodoItem
export const db = {
  todos: [] as TodoItem[]
}