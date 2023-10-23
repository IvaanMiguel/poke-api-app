import {
  Center,
  Image,
  View
} from '@gluestack-ui/themed'
import { useState } from 'react'

const PokeImage = ({
  color = 'red',
  id = 1,
  imageProps = {}
}) => {
  const [imageDimensions, setImageDimensions] = useState({ w: 0, h: 0 })

  const onLayout = e => {
    const { width, height } = e.nativeEvent.layout
    setImageDimensions({ w: width, h: height })
  }

  return (
    <Center>
      <View
        position='absolute'
        w={ imageDimensions.w - 10 } h={ imageDimensions.h - 10 }
        bgColor={ `$${ color }100` }
        borderRadius='$full'
      />
      <Image
        onLayout={ onLayout }
        source={{
          uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${ id }.png`
        }}
        alt='Pokemon image.'
        { ...imageProps }
        />
    </Center>
  )
}

export default PokeImage
