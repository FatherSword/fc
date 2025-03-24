import React from 'react'
import PlayerList from '@/components/Players/PlayerList'
import RankingButton from '@/components/Players/RankingButton'

const PlayersPage = () => {
  return (
    <div className="p-8">
      <RankingButton />
      <PlayerList />
    </div>
  )
}

export default PlayersPage    