import {
  HStack,
  Heading,
  Pressable,
  VStack
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'

import PokeTypes from './PokeTypes'
import PokeImage from './PokeImage'

import { setId } from '../redux/pokemon'
import { formatName } from '../utils'

const PokeCard = ({ id = 0, name = 'Unknown name' }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const pokedex = useSelector(state => state.pokedex)
  const color = pokedex.colors[name]

  return (
    <Pressable
      onPress={ () => {
        dispatch(setId(id))
        navigation.navigate('PokeInfo')
      } }
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
                { formatName(name) }
              </Heading>
              <PokeTypes id={ id } color={ color } />
            </VStack>
          </HStack>
        )
      }}
    </Pressable>
  )
}

export default PokeCard
