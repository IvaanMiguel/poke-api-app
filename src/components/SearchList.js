import {
  Box,
  FlatList,
  Text
} from '@gluestack-ui/themed'
import {
  memo,
  useCallback,
  useEffect,
  useState
} from 'react'
import { useSelector } from 'react-redux'

import { getIdFromUrl } from '../utils'

import SearchCard from './SearchCard'

const CoincidencesList = memo(({ coincidences = [] }) => {
  const search = useSelector(state => state.search)
  const { searchText } = search

  const renderItem = useCallback(({ item }) => (
    <SearchCard
      id={ getIdFromUrl(item.url) }
      name={ item.name }
    />
  ), [])

  const ListEmptyComponent = () => (
    <Text textAlign='center'>
      No se ha encontrado ningún pokémon que coincida con
      "<Text italic>{ searchText }</Text>".
    </Text>          
  )

  const ItemSeparatorComponent = useCallback(h => <Box height={ `$${h}` } />, [])

  return (
    <FlatList
      px='$4'
      initialNumToRender={ 9 }
      maxToRenderPerBatch={ 9 }
      data={ coincidences }
      renderItem={ renderItem }
      ItemSeparatorComponent={ ItemSeparatorComponent(1) }
      ListFooterComponent={ ItemSeparatorComponent(4) }
      ListEmptyComponent={ ListEmptyComponent }
    />
  )
})

const SearchList = () => {
  const search = useSelector(state => state.search)
  const { searchText, allResults } = search

  const [coincidences, setCoincidences] = useState([])

  useEffect(() => {
    setCoincidences(allResults.filter(result => {
      return result.name.startsWith(searchText.toLowerCase())
    }))
  }, [searchText])

  return <CoincidencesList coincidences={ coincidences } />
}

export default SearchList
