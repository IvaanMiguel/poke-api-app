import {
  HStack,
  Heading,
  Text,
  VStack
} from '@gluestack-ui/themed'
import Awaiting from '../Awaiting'

const SpeciesDisplay = ({
  weight = 0,
  height = 0,
  description = ''
} = {}) => {
  
  return (
    <VStack
      borderRadius='$md'
      bgColor='white'
      p='$4'
      space='lg'
    >
      <Awaiting
        size='large'
        awaitingProp={ description }
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
          { description }
        </Text>
      </Awaiting>
      <HStack space='md'>
        <VStack flexGrow='1' space='xs'>
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
            { height / 10 } m
          </Text>
        </VStack>
        <VStack flexGrow='1' space='xs'>
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
            { weight / 10 } kg
          </Text>
        </VStack>
      </HStack>
    </VStack>
  )
}

export default SpeciesDisplay
