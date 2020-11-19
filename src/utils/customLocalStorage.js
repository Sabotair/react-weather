export function addItemStorage(item) {
  if (!localStorage.getItem('cities')) {
    localStorage.setItem('cities', '[]')
  }
  const data = JSON.parse(localStorage.getItem('cities'))
  data.push(item)

  localStorage.setItem('cities', JSON.stringify(data))
}

export function deleteItemStorage(id) {
  const data = JSON.parse(localStorage.getItem('cities'))
  const updateData = data.filter((item) => item.id !== id)

  localStorage.setItem('cities', JSON.stringify(updateData))
}
export function updateItemStorage(item) {
  const data = JSON.parse(localStorage.getItem('cities'))
  const updateData = data.map((city) => {
    if (city.id === item.id) {
      return item
    }
    return city
  })

  localStorage.setItem('cities', JSON.stringify(updateData))
}
