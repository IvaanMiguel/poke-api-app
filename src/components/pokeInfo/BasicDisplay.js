import {
  HStack,
  Heading,
  Text,
  VStack
} from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'
import PokeTypes from '../PokeTypes'
import PokeImage from '../PokeImage'
import { getLocalizedString } from '../../utils'

const BasicDisplay = () => {
  const pokemon = useSelector(state => state.pokemon)
  const { name, info, species } = pokemon
  const pokedex = useSelector(state => state.pokedex)
  const color = pokedex.colors[species.name]

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
            #{ `${ info?.order }`.padStart(3, '0') }
          </Text>
        </HStack>
        <VStack space='xs'>
          <Text
            size='sm'
            color={ `$${ color }800` }
          >
            { getLocalizedString(species.genera)?.genus }
          </Text>
          <PokeTypes id={ species.id } color={ color } />
        </VStack>
      </VStack>
      <PokeImage
        id={ info?.id }
        color={ color }
        imageProps={{ size: 'lg' }}
      />
    </HStack>
  )
}

export default BasicDisplay
