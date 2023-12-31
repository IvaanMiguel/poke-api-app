import {
  Box,
  Center,
  HStack,
  Text,
  VStack
} from '@gluestack-ui/themed'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'

import { statsNames } from '../../constants'

const StatBar = ({
  value = 0,
  max = 100,
  label = ''
}) => {
  const pokemon = useSelector(state => state.pokemon)
  const { species } = pokemon
  const pokedex = useSelector(state => state.pokedex)
  const color = pokedex.colors[species.name]

  const [barWidth, setBarWidth] = useState(0)

  useEffect(() => {
    setBarWidth((value / max * 100).toFixed(1))
  }, [max])

  return (
    <HStack>
      <Center
        p='$1'
        w='$1/5'
        maxWidth={ 150 }
        minWidth={ 90 }
        borderTopLeftRadius='$md'
        borderBottomLeftRadius='$md'
        bgColor={ `$${ color }300` }
      >
        <Text
          textAlign='center'
          size='xs'
          color={ `$${ color }800` }
          isTruncated
          fontWeight={ 500 }
        >
          { label }
        </Text>
      </Center>
      <Box flexGrow={ 1 }>
        <Box
          py='$1' px='$3'
          w={ `${barWidth}%` }
          minWidth={ 40 }
          bgColor={ `$${ color }200` }
          borderTopRightRadius='$md'
          borderBottomRightRadius='$md'
          justifyContent='center'
          alignItems='end'
        >
          <Text
            textAlign='right'
            color={ `$${ color }800` }
            size='sm'
          >
            { value }
          </Text>
        </Box>
      </Box>
    </HStack>
  )
}

const StatsDisplay = () => {
  const pokemon = useSelector(state => state.pokemon)
  const { info } = pokemon

  const [maxStat, setMaxStat] = useState()

  useEffect(() => {
    setMaxStat(info?.stats.reduce((maxValue, currentStat) => {
      return Math.max(maxValue, currentStat.base_stat)
    }, 0))
  }, [info])

  return (
    <VStack
      borderRadius='$md'
      bgColor='white'
      p='$4'
      space='xs'
    >
      { info?.stats.map((stat, i) => (
        <StatBar
          key={ i }
          value={ stat.base_stat }
          label={ statsNames[stat.stat.name] }
          max={ maxStat }
        />
      )) }
    </VStack>
  )
}

export default StatsDisplay
