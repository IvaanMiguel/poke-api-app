import { Heading, VStack } from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'

const SectionContainer = ({
  heading = '',
  children
} = {}) => {
  const color = useSelector(state => state.pokeColor)
  const { pokeColor } = color

  return (
    <VStack space='xs'>
      <Heading
        textAlign='center'
        size='sm'
        color={ `$${pokeColor}800` }
      >
        { heading }
      </Heading>
      { children }
    </VStack>
  )
}

export default SectionContainer
