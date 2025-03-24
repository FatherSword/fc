import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

const orders = [
  { id: 1, type: '代肝单', game: '英雄联盟', price: 100 },
  { id: 2, type: '代练单', game: '王者荣耀', price: 200 },
  { id: 3, type: '陪玩单', game: '和平精英', price: 50 }
]

const OrderList = () => {
  return (
    <div className="p-8">
      <Swiper
        spaceBetween={10}
        slidesPerView={3}
      >
        {orders.map(order => (
          <SwiperSlide key={order.id} className="bg-white p-4 rounded-md">
            <p>{order.type}</p>
            <p>{order.game}</p>
            <p>价格: ${order.price}</p>
            <button className="bg-blue-500 text-white p-2 rounded-md">查看详情</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default OrderList    