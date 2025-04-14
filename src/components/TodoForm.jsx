import { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import React from 'react';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addTodo(text);
      setText('');
    }
  };

  return (
    <Box 
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: 'flex', gap: 2, mb: 2 }}
    >
      <TextField
        fullWidth
        label="Add a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}

export default TodoForm;