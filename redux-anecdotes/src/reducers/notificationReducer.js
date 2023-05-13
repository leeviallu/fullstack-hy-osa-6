import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: 'hei',
    reducers: {
        addBlog(state, action) {
            return null
        }
    },
})

export const { setMessage } = notificationSlice.actions
export default notificationSlice.reducer