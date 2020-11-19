import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid } from 'semantic-ui-react'
import MainCard from '../components/Cards/MainCard'
import SearchWeather from '../components/Navigation/SearchWeather'
import { updateAllCard } from '../store/weather/actions'
import { updateAllWeather } from '../utils/updateAllWeather'

const MainPage = () => {
  const weather = useSelector((state) => state.weather.city)
  const dispatch = useDispatch()

  useEffect(() => {
    const call = async () => {
      dispatch(updateAllCard(await updateAllWeather()))
    }
    call()
  }, [dispatch])

  return (
    <>
      <h1 style={{ textAlign: 'center', marginBottom: '50px' }}>Weather</h1>

      <SearchWeather />
      <Grid container columns={3}>
        {weather.length !== 0 ? (
          weather.map((item) => (
            <Grid.Column key={item.id}>
              <MainCard city={item} />
            </Grid.Column>
          ))
        ) : (
          <h2 style={{ margin: '0 auto' }}>City weather not found</h2>
        )}
      </Grid>
    </>
  )
}

export default MainPage
