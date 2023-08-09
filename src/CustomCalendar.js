import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import React, {useState} from 'react';

import {Calendar} from 'react-native-calendars';

const CustomCalendar = () => {
  const [showModal, setShowModal] = useState(false);

  const [selected, setSelected] = useState('');

  return (
    <View style={styles.container}>
      
      <TouchableOpacity
        onPress={() => {
          setShowModal(true);
        }}
        style={styles.buttonStyle}>
        <Text style={styles.buttonText}>Show Calendar</Text>
      </TouchableOpacity>

      <Modal visible={showModal} animationType="slide">
        <View style={{flex: 1}}>
          <View style={styles.closebtn}>
            <TouchableOpacity
              onPress={() => {
                setShowModal(false);
              }}>
              <Text style={{color: 'red'}}>Close</Text>
            </TouchableOpacity>
          </View>
         
          <Calendar
            style={styles.calendarStyle}
            onDayPress={date => {
              setSelected(date.dateString);

              console.log('new=>>>>>>>', date);

              Alert.alert(
                'Alert',

                `You have selected the date: ${date.day} / ${date.month} / ${date.year}`,

                [
                  {
                    text: 'Cancel',

                    onPress: () => {
                      console.log('Cancel is Pressed');
                    },

                    style: 'cancel',
                  },

                  {
                    text: 'OK',

                    onPress: () => {
                      console.log('OK is Pressed');

                      setShowModal(false);
                    },
                  },
                ],
              );
            }}
            minDate={'2023-08-04'}
            maxDate={'2023-08-18'}
            hideExtraDays={true}
            hideArrows={true}
            dayNamesShort={['S', 'M', 'T', 'W', 'T', 'F', 'S']}
            markedDates={{
              [selected]: {
                selected: true,

                disableTouchEvent: true,

                selectedColor: '#2E5090',
              },
            }}
          />
        </View>
      </Modal>
      
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
  },

  buttonStyle: {
    backgroundColor: '#2E5090',

    borderRadius: 10,

    margin: 40,

    paddingVertical: 15,

    width: 200,

    alignItems: 'center',

    elevation: 5,
  },

  buttonText: {
    color: '#fff',

    fontSize: 22,
  },

  calendarStyle: {
    borderRadius: 10,

    elevation: 4,

    margin: 40,
  },

  closebtn: {
    alignItems: 'flex-end',

    margin: 10,
  },
});
