import {
  HStack,
  Heading,
  Text,
  VStack
} from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'

const SpeciesDisplay = () => {
  const pokemon = useSelector(state => state.pokemon)
  const { info, species } = pokemon

  return (
    <VStack
      borderRadius='$md'
      bgColor='white'
      p='$4'
      space='lg'
    >
      <Text
        p='$3'
        borderColor={ `$warmGray300` }
        borderWidth='$1'
        borderRadius='$md'
        size='sm'
        textAlign='center'
        color='$warmGray500'
      >
        { species.flavor_text_entries
            .findLast(text => text.language.name === 'en')?.flavor_text || ''
            .replace(/[\n\f\r\t]/g, " ") }
      </Text>
      <HStack space='md'>
        <VStack flexGrow={ 1 } space='xs'>
          <Heading
            size='xs'
            textAlign='center'
            color='$warmGray400'
          >
            Height
          </Heading>
          <Text
            textAlign='center'
            borderWidth='$1'
            borderColor={ `$warmGray300` }
            borderRadius='$md'
            color='$warmGray500'
            p='$2'
          >
            { info.height / 10 } m
          </Text>
        </VStack>
        <VStack flexGrow={ 1 } space='xs'>
          <Heading
            size='xs'
            textAlign='center'
            color='$warmGray400'
          >
            Weight
          </Heading>
          <Text
            textAlign='center'
            borderWidth='$1'
            borderColor={ `$warmGray300` }
            borderRadius='$md'
            color='$warmGray500'
            p='$2'
          >
            { info.weight / 10 } kg
          </Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default SpeciesDisplay
