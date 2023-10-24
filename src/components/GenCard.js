import {
  Badge,
  BadgeText,
  HStack,
  Heading,
  Pressable,
  VStack
} from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { setCurrentGeneration } from '../redux/generations'
import PokeImage from './PokeImage'

const GenCard = ({
  name = 'Unknown generation',
  id = 1,
  pokemon = 'Unknown pokémon',
  species = 0
}) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  const onPress = () => {
    dispatch(setCurrentGeneration(id))
    navigation.navigate('PokeList')
  }

  return (
    <Pressable
      borderWidth='$1'
      borderRadius='$md'
      borderColor='$coolGray800'
      overflow='hidden'
      flexGrow={ 1 }
      onPress={ onPress }
    >
      { ({ pressed, hovered }) => {
        return (
          <HStack
            space='sm'
            bgColor={ `$coolGray${ pressed ? '400' : hovered ? '300' : '200' }` }
            p='$4'
          >
            <PokeImage
              imageProps={{ size: 'lg' }}
              id={ pokemon }
              color='coolGray'
            />
            <VStack space='xs' >
              <Heading color='$coolGray800'>
                { name }
              </Heading>
              <HStack>
                <Badge
                  px='$2' py='$1'
                  variant='outline'
                  size='sm'
                  borderRadius='$full'
                  borderColor='$coolGray600'
                  bgColor='$coolGray100'
                >
                  <BadgeText
                    color='$coolGray800'
                    fontWeight='$bold'
                  >
                    { species } species
                  </BadgeText>
                </Badge>
              </HStack>
            </VStack>
          </HStack>
        )
      } }
    </Pressable>
  )
}

export default GenCard
