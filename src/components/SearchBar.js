import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon
} from '@gluestack-ui/themed'

const SearchBar = () => {
  return (
    <Input variant='rounded'>
      <InputField placeholder='Search pokemon by name...' />
      <InputSlot pr='$4'>
        <InputIcon as={ SearchIcon } />
      </InputSlot>
    </Input>
  )
}

export default SearchBar
