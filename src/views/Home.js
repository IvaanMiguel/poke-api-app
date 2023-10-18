import {
  ScrollView,
  VStack
} from '@gluestack-ui/themed'

import SearchBar from '../components/SearchBar'
import GenCard from '../components/GenCard'

import { generations } from '../constants'

const Home = () => {
  return (
    <VStack height='$100%' space='md'>
      <SearchBar p='$4' pb='$0' />
      <ScrollView>
        <VStack space='xs' px='$4' pb='$4'>
          { generations.map((generation, i) => (
              <GenCard
                key={ i }
                name={ generation.name }
                id={ i + 1 }
              />
          )) }
        </VStack>
      </ScrollView>
    </VStack>
  )
}

export default Home
