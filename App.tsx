import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {useEffect} from 'react';
import { OPEN_SANS_REGULAR } from './utils/constants'
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import AppNavigation from './navigation/app.navigation'
import { SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

const App = () => {
  const [loaded, error] = useFonts({
    [OPEN_SANS_REGULAR]: require('./assets/fonts/OpenSans-Regular.ttf'),
    });  
      useEffect(() => {
        if (loaded || error) {
            SplashScreen.hideAsync();
        }
      }, [loaded, error]);
        if (!loaded && !error) {
        return null;
    }

  return (
      <SafeAreaView style= {{ flex: 1 }}>

        <NavigationContainer>
          <AppNavigation />
        </NavigationContainer>
      </SafeAreaView>
  )
}

export default App