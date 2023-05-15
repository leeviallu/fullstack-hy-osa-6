import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'
import { useNotificationDispatch } from '../NotificationContext'

const AnecdoteForm = () => {
  const dispatch = useNotificationDispatch()
  const newAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (newAnecdote) => {
      dispatch({
        type: 'NOTIFICATION', 
        payload: `you added '${newAnecdote.content}'`
      })
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(newAnecdote))
    },
    onError: (error) => {
      if (error.message === "TOO_SHORT")
        dispatch({
          type: "NOTIFICATION",
          payload: "too short anecdote, must have length 5 or more",
        });
    },
  })
  const queryClient = useQueryClient()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    const createAnecdote = {
      content,
      id: String((Math.random() * 1000000).toFixed(0)),
      votes: 0,
    }
    newAnecdoteMutation.mutate(createAnecdote)
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
