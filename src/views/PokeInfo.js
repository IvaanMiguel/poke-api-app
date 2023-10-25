import {
  ScrollView,
  VStack,
  View
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PokeAPI from 'pokedex-promise-v2'

import BasicDisplay from '../components/pokeInfo/BasicDisplay'
import SpeciesDisplay from '../components/pokeInfo/SpeciesDisplay'
import AbilitiesDisplay from '../components/pokeInfo/AbilitiesDisplay'
import SectionContainer from '../components/SectionContainer'
import StatsDisplay from '../components/pokeInfo/StatsDisplay'
import AbilitySheet from '../components/pokeInfo/AbilitySheet'

import { setInfo, setSpecies, setName } from '../redux/pokemon'
import Awaiting from '../components/Awaiting'
import { getLocalizedString } from '../utils'

const Pokedex = new PokeAPI()

const PokeInfo = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  const { id, species } = pokemon
  const pokedex = useSelector(state => state.pokedex)
  const { colors } = pokedex

  const [pokeInfo, setPokeInfo] = useState()
  const [pokeSpecies, setPokeSpecies] = useState()

  useEffect(() => {
    const fetchPokeInfo = async () => {
      const pokemon = await Pokedex.getPokemonByName(id)
      setPokeInfo(pokemon)
      dispatch(setInfo(pokemon))
    }

    const fetchSpecies = async () => {
      const species = await Pokedex.getPokemonSpeciesByName(id)
      setPokeSpecies(species)
      dispatch(setSpecies(species))
      dispatch(setName(getLocalizedString(species.names).name))
    }

    fetchPokeInfo()
    fetchSpecies()
  }, [])

  return (
    <>
      <Awaiting awaitingProp={ pokeInfo && pokeSpecies }>
        <VStack
          h='100%'
          bgColor={ `$${ colors[species?.name] }100` }
        >
          <View p='$1'>
            <BasicDisplay />
          </View>
          <ScrollView>
            <VStack space='sm' p='$1'>
              <SectionContainer heading='Species'>
                <SpeciesDisplay />
              </SectionContainer>
              <SectionContainer heading='Abilities'>
                <AbilitiesDisplay />
              </SectionContainer>
              <SectionContainer heading='Base stats'>
                <StatsDisplay  />
              </SectionContainer>
            </VStack>
          </ScrollView>
        </VStack>
      </Awaiting>
      <AbilitySheet />
    </>
  )
}

export default PokeInfo
