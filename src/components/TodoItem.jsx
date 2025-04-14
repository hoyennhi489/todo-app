import { Checkbox, Typography, Button, Paper, Box } from '@mui/material';
import React from 'react';

function TodoItem({ todo, toggleComplete, deleteTodo }) {
  return (
    <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 2, mb: 1 }}>
      <Checkbox
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <Typography
        variant="body1"
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          flexGrow: 1
        }}
      >
        {todo.text}
      </Typography>
      <Button 
        variant="outlined" 
        color="secondary" 
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </Button>
    </Paper>
  );
}

export default TodoItem;