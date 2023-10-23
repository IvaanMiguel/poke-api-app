import {
  Box,
  ScrollView,
  VStack
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import PokeAPI from 'pokedex-promise-v2'

import SearchBar from '../components/SearchBar'
import GenCard from '../components/GenCard'

const Pokedex = new PokeAPI()

const Home = () => {
  const [generations, setGenerations] = useState([])

  useEffect(() => {
    const fetchGenerations = async () => {
      const generationsId = Array(9).fill().map((_, i) => i + 1)
      const generationsRes = await Pokedex.getGenerationByName(generationsId)
      setGenerations(generationsRes)
    }

    fetchGenerations()
  }, [])

  return (
    <VStack height='$full'>
      <SearchBar p='$4'/>
      <ScrollView>
        <Box
          px='$4' pb='$4'
          gap='$3'
        >
          { generations.map((generation, i) => (
            <GenCard
              key={ i }
              name={ generation.names.find(name => name.language.name === 'en').name }
              pokemon = { generation.pokemon_species[0].url.match(/\/(\d+)\/$/)[1] }
              species = { generation.pokemon_species.length }
              id={ generation.id }
            />
          )) }
        </Box>
      </ScrollView>
    </VStack>
  )
}

export default Home
