import {
  FlatList,
  VStack,
  View
} from '@gluestack-ui/themed'
import { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import PokeAPI from 'pokedex-promise-v2'

import { setData } from '../redux/generations'
import { setAllResults } from '../redux/search'
import { setColors, setTypes } from '../redux/pokedex'

import SearchBar from '../components/SearchBar'
import GenCard from '../components/GenCard'
import SearchList from '../components/SearchList'
import { getIdFromUrl, getLocalizedString } from '../utils'

const Pokedex = new PokeAPI()

const Home = () => {
  const dispatch = useDispatch()
  const search = useSelector(state => state.search)
  const { searchText } = search

  const [generations, setGenerations] = useState([])

  useEffect(() => {
    const fetchGenerations = async () => {
      const generationsId = Array(9).fill().map((_, i) => i + 1)
      const generationsRes = await Pokedex.getGenerationByName(generationsId)
      setGenerations(generationsRes)
      dispatch(setData(generationsRes))
    }

    const fetchPokemon = async () => {
      const pokemons = await Pokedex.getPokemonSpeciesList()
      dispatch(setAllResults(pokemons.results))
    }

    const fetchPokemonColors = async () => {
      const colorsRes = await Pokedex.getPokemonColorByName(Array(10).fill().map((_, i) => i + 1))
      dispatch(setColors(colorsRes))
    }

    const fetchPokemonTypes = async () => {
      const typesRes = await Pokedex.getTypeByName(Array(18).fill().map((_, i) => i + 1))
      dispatch(setTypes(typesRes))
    }

    fetchGenerations()
    fetchPokemon()
    fetchPokemonColors()
    fetchPokemonTypes()
  }, [])

  const renderItem = useCallback(({ item }) => (
    <GenCard
      name={ getLocalizedString(item.names).name }
      pokemon={ getIdFromUrl(item.pokemon_species[0].url) }
      species={ item.pokemon_species.length }
      id={ item.id }
    />
  ), [])

  const ItemSeparatorComponent = useCallback(h => <View h={ `$${h}` } />, [])

  const keyExtractor = item => `${item.id}`

  return (
    <VStack height='$full'>
      <View p='$4'>
        <SearchBar/>
      </View>
      { !searchText ? (
        <FlatList
          px='$4' pb='$4'
          data={ generations }
          renderItem={ renderItem }
          keyExtractor = { keyExtractor }
          ItemSeparatorComponent={ ItemSeparatorComponent(3) }
          ListFooterComponent={ ItemSeparatorComponent(4) }
        />
      ) : (
        <SearchList />
      ) }
    </VStack>
  )
}

export default Home
