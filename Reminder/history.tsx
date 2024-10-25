import React, { useState, useEffect } from 'react';
import { Button, StyleSheet, Text, View, ScrollView, Dimensions } from 'react-native';
import { NavigationProp, useNavigation, RouteProp } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Calendar } from 'react-native-calendars';
import { LineChart } from 'react-native-chart-kit';

const styles = StyleSheet.create({});

const HistoryScreen = () => {
  const navigation: NavigationProp<RootStackParamList> = useNavigation();
  const route: RouteProp<RootStackParamList, 'History'> = useRoute();

  const [selectedDates, setSelectedDates] = useState<{ [key: string]: { selected: boolean; marked: boolean; selectedColor: string } }>({});
  const [data, setData] = useState([0, 0, 0, 0, 0, 0, 0]);

  const handleDayPress = (day: { dateString: string }) => {
    const dateString = day.dateString;

    setSelectedDates((prevSelectedDates) => {
      const newSelectedDates = { ...prevSelectedDates };
      if (newSelectedDates[dateString]) {
        delete newSelectedDates[dateString];
      } else {
        newSelectedDates[dateString] = { selected: true, marked: true, selectedColor: 'blue' };
      }
      return newSelectedDates;
    });
  };

  useEffect(() => {
    // Dummy data: Adjust this part to get real data from your state or props
    setData([500, 1500, 1800, 1200, 2000, 1600, 900]);
  }, []);

  return (
    <ScrollView>
      <Calendar
        onDayPress={handleDayPress}
        markedDates={selectedDates}
      />
      <Text style={{ textAlign: 'center', marginTop: 20 }}>
        Selected Dates: {Object.keys(selectedDates).join(', ')}
      </Text>
      <View>
        <Text style={{ textAlign: 'center', marginTop: 20, fontSize: 18 }}>
          Weekly Water Intake
        </Text>
        <LineChart
          data={{
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [
              {
                data,
              },
            ],
          }}
          width={Dimensions.get('window').width - 16}
          height={220}
          yAxisLabel=""
          yAxisSuffix="ml"
          yAxisInterval={1}
          chartConfig={{
            backgroundColor: '#e26a00',
            backgroundGradientFrom: '#fb8c00',
            backgroundGradientTo: '#ffa726',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
            propsForDots: {
              r: '6',
              strokeWidth: '2',
              stroke: '#ffa726',
            },
          }}
          style={{
            marginVertical: 8,
            borderRadius: 16,
          }}
        />
      </View>
    </ScrollView>
  );
};

export default HistoryScreen;
