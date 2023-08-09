import { View, Text,Button, TouchableOpacity } from 'react-native'
import React from 'react'
import { useState } from 'react';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';
import MyDatePicker from './src/MyDatePicker';

import {Calendar, LocaleConfig} from 'react-native-calendars';
import CustomCalendar from './src/CustomCalendar';

// DateTimePickerAndroid.open(params: AndroidNativeProps)
// DateTimePickerAndroid.dismiss(mode: AndroidNativeProps['mode'])



const App = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [date,setDate] = useState([])
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(new Date('2022-05-31'));
  const [maxDate,setMaxDate] = useState(new Date("2023-04-24"))
  const[minDate,setMinDate] = useState (new Date("2023-04-15"))
  const [selected,setSelected] = useState([])

  

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    setDate(date);
    hideDatePicker();
  };

  return (
    <View>
     
      {/* <Button title="Show Date Picker" onPress={showDatePicker} />
      <DateTimePicker
      value={new Date()}
  date={selectedDate}
  isVisible={isDatePickerVisible}
  mode="datetime"
  onConfirm={handleConfirm}
  onCancel={hideDatePicker}
  maximumDate={maxDate}
  minimumDate={minDate}
/> */}
<CustomCalendar/>
   </View>
  )
}
{/* <MyDatePicker/> */}


export default App