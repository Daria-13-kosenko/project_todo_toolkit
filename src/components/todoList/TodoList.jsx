import { Paper, Typography, List } from '@mui/material'
import TodoItem from '../todoItem/TodoItem'

function TodoList({ todos, onToggle, onDelete }) {
  return (
    <Paper
      elevation={0}
      sx={{
        mx: 'auto',
        maxWidth: 760,
        borderRadius: 2,
        border: '1px solid #d9d9d9',
        p: 3,
      }}
    >
      <Typography
        variant="h4"
        sx={{
          textAlign: 'center',
          fontWeight: 700,
          mb: 2,
        }}
      >
        Todo List
      </Typography>

      <List sx={{ p: 0 }}>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onDelete={onDelete}
          />
        ))}
      </List>
    </Paper>
  )
}

export default TodoList
