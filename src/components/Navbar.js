import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const BottomNavbar = () => {
  return (
    <div className="fixed bottom-4 w-full bg-gray-800 p-4 flex flex-row justify-between items-center">
          <Link href="/" className="text-white flex flex-col items-center space-y-1">
            <Image src="/home.svg" alt="主页" width={24} height={24} />
            <span className="text-sm">主页</span>
          </Link>

          <Link href="/players" className="text-white flex flex-col items-center space-y-1">
            <Image src="/peiwan.svg" alt="陪玩打手" width={24} height={24} />
            <span className="text-sm">陪玩打手</span>
          </Link>
        
          <Link href="/announcements" className="text-white flex flex-col items-center space-y-1">
            <Image src="/gonggao.svg" alt="公告" width={24} height={24} />
            <span className="text-sm">公告</span>
          </Link>
       
          <Link href="/profile" className="text-white flex flex-col items-center space-y-1">
            <Image src="/my.svg" alt="个人中心" width={24} height={24} />
            <span className="text-sm">个人中心</span>
          </Link>
    </div>
  )
}

export default BottomNavbar
