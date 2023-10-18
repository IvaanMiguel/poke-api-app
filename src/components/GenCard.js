import { Box, Pressable, Text } from '@gluestack-ui/themed'
import { useNavigation } from '@react-navigation/native'

const GenCard = props => {
  const navigation = useNavigation()

  return (
    <Pressable
      onPress={() => navigation.navigate('PokeList', { id: props.id })}
      borderWidth='$2'
    >
      {({ pressed }) => {
        return (
          <Box p='$4' bgColor={ pressed ? '$indigo' : '$green' }>
            <Text color='$white'>{ props.name }</Text>
          </Box>
        )
      }}
    </Pressable>
  )
}

export default GenCard
