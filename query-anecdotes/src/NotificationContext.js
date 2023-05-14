import { createContext, useContext, useReducer } from 'react'

const notificationReducer = (state, action) => {
    console.log(action)
    switch (action.type) {
      case 'NOTIFICATION':
        return action.payload
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
    if (notification === 'NOTIFICATION') {
      setTimeout(() => {
        notificationDispatch({type: null})
      }, 5000)
    }

    return (
      <NotificationContext.Provider value={[notification, notificationDispatch] }>
        {props.children}
      </NotificationContext.Provider>
    )
  }

export default NotificationContext