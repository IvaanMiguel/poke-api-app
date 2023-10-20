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
import PokeAPI from 'pokedex-promise-v2'

import Awaiting from '../Awaiting'

const Pokedex = new PokeAPI()

const AbilitiesDisplay = ({
  abilitiesInfo = []
} = {}) => {
  const color = useSelector(state => state.pokeColor)
  const { pokeColor } = color

  const [abilities, setAbilities] = useState()

  useEffect(() => { fetchAbilities() }, [])

  const fetchAbilities = async () => {
    const abilitiesRes = await Pokedex.getAbilityByName(abilitiesInfo.map(ability => ability.name))
    setAbilities(abilitiesRes)

    console.log(abilitiesRes);
  }

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
            borderColor={ `$${pokeColor}600` }
            borderRadius='$md'
            overflow='hidden'
          >
            {({ hovered, pressed }) => {
              return <HStack
                borderRadius='$md'
                bgColor={ `$${pokeColor}${ pressed ? '400' : hovered ? '300' : '200' }` }
                alignItems='center'
              >
                { abilitiesInfo[i].isHidden ? (
                  <Center
                    px='$3' py='$1'
                    bgColor={ `$${pokeColor}800` }
                    position='absolute'
                  >
                    <Text color='white' size='xs'>Hidden</Text>
                  </Center>
                ) : null }
                <Text
                  p='$1'
                  size='sm'
                  textAlign='center'
                  color={ `$${pokeColor}800` }
                  fontWeight='$500'
                  flexGrow='1'
                >
                  { ability.names.find(name => name.language.name === 'en').name }
                </Text>
                <Icon
                  as={ InfoIcon }
                  size='sm'
                  position='absolute'
                  right='$1'
                  color={ `$${pokeColor}800` }
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
