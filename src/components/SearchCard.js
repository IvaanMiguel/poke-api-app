import {
  HStack,
  Pressable,
  Text
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { setId } from '../redux/pokemon'

import PokeImage from './PokeImage'
import { formatName } from '../utils'

const SearchCard = ({ id = 1, name = '' }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const search = useSelector(state => state.search)
  const { searchText } = search
  const pokedex = useSelector(state => state.pokedex)
  const color = pokedex.colors[name]
  const properName = formatName(name)

  return (
    <Pressable
      onPress={ () => {
        dispatch(setId(id))
        navigation.navigate('PokeInfo')
      } }
    >
      { ({ pressed, hovered }) => {
        return (
          <HStack
            p='$2'
            borderRadius='$md'
            borderWidth='$1'
            alignItems='center'
            space='sm'
            borderColor={ `$${ color }600` }
            bgColor={ `$${ color }${ pressed ? '400' : hovered ? '300' : '200' }` }
          >
            <PokeImage
              id={ id }
              color={ color }
              imageProps={{
                size: 'sm'
              }}
            />
            <Text color={ `$${ color }800` }>
              <Text bold underline color={ `$${ color }800` }>
                { properName.slice(0, searchText.length) }
              </Text>
              { properName.slice(searchText.length) }
            </Text>
          </HStack>
        )
      } }
    </Pressable>
  )
}

export default SearchCard
