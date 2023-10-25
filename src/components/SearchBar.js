import {
  Input,
  InputField,
  InputIcon,
  InputSlot,
  SearchIcon
} from '@gluestack-ui/themed'
import { useDispatch } from 'react-redux'

import { setSearchText } from '../redux/search'

const SearchBar = () => {
  const dispatch = useDispatch()

  const onChangeText = text => {
    dispatch(setSearchText(text))
  }

  return (
    <Input variant='rounded'>
      <InputField
        placeholder='Search pokemon by name...'
        onChangeText={ onChangeText }
      />
      <InputSlot pr='$4'>
        <InputIcon as={ SearchIcon } />
      </InputSlot>
    </Input>
  )
}

export default SearchBar
