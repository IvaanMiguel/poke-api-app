import {
  Box,
  FlatList,
  ScrollView,
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

    generation.pokemon_species.forEach(async species => {
      const pokemonSpecies = await Pokedex.getPokemonSpeciesByName(species.name)
      const defaultPokemon = pokemonSpecies.varieties.find(variety => variety.is_default)
      const { name }  = defaultPokemon.pokemon

      _pokemons = [..._pokemons, { name: name, color: pokemonSpecies.color.name }]
      setPokemons([..._pokemons])
    })
  }

  return (
    <ScrollView>
      <FlatList
        p='$1'
        data={ pokemons }
        renderItem={ e => (
          <PokeCard
            name={ e.item.name }
            color={ themeColors[e.item.color] ?? e.item.color }
          />
        ) }
        ItemSeparatorComponent={() => <Box height='$2' />}
      />
    </ScrollView>
  )
}

export default PokeList
