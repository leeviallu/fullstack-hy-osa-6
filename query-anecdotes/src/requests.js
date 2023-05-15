import axios from "axios"

const baseUrl = 'http://localhost:3001/anecdotes'

export const getAnecdotes = async () => {
    const result = await axios.get(baseUrl)
    return result.data
}

export const createAnecdote = async newAnecdote => {
    if (newAnecdote.content.length < 5) throw new Error("TOO_SHORT")
    const result = await axios.post(baseUrl, newAnecdote)
    return result.data
}

export const updateAnecdote = async updatableAnecdote => {
    const result = await axios.put(`${baseUrl}/${updatableAnecdote.id}`, updatableAnecdote)
    return result.data
}