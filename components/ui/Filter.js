import { SafeAreaView, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

const Filter = ({onFilter}) => {
 const [selectedMonthValue, setSelectedMonthValue] = useState('');
 const [selectedYearValue, setSelectedYearValue] = useState('');
  const months = [
    { label: 'January', value: 'January' },
    { label: 'February', value: 'February' },
    { label: 'March', value: 'March' },
    { label: 'April', value: 'April' },
    { label: 'May', value: 'May' },
    { label: 'June', value: 'June' },
    { label: 'July', value: 'July' },
    { label: 'August', value: 'August' },
    { label: 'September', value: 'September' },
    { label: 'October', value: 'October' },
    { label: 'November', value: 'November' },
    { label: 'December', value: 'December' }
  ];
  const placeholderStyle = {
    color: '#514F4F' // Change the color to your desired placeholder color
  };

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.dropdown}>
            <RNPickerSelect
                style={ { placeholder: placeholderStyle} }
                placeholder={{ label: 'Select a month', value: null, color: 'black' }}
                onValueChange={(itemValue) => setSelectedMonthValue(itemValue)}
                items={months}
            />
      </SafeAreaView>

      <SafeAreaView style={styles.dropdown}>
            <RNPickerSelect
                style={ { placeholder: placeholderStyle} }
                placeholder={{ label: 'Select a year', value: null, color: 'black' }}
                onValueChange={(itemValue) => setSelectedYearValue(itemValue)}
                items={[
                { label: '2023', value: '2023' },
                { label: '2024', value: '2024' },
                { label: '2025', value: '2025' },
                { label: '2026', value: '2026' },
                { label: '2027', value: '2027' },
                { label: '2028', value: '2028' },
                { label: '2029', value: '2029' },
                { label: '2030', value: '2030' }
                ]}
            />
      </SafeAreaView>
      <SafeAreaView>
            <TouchableOpacity style={styles.buttonContainer} onPress={onFilter.bind(this, {month: selectedMonthValue, year: selectedYearValue })}> 
                <Text style={styles.text}>Get Details</Text>
            </TouchableOpacity>
      </SafeAreaView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 10
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#B7B7B7",
    borderRadius: 8,
    height: 30,
    width: 130,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  buttonContainer: {
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#F55640',
    backgroundColor: '#F55640',
    shadowColor: 'white',
    shadowRadius: 8,
    shadowOffset: {
        width: 0,
        height: 1
    },
    shadowOpacity: 0.15,
  }, 
  text: {
    fontWeight: 'bold',
    fontSize: 14,
    color: 'white',
    padding: 5
  }
});

export default Filter;
