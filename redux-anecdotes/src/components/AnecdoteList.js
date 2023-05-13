import { useSelector, useDispatch } from 'react-redux'
import { modifyAnecdote } from '../reducers/anecdoteReducer'
import { voteNotification, clearNotification } from '../reducers/notificationReducer'

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

    const likeHandler = (anecdote) => {
        dispatch(modifyAnecdote(anecdote))
        dispatch(voteNotification(anecdote.content))
        setTimeout(function(){
            dispatch(clearNotification())
        }, 5000)
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
                            handleClick={() => likeHandler(anecdote)}
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