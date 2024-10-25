import { View, Text, Modal, StyleSheet, Button, Alert } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import { TextInput } from 'react-native-gesture-handler';
import React, { useState } from 'react';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
    marginBottom: 10,
  },
});

interface IProps {
  modalVisible: boolean,
  setModalVisible: (value: boolean) => void,
  setTargetValue: (value: number) => void, // Include setTargetValue in props
}

const CreateModal = (props: IProps) => {
  const { modalVisible, setModalVisible, setTargetValue } = props;
  const [target, setTarget] = useState(0);

  const handleSubmit = () => {
    if (!target) {
      Alert.alert('Please enter a valid target');
      return;
    }
    setTargetValue(target); // Call setTargetValue to update the target value in HomeScreen
    setModalVisible(false);
  };

  const handleChange = (value: string) => {
    const numericValue = parseInt(value);
    if (!isNaN(numericValue)) {
      setTarget(numericValue);
    } else {
      setTarget(0); // Or handle it another way if needed
    }
  };

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
    >
      <View style={styles.container}>
        {/* header */}
        <View style={styles.header}>
          <Text style={{ fontSize: 24 }}>Set Target</Text>
          <AntDesign
            onPress={() => setModalVisible(false)}
            name="close" size={24} color="black" />
        </View>
        {/* body */}
        <View>
          <TextInput
            value={target.toString()}
            onChangeText={handleChange}
            keyboardType='numeric'
            style={{
              height: 40,
              backgroundColor: 'gray',
              marginVertical: 10,
              paddingVertical: 10,
              paddingHorizontal: 10,
              borderRadius: 5,
            }} />
        </View>
        <View>
          <Button title="Set"
            onPress={() => handleSubmit()} />
        </View>
      </View>
    </Modal>
  );
};

export default CreateModal;
