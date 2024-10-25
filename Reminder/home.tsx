import React, { useState } from 'react';
import { Button, FlatList, Text, View, TouchableOpacity, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateModal from './create.modal';
import Feather from '@expo/vector-icons/Feather';

interface IReview {
  dayofActivity: Date;
  waterAmount?: number;
  targetValue?: number;
  id?: number;
}

const styles = StyleSheet.create({
  reviewItem: {
    padding: 15,
    backgroundColor: '#ccc',
    margin: 15,
  },
  backGroundImageCicrle: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backGroundImageWater: {
    width: 110,
    height: 150,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    width: 200,
    alignSelf: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 16,
    minWidth: 100,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

const HomeScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const [reviews, setReviews] = useState<IReview[]>([
    { dayofActivity: new Date(), waterAmount: 2100, targetValue: 2000, id: 1 },
    { dayofActivity: new Date(), waterAmount: 2100, targetValue: 2000, id: 2 },
    { dayofActivity: new Date(), waterAmount: 2100, targetValue: 2000, id: 3 },
  ]);
  const [waterAmount, setWaterAmount] = useState(2100);
  const [targetValue, setTargetValue] = useState(2000);
  const handleCupPress = () => {
    setWaterAmount(waterAmount + 100);
  };
  const handleBottlePress = () => {
    setWaterAmount(waterAmount + 500);
  };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View>
      <Text style={{ fontSize: 24, padding: 10, textAlign: 'center' }}>Today</Text>
      <Text style={{ fontSize: 14, padding: 10, textAlign: 'center' }}>Value Target: {targetValue} ml</Text>
      <View style={{ alignItems: "center"}}>
        <Feather
          onPress={() => setModalVisible(true)}
          name="plus-circle" size={35} color="black"
        />
      </View>
      <ImageBackground source={require('../assets/images/circleBlue.png')} style={styles.backGroundImageCicrle}>
        <ImageBackground source={require('../assets/images/water.png')} style={styles.backGroundImageWater}>
          <Text style={{ fontSize: 16, color: 'white' }}>{waterAmount} ml</Text>
          <Text style={{ fontSize: 16, color: 'white' }}>{Math.round((waterAmount / targetValue) * 100)}%</Text>
        </ImageBackground>
      </ImageBackground>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
      }}>
        <TouchableOpacity style={styles.button} onPress={handleCupPress}>
          <Text style={styles.buttonText}>Cup</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleBottlePress}>
          <Text style={styles.buttonText}>Bottle</Text>
        </TouchableOpacity>
      </View>
      <CreateModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setTargetValue={setTargetValue} // Pass the setTargetValue function here
      />
      <Button title="Go to History" onPress={() => navigation.navigate('History', {id: 1, title: 'Zelda, Breath of Fresh Air', star: 5})} />
    </View>
    
  );
};

export default HomeScreen;
