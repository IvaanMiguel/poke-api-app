import { Heading, VStack } from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'

const SectionContainer = ({ heading = '', children }) => {
  const pokemon = useSelector(state => state.pokemon)
  const { color } = pokemon

  return (
    <VStack space='xs'>
      <Heading
        textAlign='center'
        size='sm'
        color={ `$${ color }800` }
      >
        { heading }
      </Heading>
      { children }
    </VStack>
  )
}

export default SectionContainer
