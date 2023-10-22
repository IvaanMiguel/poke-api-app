import { ScrollView, VStack, View } from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'

import BasicDisplay from '../components/pokeInfo/BasicDisplay'
import SpeciesDisplay from '../components/pokeInfo/SpeciesDisplay'
import AbilitiesDisplay from '../components/pokeInfo/AbilitiesDisplay'
import SectionContainer from '../components/SectionContainer'
import StatsDisplay from '../components/pokeInfo/StatsDisplay'

const PokeInfo = () => {
  const pokemon = useSelector(state => state.pokemon)
  const { color } = pokemon

  return (
    <VStack
      bgColor={ `$${ color }100` }
      h='100%'
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
          <SectionContainer heading='Base Stats'>
            <StatsDisplay  />
          </SectionContainer>
        </VStack>
      </ScrollView>
    </VStack>
  )
}

export default PokeInfo
