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
  max = 0,
  label = ''
}) => {
  const color = useSelector(state => state.pokeColor)
  const { pokeColor } = color

  const [barWidth, setBarWidth] = useState()

  useEffect(() => {
    setBarWidth((value / max * 100).toFixed(1))
  }, [max])

  return (
    <HStack>
      <Center
        p='$1'
        w='20%'
        maxWidth={ 150 }
        minWidth={ 90 }
        borderTopLeftRadius='$md'
        borderBottomLeftRadius='$md'
        bgColor={ `$${pokeColor}300` }
      >
        <Text
          textAlign='center'
          size='xs'
          color={ `$${pokeColor}800` }
          isTruncated
          fontWeight={ 500 }
        >
          { label }
        </Text>
      </Center>
      <Box flexGrow='1'>
        <Box
          py='$1' px='$3'
          h='100%'
          w={ `${barWidth}%` }
          minWidth='fit-content'
          bgColor={ `$${pokeColor}200` }
          borderTopRightRadius='$md'
          borderBottomRightRadius='$md'
          justifyContent='center'
          alignItems='end'
        >
          <Text
            textAlign='end'
            color={ `$${pokeColor}800` }
            size='sm'
          >
            { value }
          </Text>
        </Box>
      </Box>
    </HStack>
  )
}

const StatsDisplay = ({ stats = [] } = {}) => {
  const [maxStat, setMaxStat] = useState()

  useEffect(() => {
    setMaxStat(stats.reduce((maxValue, currentStat) => {
      return Math.max(maxValue, currentStat.base_stat)
    }, 0))
  }, [])

  return (
    <VStack
      borderRadius='$md'
      bgColor='white'
      p='$4'
      space='xs'
    >
      { stats.map((stat, i) => (
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
