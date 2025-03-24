import React from 'react'
import Link from 'next/link'

const announcements = [
  { id: 1, title: '公告1', content: '这是公告1的内容', image: '/announcement1.svg' },
  { id: 2, title: '公告2', content: '这是公告2的内容', image: '/announcement2.svg' },
  { id: 3, title: '公告3', content: '这是公告3的内容', image: '/announcement3.svg' }
]

const AnnouncementList = () => {
  return (
    <div className="grid grid-cols-1 gap-4 p-8">
      {announcements.map(announcement => (
        <div key={announcement.id} className="bg-white p-4 rounded-md">
          <Link href={`/announcements/${announcement.id}`} className="text-blue-500">{announcement.title}</Link>
        </div>
      ))}
    </div>
  )
}

export default AnnouncementList    