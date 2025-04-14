import { useState } from 'react';
import { Container, Typography } from '@mui/material';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import TodoFilter from './components/TodoFilter';
import React from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        To-Do List
      </Typography>
      <TodoForm addTodo={addTodo} />
      <TodoFilter filter={filter} setFilter={setFilter} />
      <TodoList 
        todos={filteredTodos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo}
      />
    </Container>
  );
}

export default App;