import {
  Box,
  FlatList
} from '@gluestack-ui/themed'
import { useCallback, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import PokeCard from '../components/PokeCard'
import { getIdFromUrl } from '../utils'

const PokeList = () => {
  const generations = useSelector(state => state.generations)
  const { currentGeneration, data } = generations

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchGenerationPokemons = async () => {
      const generation = data[currentGeneration - 1]
  
      setPokemons(generation.pokemon_species.map(species => {
        return {
          id: getIdFromUrl(species.url),
          name: species.name
        }
      }))
    }

    fetchGenerationPokemons()
  }, [])

  const renderItem = useCallback(({ item }) => (
    <PokeCard
      id={ item.id }
      name={ item.name }
    />
  ), [])

  const ItemSeparatorComponent = useCallback(() => <Box height='$2' />, [])

  const keyExtractor = useCallback(item => `${item.id}`, [])

  return (
    <FlatList
      p='$1'
      data={ pokemons }
      maxToRenderPerBatch={ 5 }
      initialNumToRender={ 8 }
      windowSize={ 11 }
      renderItem={ renderItem }
      ItemSeparatorComponent={ ItemSeparatorComponent }
      keyExtractor={ keyExtractor }
    />
  )
}

export default PokeList
