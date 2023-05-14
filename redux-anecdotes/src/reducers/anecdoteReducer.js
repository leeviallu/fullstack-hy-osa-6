import { createSlice } from '@reduxjs/toolkit'

import anecdoteService from '../services/anecdotes'

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    updateInterface(state, action) {
      const updatedState = state.map(anecdote => {
        if (anecdote.id === action.payload.id) {
          return action.payload
        }
        return anecdote
      })
      return updatedState
    },
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  },
})

export const { updateInterface, appendAnecdote, setAnecdotes } = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const modifyAnecdote = updatedContent => {
  return async dispatch => {
    const updatedAnecdote = await anecdoteService.updateAnecdote(updatedContent)
    dispatch(updateInterface(updatedAnecdote))
  }
}

export default anecdoteSlice.reducer