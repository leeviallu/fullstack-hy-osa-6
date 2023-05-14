/* eslint-disable import/no-anonymous-default-export */
import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = {
    content, 
    id: String((Math.random() * 1000000).toFixed(0)),
    votes: 0,
  }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const updateAnecdote = async (content) => {
  const response = await axios.put(`${baseUrl}/${content.id}`, content)
  return response.data
}

export default { getAll, createNew, updateAnecdote }