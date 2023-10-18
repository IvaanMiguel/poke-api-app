import { config } from '@gluestack-ui/config'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { GluestackUIProvider } from '@gluestack-ui/themed'
import { Provider } from 'react-redux'

import { store } from './src/redux/strore'

import Home from './src/views/Home'
import PokeList from './src/views/PokeList'
import PokeInfo from './src/views/PokeInfo'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <Provider store={ store }>
      <GluestackUIProvider config={ config }>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name='Home'
              component={ Home }
            />
            <Stack.Screen
              name='PokeList'
              component={ PokeList }
            />
            <Stack.Screen
              name='PokeInfo'
              component={ PokeInfo }
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GluestackUIProvider>
    </Provider>
  );
}
