import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import DatePicker from 'react-native-datepicker';

const MyDatePicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const minDate = new Date(); // Set your desired minimum date
  const maxDate = new Date(); // Set your desired maximum date

  return (
    <View style={styles.container}>
        <Text>Hello</Text>
      <DatePicker
        style={{ width: 200 }}
        date={selectedDate}
        mode="date"
        format="YYYY-MM-DD"
        minDate={minDate}
        maxDate={maxDate}
        onDateChange={(date) => setSelectedDate(date)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MyDatePicker;
