import {
  Box,
  FlatList,
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import PokeAPI from 'pokedex-promise-v2'
import PokeCard from '../components/PokeCard'
import { themeColors } from '../constants'

const Pokedex = new PokeAPI()

const PokeList = ({ route }) => {
  const { id } = route.params

  const [pokemons, setPokemons] = useState([])

  useEffect(() => { fetchGenerationPokemons() }, [])

  const fetchGenerationPokemons = async () => {
    const generation =  await Pokedex.getGenerationByName(id)
    let _pokemons = []

    const speciesId = generation.pokemon_species.map(species => {
      return species.url.match(/\/(\d+)\/$/)[1]
    })

    speciesId.forEach(async _speciesId => {
      const pokemonSpecies = await Pokedex.getPokemonSpeciesByName(_speciesId)

      _pokemons = [..._pokemons, {
        id: _speciesId,
        name: pokemonSpecies.names.find(name => name.language.name === 'en').name,
        color: pokemonSpecies.color.name
      }]
      setPokemons([..._pokemons])
    })
  }

  return (
    <FlatList
      p='$1'
      data={ pokemons }
      renderItem={ e => (
        <PokeCard
          id={ e.item.id }
          name={ e.item.name }
          color={ themeColors[e.item.color] ?? e.item.color }
        />
      ) }
      ItemSeparatorComponent={() => <Box height='$2' />}
    />
  )
}

export default PokeList
