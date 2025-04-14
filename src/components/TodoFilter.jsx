import { Button, ButtonGroup, Box } from '@mui/material';
import React from 'react';

function TodoFilter({ filter, setFilter }) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
      <ButtonGroup variant="contained">
        <Button onClick={() => setFilter('all')} color={filter === 'all' ? 'primary' : 'inherit'}>
          All
        </Button>
        <Button onClick={() => setFilter('completed')} color={filter === 'completed' ? 'primary' : 'inherit'}>
          Completed
        </Button>
        <Button onClick={() => setFilter('incomplete')} color={filter === 'incomplete' ? 'primary' : 'inherit'}>
          Incomplete
        </Button>
      </ButtonGroup>
    </Box>
  );
}

export default TodoFilter;