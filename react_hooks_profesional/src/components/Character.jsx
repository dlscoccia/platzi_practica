import React, {
  useState,
  useReducer,
  useMemo,
  useRef,
  useCallback,
} from 'react'
import Search from './Search'
import useCharacters from '../hooks/useCharacters'

const API = 'https://rickandmortyapi.com/api/character/'

const initialState = {
  favorites: [],
}

const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
      }
    default:
      return state
  }
}

const Character = () => {
  const [search, setSearch] = useState('')
  const [favorites, dispatch] = useReducer(favoriteReducer, initialState)
  const searchInput = useRef(null)

  const characters = useCharacters(API)

  const handleClick = (favorite) => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite })
  }

  const handleSearch = useCallback(
    () => setSearch(searchInput.current.value),
    []
  )

  const filteredUsers = useMemo(
    () =>
      characters.filter((user) => {
        return user.name.toLowerCase().includes(search.toLowerCase())
      }),
    [characters, search]
  )

  return (
    <div>
      <ul>
        {favorites.favorites.map((favorite) => (
          <li key={favorite.id}>{favorite.name}</li>
        ))}
      </ul>
      <Search
        search={search}
        searchInput={searchInput}
        handleSearch={handleSearch}
      />

      {filteredUsers.map((character) => (
        <div className='item' key={character.id}>
          <h2>{character.name}</h2>
          <button onClick={() => handleClick(character)}>Agregar</button>
        </div>
      ))}
    </div>
  )
}

export default Character
