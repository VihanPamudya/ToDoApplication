import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);

  const addTodo = (title, description) => {
    const newTodo = { id: Date.now(), title, description, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleCompletion = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id, updatedTodo) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? updatedTodo : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, toggleCompletion, deleteTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
