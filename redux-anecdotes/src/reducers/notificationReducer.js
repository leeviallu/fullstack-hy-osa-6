import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
    name: 'notification',
    initialState: '',
    reducers: {
        clearNotification() {
            return ''
        },
        addNotification(state, action) {
            state = `you added '${action.payload}'`
            return state
        },
        voteNotification(state, action) {
            state = `you voted '${action.payload}'`
            return state
        }
    },
})

export const { clearNotification, addNotification, voteNotification } = notificationSlice.actions
export default notificationSlice.reducer