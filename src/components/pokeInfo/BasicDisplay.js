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

const BasicDisplay = () => {
  const pokemon = useSelector(state => state.pokemon)
  const { color, name, info, species } = pokemon

  return (
    <HStack
      p='$4'
      borderRadius='$md'
      justifyContent='space-between' 
      bgColor={ `$${ color }200` }
      space='lg'
    >
      <VStack
        flexGrow={ 1 }
        space='md'
      >
        <HStack
          alignItems='center'
          justifyContent='space-between'
          bgColor={ `$${ color }300` }
          px='$2'
          borderRadius='$md'
        >
          <Heading
            size='xl'
            color={ `$${ color }800` }
          >
            { name }
          </Heading>
          <Text color={ `$${ color }800` }>
            #{ `${ info.order }`.padStart(3, '0') }
          </Text>
        </HStack>
        <VStack space='xs'>
          <Text
            size='sm'
            color={ `$${ color }800` }
          >
            { species.genera.find(genus => genus.language.name === 'en').genus }
          </Text>
          <PokeTypes types={ info.types } color={ color } />
        </VStack>
      </VStack>
      <Center>
        <View
          position='absolute'
          w={ 90 } h={ 90 }
          bgColor={ `$${ color }100` }
          borderRadius='$full'
        />
        <Image
          size='lg'
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${info.id}.png`
          }}
          alt='Pokemon image.'
        />
      </Center>
    </HStack>
  )
}

export default BasicDisplay
