import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Reminder/home'
import HistoryScreen from '../Reminder/history'
import DetailsScreen from '../Reminder/detail'
import AppHeader from './app.header';

const HomeLayout = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <Stack.Navigator 
      initialRouteName='Home'
      // screenOptions={{ headerShown: false }}
      >
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ header: () => <AppHeader /> }}/>
      <Stack.Screen 
        name="History" 
        component={HistoryScreen} 
        options={{ title: 'Water Intake Tracker' }}/>
    </Stack.Navigator>
  )
}

const AppNavigation = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator 
    >      
      <Drawer.Screen 
        name="Home1" 
        component={HomeLayout}
        options={{ title: 'Home', header: () => <></> }}/>
      <Drawer.Screen 
        name="Details" 
        component={DetailsScreen}
        options={{ 
          title: 'Details',
          header: () => <AppHeader />
         }}
        />
    </Drawer.Navigator>
  )
}

export default AppNavigation