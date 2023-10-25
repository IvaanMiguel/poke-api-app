import {
  Badge,
  BadgeText,
  HStack
} from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'

const PokeTypes = ({ color = 'red', id }) => {
  const pokedex = useSelector(state => state.pokedex)
  
  return (
    <HStack space='sm'>
      { pokedex.types[id]?.map((type, i) => (
        <Badge
          key={ i }
          px='$2' py='$1'
          variant='outline'
          size='sm'
          borderRadius='$full'
          borderColor={ `$${ color }600` }
          bgColor={ `$${ color }100` }
        >
          <BadgeText
            color={ `$${ color }900` }
            fontWeight='$bold'
          >
            { type }
          </BadgeText>
        </Badge>
      )) }
    </HStack>
  )
}

export default PokeTypes
