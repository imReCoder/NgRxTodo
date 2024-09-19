import { Todo } from '../../store/todo.model';

const TODOS: Todo[] = [
  {
    id: '1',
    name: 'Todo 1',
    description: 'Description 1',
    completed: false,
  },
  {
    id: '2',
    name: 'Todo 2',
    description: 'Description 2',
    completed: false,
  },
  {
    id: '3',
    name: 'Todo 3',
    description: 'Description 3',
    completed: false,
  },
];

export const getTodos = () => {
  return TODOS;
};

export const addTodo = (todo: Todo) => {
  TODOS.push(todo);
};

export const deleteTodo = (id: string) => {
  const index = TODOS.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return generateErrorRes('Todo not found');
  }
  return TODOS.splice(index, 1);
};

export const updateTodo = (id: string, updatedTodo: Todo) => {
  const index = TODOS.findIndex((todo) => todo.id === id);
  if (index === -1) {
    return generateErrorRes('Todo not found');
  }
  TODOS[index] = updatedTodo;
  return TODOS[index];
};

const generateErrorRes = (message: string) => {
  return {
    error: true,
    message: message,
  };
};
