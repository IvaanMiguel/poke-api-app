import {
  Center,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
  View
} from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'
import PokeTypes from '../PokeTypes'
import Awaiting from '../Awaiting'

const BasicDisplay = ({
  id = 1,
  order = 0,
  name = 'Bulbasaur placeholder',
  types = [],
  genus = ''
} = {}) => {
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
      <VStack
        flexGrow='1'
        space='md'
      >
        <HStack
          alignItems='center'
          justifyContent='space-between'
          bgColor={ `$${pokeColor}300` }
          px='$2'
          borderRadius='$md'
        >
          <Heading
            size='xl'
            color={ `$${pokeColor}800` }
          >
            { name }
          </Heading>
          <Text color={ `$${pokeColor}800` }>
            #{ `${order}`.padStart(3, '0') }
          </Text>
        </HStack>
        <VStack space='xs'>
          <Awaiting
            spinnerProps={{
              alignItems: 'start'
            }}
            awaitingProp={ genus }
          >
            <Text
              size='sm'
              color={ `$${pokeColor}800` }
            >
              { genus }
            </Text>
          </Awaiting>
          <PokeTypes types={ types } color={ pokeColor } />
        </VStack>
      </VStack>
      <Center>
        <View
          position='absolute'
          w={ 90 } h={ 90 }
          bgColor={ `$${pokeColor}100` }
          borderRadius='$full'
        />
        <Image
          size='lg'
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
          }}
          alt='Pokemon image.'
        />
      </Center>
    </HStack>
  )
}

export default BasicDisplay
