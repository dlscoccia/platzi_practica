import { useState, useEffect } from 'react'

const useCharacters = (url) => {
  const [characters, setCharacters] = useState([])

  const getData = async () => {
    const res = await fetch(url)
    const data = await res.json()
    setCharacters(data.results)
  }

  useEffect(() => {
    getData()
  }, [url])

  return characters
}

export default useCharacters
