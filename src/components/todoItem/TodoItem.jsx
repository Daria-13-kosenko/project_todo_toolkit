import { ListItem, ListItemText, Stack, Button, Divider } from '@mui/material'

export default function TodoItem({ todo, onToggle, onDelete, isLast }) {
  return (
    <>
      <ListItem
        disableGutters
        sx={{
          py: 1.2,
          display: 'flex',
          alignItems: 'center',
          gap: 2,
        }}
      >
        <ListItemText primary={todo.title} />

        <Stack direction="row" sx={{ pr: 2 }}>
          <Button
            onClick={() => onToggle(todo.id)}
            variant="contained"
            size="small"
            sx={{
              minWidth: 92,
              textTransform: 'none',
              bgcolor: '#0d6efd',
              '&:hover': { bgcolor: '#0b5ed7' },
            }}
          >
            {todo.done ? 'Undo' : 'Complete'}
          </Button>

          <Button
            onClick={() => onDelete(todo.id)}
            variant="contained"
            size="small"
            sx={{
              minWidth: 80,
              textTransform: 'none',
              bgcolor: '#dc3545',
              '&:hover': { bgcolor: '#bb2d3b' },
            }}
          >
            Delete
          </Button>
        </Stack>
      </ListItem>

      {!isLast && <Divider sx={{ borderColor: '#d9d9d9' }} />}
    </>
  )
}
