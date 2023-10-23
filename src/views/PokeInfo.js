import {
  ScrollView,
  VStack,
  View
} from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'

import BasicDisplay from '../components/pokeInfo/BasicDisplay'
import SpeciesDisplay from '../components/pokeInfo/SpeciesDisplay'
import AbilitiesDisplay from '../components/pokeInfo/AbilitiesDisplay'
import SectionContainer from '../components/SectionContainer'
import StatsDisplay from '../components/pokeInfo/StatsDisplay'
import AbilitySheet from '../components/pokeInfo/AbilitySheet'

const PokeInfo = () => {
  const pokemon = useSelector(state => state.pokemon)
  const { color } = pokemon

  return (
    <>
      <VStack h='100%' bgColor={ `$${ color }100` }>
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
      <AbilitySheet />
    </>
  )
}

export default PokeInfo
