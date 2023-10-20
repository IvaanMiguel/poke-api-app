import { VStack } from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'
import PokeAPI from 'pokedex-promise-v2'
import { useEffect, useState } from 'react'

import BasicDisplay from '../components/pokeInfo/BasicDisplay'
import SpeciesDisplay from '../components/pokeInfo/SpeciesDisplay'
import AbilitiesDisplay from '../components/pokeInfo/AbilitiesDisplay'
import Awaiting from '../components/Awaiting'
import SectionContainer from '../components/SectionContainer'

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
      p='$1'
      space='sm'
      bgColor={ `$${pokeColor}100` }
      h='100%'
    >
      <Awaiting awaitingProp={ species }>
        <BasicDisplay
          id={ pokeInfo.id }
          order={ pokeInfo.order }
          name={ pokeInfo.name }
          types={ pokeInfo.types }
          genus={ species?.genera.find(genus => genus.language.name === 'en')?.genus }
        />
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
      </Awaiting>
    </VStack>
  )
}

export default PokeInfo
