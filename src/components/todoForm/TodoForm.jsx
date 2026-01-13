import { useState } from 'react'
import { Box, TextField, Button } from '@mui/material'

const TodoForm = ({ onAdd }) => {
  const [text, setText] = useState('')

  const submit = () => {
    onAdd(text)
    setText('')
  }

  return (
    <Box sx={{ display: 'grid', gap: 2 }}>
      <TextField
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter new todo"
      ></TextField>
      <Button
        onClick={submit}
        variant="contained"
        sx={{
          bgcolor: '#28a745',
          '&:hover': { bgcolor: '#218838' },
          py: 1.1,
          fontWeight: 700,
          textTransform: 'none',
        }}
      >
        Add Todo
      </Button>
    </Box>
  )
}
export default TodoForm
