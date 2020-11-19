import React, { useEffect, useState } from 'react'
import { Card, Image, Container, Button } from 'semantic-ui-react'
import axios from 'axios'
import { Dimmer, Loader } from 'semantic-ui-react'
import './CardInfo.css'
import { URL } from '../../index'
import { useHistory } from 'react-router-dom'

const CardInfo = ({ name }) => {
  const [data, setData] = useState()
  const history = useHistory()
  useEffect(() => {
    async function getInfoWeather() {
      const res = await axios.get(`${URL}${name}`)
      setData(res.data)
    }
    getInfoWeather()
  }, [name])

  return (
    <Container>
      {data ? (
        <div className="card__container">
          <Card fluid centered>
            <Card.Content>
              <div className="temp">
                <Card.Description>
                  {Math.ceil(data.main.temp)}°
                </Card.Description>
              </div>
              <Image
                src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
                size="tiny"
                floated="right"
              />
              <div className="header">
                <Card.Header>{data.name}</Card.Header>
              </div>

              <div className="description__info">
                <Card.Description>
                  Today {data.weather[0].description.toLowerCase()}
                </Card.Description>
                <Card.Description>
                  Feels like: {Math.ceil(data.main.feels_like)}°
                </Card.Description>
                <Card.Description>
                  Wind speed: {Math.ceil(data.wind.speed)} meter/sec
                </Card.Description>
                <Card.Description>
                  Humidity: {data.main.humidity}%
                </Card.Description>

                <Card.Description>
                  Temp max: {Math.ceil(data.main.temp_max)}°
                </Card.Description>
                <Card.Description>
                  Temp min: {Math.ceil(data.main.temp_min)}°
                </Card.Description>
              </div>
            </Card.Content>
            <Card.Content textAlign="center" extra>
              <Button
                basic
                fluid
                color="grey"
                content=" Back"
                onClick={() => {
                  history.push('/')
                }}
              />
            </Card.Content>
          </Card>
        </div>
      ) : (
        <Dimmer active inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
      )}
    </Container>
  )
}

export default CardInfo
