import {
  Badge,
  BadgeText,
  HStack
} from '@gluestack-ui/themed'

const PokeTypes = ({ types = [], color = 'red' }) => {
  return (
    <HStack space='sm'>
      { types.map((type, i) => (
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
            { type.type.name }
          </BadgeText>
        </Badge>
      )) }
    </HStack>
  )
}

export default PokeTypes
