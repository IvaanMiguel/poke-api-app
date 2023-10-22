import {
  Center,
  HStack,
  Heading,
  Image,
  Pressable,
  VStack,
  View
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import PokeAPI from 'pokedex-promise-v2'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { setColor } from '../redux/pokeColorReducer'
import PokeTypes from './PokeTypes'
import Awaiting from './Awaiting'

const Pokedex = new PokeAPI()

const PokeCard = ({ name = '', color = '' } = {}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [pokeInfo, setPokeInfo] = useState({})

  useEffect(() => {
    fetchPokeInfo()
  }, [])

  const fetchPokeInfo = async () => {
    const pokemon = await Pokedex.getPokemonByName(name)
    setPokeInfo(pokemon)
  }

  return (
    <Pressable
      onPress={() => {
        dispatch(setColor({ color: color }))
        navigation.navigate('PokeInfo', { pokeInfo: pokeInfo })
      }}
    >
      {({ pressed, hovered }) => {
        return (
          <HStack
            p='$4'
            borderRadius='$lg'
            space='md'
            borderWidth='$1'
            borderColor={ `$${color}600` }
            bgColor={ `$${color}${ pressed ? '400' : hovered ? '300' : '200' }` }
            alignItems='center'
          >
            <Awaiting
              awaitingProp={ Object.keys(pokeInfo).length }
              spinnerProps={{
                w: '$full',
                textAlign: 'center'
              }}
            >
              { pokeInfo.id ? (
                <Center>
                  <View
                    position='absolute'
                    w={ 70 } h={ 70 }
                    bgColor={ `$${color}100` }
                    borderRadius='$full'
                  />
                  <Image
                    source={{
                      uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeInfo.id}.png`
                    }}
                    alt='Pokemon image.'
                  />
                </Center>
              ) : null }
              <VStack space='md'>
                <Heading size='md' color={ `$${color}800` }>
                  { pokeInfo.name }
                </Heading>
                { pokeInfo.types ? (
                  <PokeTypes types={ pokeInfo.types } color={ color } />
                ) : null }
              </VStack>
            </Awaiting>
          </HStack>          
        )
      }}
    </Pressable>
  )
}

export default PokeCard
