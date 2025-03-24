import React from 'react'

const notifications = [
  { id: 1, text: '新的陪玩单上线啦！' },
  { id: 2, text: '本周优惠活动，快来参与！' },
  { id: 3, text: '欢迎新的陪玩打手加入！' }
]

const NotificationBar = () => {
  return (
    <div className="bg-yellow-200 p-4 text-center">
      {notifications.map(notification => (
        <p key={notification.id}>{notification.text}</p>
      ))}
    </div>
  )
}

export default NotificationBar    