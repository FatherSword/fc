import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <ul className="flex space-x-4">
        <li><Link href="/" className="text-white">主页</Link></li>
        <li><Link href="/players" className="text-white">陪玩打手</Link></li>
        <li><Link href="/announcements" className="text-white">公告</Link></li>
        <li><Link href="/profile" className="text-white">个人中心</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar    