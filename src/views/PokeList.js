import {
  Box,
  FlatList
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import PokeAPI from 'pokedex-promise-v2'

import PokeCard from '../components/PokeCard'
import { themeColors } from '../constants'

const Pokedex = new PokeAPI()

const PokeList = () => {
  const generations = useSelector(state => state.generations)
  const { currentGeneration, data } = generations

  const [pokemons, setPokemons] = useState([])

  useEffect(() => {
    const fetchGenerationPokemons = async () => {
      const generation = data[currentGeneration - 1]
  
      const speciesId = generation.pokemon_species.map(species => {
        return species.url.match(/\/(\d+)\/$/)[1]
      })
  
      const species = await Pokedex.getPokemonSpeciesByName(speciesId)

      setPokemons(species.map(species => {
        return {
          id: species.id,
          name: species.names.find(name => name.language.name === 'en').name,
          color: species.color.name,
          species: species
        }
      }))
    }

    fetchGenerationPokemons()
  }, [])

  return (
    <FlatList
      p='$1'
      data={ pokemons }
      renderItem={ e => (
        <PokeCard
          id={ e.item.id }
          name={ e.item.name }
          color={ themeColors[e.item.color] ?? e.item.color }
          species={ e.item.species }
        />
      ) }
      ItemSeparatorComponent={() => <Box height='$2' />}
    />
  )
}

export default PokeList
