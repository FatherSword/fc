import React from 'react'
import GameList from '@/components/Home/GameList'
import OrderList from '@/components/Home/OrderList'
import NotificationBar from '@/components/Home/NotificationBar'

const HomePage = () => {
  return (
    <div className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url("/background.jpg")' }}>
      <div className="text-4xl font-bold text-white text-center py-8">FC电竞俱乐部</div>
      <NotificationBar />
      <GameList />
      <OrderList />
    </div>
  )
}

export default HomePage    