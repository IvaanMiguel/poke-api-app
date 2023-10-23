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
import { setPokemon } from '../redux/pokemon'
import PokeTypes from './PokeTypes'
import Awaiting from './Awaiting'
import PokeImage from './PokeImage'

const Pokedex = new PokeAPI()

const PokeCard = ({
  id = 0,
  name = '',
  color = '',
  species = null
}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const [pokeInfo, setPokeInfo] = useState({})

  useEffect(() => {
    fetchPokeInfo()
  }, [])

  const fetchPokeInfo = async () => {
    const pokemon = await Pokedex.getPokemonByName(id)
    setPokeInfo(pokemon)
  }

  return (
    <Pressable
      onPress={() => {
        dispatch(setPokemon({
          name: name,
          color: color,
          info: pokeInfo,
          species: species
        }))

        navigation.navigate('PokeInfo')
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
            <PokeImage id={ id } color={ color } />
            <VStack space='md'>
              <Heading size='md' color={ `$${ color }800` }>
                { name }
              </Heading>
              <Awaiting
                awaitingProp={ Object.keys(pokeInfo).length }
                spinnerProps={{
                  alignItems: 'start'
                }}
              >
                { pokeInfo.types ? (
                  <PokeTypes types={ pokeInfo.types } color={ color } />
                ) : null }
              </Awaiting>
            </VStack>
          </HStack>
        )
      }}
    </Pressable>
  )
}

export default PokeCard
