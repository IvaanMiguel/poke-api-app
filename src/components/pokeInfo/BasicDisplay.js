import {
  Box,
  HStack,
  Heading,
  Image,
  Text,
  VStack
} from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'
import PokeTypes from '../PokeTypes'

const BasicDisplay = props => {
  const color = useSelector(state => state.pokeColor)
  const { pokeColor } = color

  return (
    <HStack
      p='$4'
      borderRadius='$md'
      justifyContent='space-between' 
      bgColor={ `$${pokeColor}200` }
      space='lg'
    >
      <VStack flexGrow='1' space='md'>
        <HStack
          alignItems='center'
          justifyContent='space-between'
          bgColor={ `$${pokeColor}300` }
          px='$2'
          borderRadius='$md'
          borderWidth='$1'
          borderColor={ `$${pokeColor}400` }
        >
          <Heading size='xl' color={ `$${pokeColor}800` }>
            { props.pokeName }
          </Heading>
          <Text color={ `$${pokeColor}800` }>
            #{ `${props.pokeOrder}`.padStart(3, '0') }
          </Text>
        </HStack>
        <PokeTypes types={ props.pokeTypes } color={ pokeColor } />
      </VStack>
      <Box p='$2' bgColor={ `$${pokeColor}100` } borderRadius='$full'>
        <Image
          size='md'
          source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.pokeId}.png` }}
          alt='Pokemon image.'
        />
      </Box>
    </HStack>
  )
}

export default BasicDisplay
