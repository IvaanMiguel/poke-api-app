import {
  Actionsheet,
  ActionsheetBackdrop,
  ActionsheetContent,
  ActionsheetDragIndicator,
  ActionsheetDragIndicatorWrapper,
  ActionsheetScrollView,
  Center,
  Heading,
  Text,
  VStack
} from '@gluestack-ui/themed'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setShowAbilitySheet, setAbilitySheetId } from '../../redux/abilitySheet'
import { getLocalizedString } from '../../utils'

const AbilitySheet = () => {
  const dispatch = useDispatch()
  const pokemon = useSelector(state => state.pokemon)
  const { name, abilities, info, species } = pokemon
  const abilitySheet = useSelector(state => state.abilitySheet)
  const { showAbilitySheet, abilitySheetId } = abilitySheet
  const pokedex = useSelector(state => state.pokedex)
  const color = pokedex.colors[species?.name]

  const [properName, setProperName] = useState('')
  const [description, setDescription] = useState(null)

  useEffect(() => {
    if (!abilities) return

    setDescription(getLocalizedString(abilities[abilitySheetId].effect_entries).effect)
  }, [abilitySheetId, abilities])

  useEffect(() => { dispatch(setAbilitySheetId(0)) }, [abilities])

  useEffect(() => {
    const _name = `${name}${name.charAt(name.length - 1) !== 's' ? '\'s' : '\''}`
    setProperName(_name)
  }, [name])

  return (
    <Actionsheet
      isOpen={ showAbilitySheet }
      onClose={ () => dispatch(setShowAbilitySheet(false)) }
      zIndex={ 999 }
    >
      <ActionsheetBackdrop />
      <ActionsheetContent
        p={ 0 }
        zIndex={ 999 }
        h='fit-content'
        maxHeight='$full'
        overflow='hidden'
      >
        <ActionsheetDragIndicatorWrapper
          p={ 0 }
          bgColor={ `$${ color }800` }
        >
          <Center p='$4'>
            <ActionsheetDragIndicator m='$1' bgColor='white' />
            { abilities ? (
              <VStack>
                <Heading
                  size='sm'
                  color='white'
                  textAlign='center'
                >
                  { getLocalizedString(abilities[abilitySheetId].names).name }
                </Heading>
                <Text
                  size='xs'
                  textAlign='center'
                  color={ `$${ color }300` }
                >
                  { properName } { info.abilities[abilitySheetId]?.is_hidden ? 'hidden ' : '' }ability
                </Text>
              </VStack>
            ) : null }
          </Center>
        </ActionsheetDragIndicatorWrapper>
        <ActionsheetScrollView>
          <Center w='$full' p='$4'>
            <VStack
              w='$full'
              bgColor={ `$${ color }100` }
              borderRadius='$md'
              p='$4'
              space='xs'
            >
              <Heading
                textAlign='center'
                size='sm'
                color={ `$${ color }800` }
              >
                Effect
              </Heading>
              <Text
                textAlign='center'
                color={ `$${ color }800` }
                size='sm'
              >
                { description }
              </Text>
            </VStack>
          </Center>
        </ActionsheetScrollView>
      </ActionsheetContent>
    </Actionsheet>
  )
}

export default AbilitySheet
