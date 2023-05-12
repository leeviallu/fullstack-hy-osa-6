import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => {
        return state.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
    })
    const dispatch = useDispatch()
    

    return ( 
       <div>
        {anecdotes.map(anecdote =>
            <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => dispatch(voteAnecdote(anecdote))}>vote</button>
            </div>
            </div>
        )}
        <h2>create new</h2>
       </div>
    )
}
export default AnecdoteList