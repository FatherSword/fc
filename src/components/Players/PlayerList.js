import React from 'react'

const players = [
  { id: 1, name: '打手1', game: '英雄联盟', rating: 4.5 },
  { id: 2, name: '打手2', game: '王者荣耀', rating: 4.2 },
  { id: 3, name: '打手3', game: '和平精英', rating: 4.8 },
  { id: 4, name: '打手4', game: '英雄联盟', rating: 4.0 },
  { id: 5, name: '打手5', game: '王者荣耀', rating: 4.3 },
  { id: 6, name: '打手6', game: '和平精英', rating: 4.6 },
  { id: 7, name: '打手7', game: '英雄联盟', rating: 4.1 },
  { id: 8, name: '打手8', game: '王者荣耀', rating: 4.4 },
  { id: 9, name: '打手9', game: '和平精英', rating: 4.7 },
  { id: 10, name: '打手10', game: '英雄联盟', rating: 4.3 }
]

const PlayerList = () => {
  return (
    <div className="grid grid-cols-2 gap-4 p-8">
      {players.map(player => (
        <div key={player.id} className="bg-white p-4 rounded-md">
          <p>{player.name}</p>
          <p>{player.game}</p>
          <p>评分: {player.rating}</p>
        </div>
      ))}
    </div>
  )
}

export default PlayerList    