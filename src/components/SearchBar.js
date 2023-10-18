import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon,
  View
} from '@gluestack-ui/themed'

const SearchBar = props => {
  return (
    <View { ...props }>
      <Input variant='rounded'>
        <InputField placeholder='Search pokemon by name...' />
        <InputSlot pr='$4'>
          <InputIcon as={ SearchIcon } />
        </InputSlot>
      </Input>
    </View>
  )
}

export default SearchBar
