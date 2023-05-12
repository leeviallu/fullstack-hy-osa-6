import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => {
        if ( state.filter === '' ) {
            return state.anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
        } else {
            return state.anecdotes.filter(anecdote => {
                return anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
            }).sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes)
        }
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
       </div>
    )
}
export default AnecdoteList