import axios from 'axios'

export async function updateAllWeather() {
  if (localStorage.length === 0) {
    localStorage.setItem('cities', '[]')
  }
  const data = JSON.parse(localStorage.getItem('cities'))
  let array = data.map((item) => item.id)

  if (!data) return []
  if (array.length === 0) return []

  let res = await axios.get(
    `/group?appid=5bce41e220e023ec6710ea4f4bc73c95&units=metric&id=${array}`
  )

  return res.data.list
}
