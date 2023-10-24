import {
  Center,
  HStack,
  Icon,
  InfoIcon,
  Pressable,
  Text,
  VStack
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { setShowAbilitySheet } from '../../redux/abilitySheet'
import PokeAPI from 'pokedex-promise-v2'

import { setAbilities as setPokemonAbilities, } from '../../redux/pokemon'
import { setAbilitySheetId } from '../../redux/abilitySheet'

import Awaiting from '../Awaiting'
import { getLocalizedString } from '../../utils'

const Pokedex = new PokeAPI()

const AbilitiesDisplay = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  const { color, info } = pokemon

  const [abilities, setAbilities] = useState()

  useEffect(() => {
    const fetchAbilities = async () => {
      const abilitiesNames = info.abilities.map(ability => ability.ability.name)
      const abilitiesRes = await Pokedex.getAbilityByName(abilitiesNames)

      setAbilities(abilitiesRes)
      dispatch(setPokemonAbilities(abilitiesRes))
    }

    fetchAbilities()
  }, [])

  return (
    <VStack
      borderRadius='$md'
      bgColor='white'
      p='$4'
      space='md'
    >
      <Awaiting awaitingProp={ abilities }>
        { abilities?.map((ability, i) => {
          return <Pressable
            key={ i }
            borderWidth='$1'
            borderColor={ `$${ color }600` }
            borderRadius='$md'
            overflow='hidden'
            onPress={ () => {
              dispatch(setShowAbilitySheet(true))
              dispatch(setAbilitySheetId(i))
            } }
          >
            {({ hovered, pressed }) => {
              return <HStack
                borderRadius='$md'
                bgColor={ `$${ color }${ pressed ? '400' : hovered ? '300' : '200' }` }
                alignItems='center'
              >
                { info.abilities[i].is_hidden ? (
                  <Center
                    px='$3' py='$1'
                    bgColor={ `$${ color }800` }
                    position='absolute'
                  >
                    <Text color='white' size='xs'>Hidden</Text>
                  </Center>
                ) : null }
                <Text
                  p='$1'
                  size='sm'
                  textAlign='center'
                  color={ `$${ color }800` }
                  fontWeight='$500'
                  flexGrow={ 1 }
                >
                  { getLocalizedString(ability.names).name }
                </Text>
                <Icon
                  as={ InfoIcon }
                  size='sm'
                  position='absolute'
                  right='$1'
                  color={ `$${ color }800` }
                />
              </HStack>
            }}
          </Pressable>
        }) }
      </Awaiting>
    </VStack>
  )
}

export default AbilitiesDisplay
