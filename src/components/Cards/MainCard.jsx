import axios from 'axios'
import './MainCard.css'
import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { Card, Button, Image } from 'semantic-ui-react'
import {
  deleteCardWeather,
  updateCardWeather,
} from '../../store/weather/actions'
import { URL } from '../..'

const MainCard = ({ city }) => {
  const dispatch = useDispatch()

  const deleteCard = () => {
    dispatch(deleteCardWeather(city.id))
  }

  const updateCard = async () => {
    try {
      const res = await axios.get(`${URL}${city.name}`)
      dispatch(updateCardWeather(res.data))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Card.Group>
        <Card>
          <Card.Content as={Link} to={`/weather?name=${city.name}`}>
            <div className="title">
              <Card.Content>{Math.ceil(city.main.temp)}°</Card.Content>
            </div>
            <Image
              floated="right"
              size="tiny"
              src={`https://openweathermap.org/img/wn/${city.weather[0].icon}.png`}
            />
            <div className="head">
              <Card.Header>{city.name}</Card.Header>
            </div>
            <Card.Meta className="feels__like">
              Feels like: {Math.ceil(city.main.feels_like)}°
            </Card.Meta>
          </Card.Content>
          <Card.Content extra>
            <div className="ui two buttons">
              <Button basic color="green" onClick={updateCard}>
                Update
              </Button>
              <Button basic color="red" onClick={deleteCard}>
                Delete
              </Button>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>
    </>
  )
}

export default MainCard
