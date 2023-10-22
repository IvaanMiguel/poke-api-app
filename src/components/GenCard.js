import { Box, Pressable, Text } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'

import { setGenerationId } from '../redux/generation'

const GenCard = ({ name = 'Unknown Generation', id = 1 }) => {
  const navigation = useNavigation()
  const dispatch = useDispatch()

  return (
    <Pressable
      onPress={ () => {
        dispatch(setGenerationId(id))
        navigation.navigate('PokeList')
      } }
      borderWidth='$2'
    >
      {({ pressed }) => {
        return (
          <Box p='$4' bgColor={ pressed ? '$indigo' : '$green' }>
            <Text color='$white'>{ name }</Text>
          </Box>
        )
      }}
    </Pressable>
  )
}

export default GenCard
