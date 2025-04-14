import { List, Box } from '@mui/material';
import TodoItem from './TodoItem';
import React from 'react';

function TodoList({ todos, toggleComplete, deleteTodo }) {
  return (
    <Box>
      <List>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            deleteTodo={deleteTodo}
          />
        ))}
      </List>
    </Box>
  );
}

export default TodoList;
