import { Text, VStack } from '@gluestack-ui/themed'
import { useEffect } from 'react'

import BasicDisplay from '../components/pokeInfo/BasicDisplay'

const PokeInfo = ({ route }) => {
  const pokeInfo = route.params.pokeInfo

  console.log(pokeInfo);

  return (
    <VStack p='$2'>
      <BasicDisplay
        pokeId={ pokeInfo.id }
        pokeOrder={ pokeInfo.order }
        pokeName={ pokeInfo.name }
        pokeTypes={ pokeInfo.types }
      />
    </VStack>
  )
}

export default PokeInfo
