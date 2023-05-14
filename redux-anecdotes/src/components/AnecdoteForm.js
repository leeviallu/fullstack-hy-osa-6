import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        const addNotification = `you added '${content}'`
        event.target.anecdote.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(addNotification, 10))
    }
    return ( 
        <div>
            <h2>create new</h2>
            <form onSubmit={addAnecdote}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </div>
    )
}
export default AnecdoteForm