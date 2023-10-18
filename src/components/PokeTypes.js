import { Badge, BadgeText, HStack } from '@gluestack-ui/themed'

const PokeTypes = props => {
  return (
    <HStack space='sm'>
      { props.types.map((type, i) => (
        <Badge
          key={ i }
          px='$2' py='$1'
          variant='outline'
          size='sm'
          borderRadius='$full'
          borderColor={ `$${props.color}600` }
          useSelect='none'
          bgColor={ `$${props.color}100` }
        >
          <BadgeText
            color={ `$${props.color}900` }
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
