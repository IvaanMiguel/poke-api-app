import { config } from '@gluestack-ui/config';
import { GluestackUIProvider, Text } from '@gluestack-ui/themed';

export default function App() {
  return (
    <GluestackUIProvider config={ config }>
      <Text>
        Hola
      </Text>
    </GluestackUIProvider>
  );
}
