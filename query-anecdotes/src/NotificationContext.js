import { createContext, useContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        state = 'add'
        return state
      case 'VOTE':
        return 'vote'
      default:
        return ''
    }
}

const NotificationContext = createContext()

export const useNotificationValue = () => {
    const notificationDispatch = useContext(NotificationContext)
    return notificationDispatch[0]
}
export const useNotificationDispatch = () => {
    const notificationDispatch = useContext(NotificationContext)
    return notificationDispatch[1]
}

export const NotificationContextProvider = (props) => {
    const [notification, notificationDispatch] = useReducer(notificationReducer, '')
  
    return (
      <NotificationContext.Provider value={[notification, notificationDispatch] }>
        {props.children}
      </NotificationContext.Provider>
    )
  }

export default NotificationContext