import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return(
        <div key={anecdote.id}>
            {anecdote.content} has {anecdote.votes}
            <button onClick={handleClick}>vote</button>
        </div>
    )
}

const AnecdoteList = () => {
    const anecdotes = useSelector((state) => {
        if ( state.filter === '' ) {
            return state.anecdotes
        } else {
            return state.anecdotes.filter(anecdote => {
                return anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
            })
        }
    })
    const dispatch = useDispatch()
    return ( 
       <div>
            {
                anecdotes 
                ?
                anecdotes.sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes).map(anecdote => {
                    return (
                        <Anecdote 
                            key={anecdote.id}
                            anecdote={anecdote} 
                            handleClick={() => dispatch(voteAnecdote(anecdote.id))}
                        />   
                    )
                })
                :
                null
            }
       </div>
    )
}
export default AnecdoteList