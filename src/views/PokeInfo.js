import { ScrollView, VStack, View } from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'
import PokeAPI from 'pokedex-promise-v2'
import { useEffect, useState } from 'react'

import BasicDisplay from '../components/pokeInfo/BasicDisplay'
import SpeciesDisplay from '../components/pokeInfo/SpeciesDisplay'
import AbilitiesDisplay from '../components/pokeInfo/AbilitiesDisplay'
import Awaiting from '../components/Awaiting'
import SectionContainer from '../components/SectionContainer'
import StatsDisplay from '../components/pokeInfo/StatsDisplay'

const Pokedex = new PokeAPI()

const PokeInfo = ({ route }) => {
  const pokeInfo = route.params.pokeInfo
  const color = useSelector(state => state.pokeColor)
  const { pokeColor } = color

  const [species, setSpecies] = useState()

  useEffect(() => { fetchPokemonSpecies() }, [])

  const fetchPokemonSpecies = async () => {
    const speciesRes = await Pokedex.getPokemonSpeciesByName(pokeInfo.name)
    setSpecies(speciesRes)

    console.log(pokeInfo);
  }

  return (
    <VStack
      bgColor={ `$${pokeColor}100` }
      h='100%'
    >
      <Awaiting awaitingProp={ species }>
        <View p='$1'>
          <BasicDisplay
            id={ pokeInfo.id }
            order={ pokeInfo.order }
            name={ pokeInfo.name }
            types={ pokeInfo.types }
            genus={ species?.genera.find(genus => genus.language.name === 'en')?.genus }
          />
        </View>
        <ScrollView>
          <VStack space='sm' p='$1'>
            <SectionContainer heading='Species'>
              <SpeciesDisplay
                description={
                  (species?.flavor_text_entries
                    .findLast(text => text.language.name === 'en')?.flavor_text || '')
                    .replace(/[\n\f\r\t]/g, " ") 
                }
                weight={ pokeInfo.weight }
                height={ pokeInfo.height }
              />
            </SectionContainer>
            <SectionContainer heading='Abilities'>
              <AbilitiesDisplay
                abilitiesInfo={
                  pokeInfo?.abilities.map(ability => {
                    return {
                      name: ability.ability.name,
                      isHidden: ability.is_hidden
                    }
                  })
                }
              />
            </SectionContainer>
            <SectionContainer heading='Base Stats'>
              <StatsDisplay stats={ pokeInfo.stats } />
            </SectionContainer>
          </VStack>
        </ScrollView>
      </Awaiting>
    </VStack>
  )
}

export default PokeInfo
