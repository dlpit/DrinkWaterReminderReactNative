import { View, Text, StyleSheet } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';
import { globalStyles, OPEN_SANS_REGULAR } from '../utils/constants'
import { NavigationProp, useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f9f9f9',
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: 'center',
    paddingTop: 40,
  },
  text: {
    flex: 1,
    fontSize: 24,
    fontFamily: OPEN_SANS_REGULAR,
    marginRight: 0,
    textAlign: 'center',
  }
})

const AppHeader = () => {
  const navigation:any = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={[styles.text, globalStyles.globalFont]}>Water Intake Tracker</Text>
      <Entypo 
        name="dots-three-vertical" 
        size={24} 
        color="black" 
        onPress={() =>{ navigation.openDrawer() }}
      />
    </View>
  )
}

export default AppHeader