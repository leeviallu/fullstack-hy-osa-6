import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'

const AnecdoteForm = () => {
  const newAnecdoteMutation = useMutation(createAnecdote)
  const queryClient = useQueryClient()

  const onCreate = (event) => {
    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    if (content.length >= 5) {
      const createAnecdote = {
        content,
        id: String((Math.random() * 1000000).toFixed(0)),
        votes: 0,
      }
      newAnecdoteMutation.mutate(createAnecdote, {
        onSuccess: () => {
          queryClient.invalidateQueries('anecdotes')
        }  
      })
    }
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
