import { useSelector, useDispatch } from 'react-redux'
import { modifyAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

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

    const voteHandler = (anecdote) => {
        const newObject = {
            ...anecdote,
            votes: anecdote.votes + 1,
        }
        const voteNotification = `you voted '${anecdote.content}'`
        dispatch(modifyAnecdote(newObject))
        dispatch(setNotification(voteNotification, 10))
    }
    
    return ( 
       <div>
            {
                anecdotes 
                ?
                [...anecdotes].sort((anecdote1, anecdote2) => anecdote2.votes - anecdote1.votes).map(anecdote => {
                    return (
                        <Anecdote 
                            key={anecdote.id}
                            anecdote={anecdote} 
                            handleClick={() => voteHandler(anecdote)}
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