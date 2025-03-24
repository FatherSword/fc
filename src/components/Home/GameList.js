import React from 'react'

const games = [
  { id: 1, name: '英雄联盟', image: '/game1.svg' },
  { id: 2, name: '王者荣耀', image: '/game2.svg' },
  { id: 3, name: '和平精英', image: '/game3.svg' }
]

const GameList = () => {
  return (
    <div className="flex space-x-4 justify-center py-8">
      {games.map(game => (
        <div key={game.id} className="bg-white p-4 rounded-md">
          <img src={game.image} alt={game.name} className="w-24 h-24" />
          <p className="text-center">{game.name}</p>
        </div>
      ))}
    </div>
  )
}

export default GameList    