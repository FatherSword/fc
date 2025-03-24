'use client'
import React, { useRef } from 'react';

const orders = [
  { id: 1, type: '代肝单', game: '英雄联盟', price: 100 },
  { id: 2, type: '代练单', game: '王者荣耀', price: 200 },
  { id: 3, type: '陪玩单', game: '和平精英', price: 50 }
];

const OrderList = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 300; // 根据需要调整滚动距离
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 300; // 根据需要调整滚动距离
    }
  };

  return (
    <div className="p-8 relative">
      <button className="absolute top-0 left-0 bg-blue-500 text-white p-2 rounded-md" onClick={scrollLeft}>←</button>
      <button className="absolute top-0 right-0 bg-blue-500 text-white p-2 rounded-md" onClick={scrollRight}>→</button>
      <div ref={scrollRef} className="overflow-x-scroll whitespace-nowrap">
        {orders.map(order => (
          <div key={order.id} className="bg-white p-4 rounded-md inline-block mx-2 min-w-[200px]">
            <p>{order.type}</p>
            <p>{order.game}</p>
            <p>价格: ${order.price}</p>
            <button className="bg-blue-500 text-white p-2 rounded-md">查看详情</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderList;
