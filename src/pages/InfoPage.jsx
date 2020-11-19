import React from 'react'
import CardInfo from '../components/Cards/CardInfo'
import { useQuery } from '../utils/useQuery'

const InfoPage = () => {
  const query = useQuery()

  return (
    <div>
      <h1 style={{ textAlign: 'center', margin: '50px 0 40px 0' }}>Weather</h1>
      <CardInfo name={query.get('name')} />
    </div>
  )
}

export default InfoPage
