import React, { useState } from 'react'
import { Form, Input, Container } from 'semantic-ui-react'
import { getWeatherCity } from '../../store/weather/actions'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'

const SearchWeather = () => {
  const [search, setSearch] = useState('')
  const city = useSelector((state) => state.weather.city)
  const dispatch = useDispatch()

  const handleSearh = async () => {
    try {
      const res = await axios.get(
        `/weather?appid=5bce41e220e023ec6710ea4f4bc73c95&units=metric&q=${search}`
      )
      let isValid = city.filter((item) => item.id === res.data.id)
      if (isValid.length === 0) {
        dispatch(getWeatherCity(res.data))
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div style={{ marginBottom: '100px' }}>
      <Container text>
        <Form onSubmit={handleSearh}>
          <Form.Field required>
            <Input
              placeholder="Add the city whose weather you want to track"
              onChange={(e) => setSearch(e.target.value)}
            />
          </Form.Field>
        </Form>
      </Container>
    </div>
  )
}

export default SearchWeather
