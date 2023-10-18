import {
  Box,
  FlatList,
  View
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import PokeAPI from 'pokedex-promise-v2'
import PokeCard from '../components/PokeCard'

const Pokedex = new PokeAPI()

const PokeList = ({ route }) => {
  const { id } = route.params

  const [pokemons, setPokemons] = useState([])

  useEffect(() => { fetchGenerationPokemons() }, [])

  const fetchGenerationPokemons = async () => {
    const generation =  await Pokedex.getGenerationByName(id)

    // const _pokemons = generation.pokemon_species.map(species => {
    //   return {
    //     name: species.name,
    //     id: species.url.match(/\/(\d+)\/$/)[1]
    //   }
    // })

    // setPokemons(_pokemons)

    // console.log(ids);

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
    <View>
      <FlatList
        p='$2'
        data={ pokemons }
        renderItem={ e => <PokeCard /* id={ e.item.id } name={ e.item.name } */ name={ e.item.name } color={ e.item.color } /> }
        ItemSeparatorComponent={() => <Box height='$1' />}
      />
    </View>
  )
}

export default PokeList
