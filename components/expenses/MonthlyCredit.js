import {
  SafeAreaView,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Platform,
  ScrollView,
  Alert
} from "react-native";
import { useState, useContext, useEffect } from "react";
import Button from "../ui/Button";
import ExpenseContext from "../../store/expense-context";
import RNPickerSelect from "react-native-picker-select";
import { useSavings } from '../../hooks/useSavings';

const MonthlyCredit = () => {
  const { isMonthlyExpenseModalVisible, setIsMonthlyExpenseModalVisible, mothlyCreditInst, updateMonthlyCreditInst } =
    useContext(ExpenseContext);
  const { addMontlyCredit, updateMontlyCredit } = useSavings();
  const [amount, setAmount] = useState();
  const [month, setMonth] = useState();
  const [year, setYear] = useState();

  useEffect(() => {
    let MonthlyInstObj = Object.keys(mothlyCreditInst).length;
    if(MonthlyInstObj > 0) {
      setAmount(mothlyCreditInst.amount);
      setMonth(mothlyCreditInst.month);
      setYear(mothlyCreditInst.year);
    } else {
      setAmount('');
      setMonth('');
      setYear('');
    }
  }, [mothlyCreditInst]);

  const months = [
    { label: "January", value: "January" },
    { label: "February", value: "February" },
    { label: "March", value: "March" },
    { label: "April", value: "April" },
    { label: "May", value: "May" },
    { label: "June", value: "June" },
    { label: "July", value: "July" },
    { label: "August", value: "August" },
    { label: "September", value: "September" },
    { label: "October", value: "October" },
    { label: "November", value: "November" },
    { label: "December", value: "December" },
  ];

  const placeholderStyle = {
    color: "#514F4F", // Change the color to your desired placeholder color
  };

  const handleSubmit = () => {
    if(amount && amount.trim().length !== 0 && month && month.trim().length !== 0 && year && year.trim().length !== 0) {
       const reqBody = {amount, month, year, id: Math.random().toString(36).substr(2, 9)};
       if(Object.keys(mothlyCreditInst).length > 0) {
        updateMontlyCredit({amount, month, year,id: mothlyCreditInst.id});
        updateMonthlyCreditInst({amount, month, year, id: mothlyCreditInst.id})
       } else {
        addMontlyCredit(reqBody);
       }
       setIsMonthlyExpenseModalVisible(false);
    } else {
        Alert.alert(
            'Error',
            'Please enter the required values',
            [
              { text: 'OK', onPress: () => console.log('OK Pressed') },
            ],
            { cancelable: false }
          );
    }
  }

  return (
    <Modal
      visible={isMonthlyExpenseModalVisible}
      animationType={"side"}
      transparent={true}
      onRequestClose={() => setIsMonthlyExpenseModalVisible(false)}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <Text style={[styles.text, { margin: 30, textAlign: "center" }]}>
            {Object.keys(mothlyCreditInst).length > 0 ? 'Update Monthly Credit' : 'Add Monthly Credit' }
          </Text>
          <SafeAreaView style={styles.dropdown}>
            <RNPickerSelect
              style={{ placeholder: placeholderStyle }}
              placeholder={{
                label: "Select a month",
                value: null,
                color: "black",
              }}
              onValueChange={(itemValue) => setMonth(itemValue)}
              items={months}
              textInputProps={{ style: { color: "white" } }}
              value={month}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.dropdown}>
            <RNPickerSelect
              style={{ placeholder: placeholderStyle }}
              placeholder={{
                label: "Select a year",
                value: null,
                color: "black",
              }}
              onValueChange={(itemValue) => setYear(itemValue)}
              items={[
                { label: "2023", value: "2023" },
                { label: "2024", value: "2024" },
                { label: "2025", value: "2025" },
                { label: "2026", value: "2026" },
                { label: "2027", value: "2027" },
                { label: "2028", value: "2028" },
                { label: "2029", value: "2029" },
                { label: "2030", value: "2030" },
              ]}
              textInputProps={{ style: { color: "white" } }}
              value={year}
            />
          </SafeAreaView>
          <SafeAreaView>
            <TextInput
              placeholder="Enter Amount"
              placeholderTextColor="gray"
              style={styles.textInput}
              keyboardType={"numeric"}
              value={amount}
              onChangeText={(value) => setAmount(value)}
            />
          </SafeAreaView>

          <SafeAreaView style={styles.buttonsContainer}>
            <SafeAreaView style={styles.buttonContainer}>
              <Button
                style={{ backgroundColor: "#CED9DA", borderColor: "#CED9DA" }}
                textStyle={{ color: "#000000" }}
                onPress={() => setIsMonthlyExpenseModalVisible(false)}
              >
                Cancel
              </Button>
            </SafeAreaView>
            <SafeAreaView style={styles.buttonContainer}>
              <Button onPress={handleSubmit}>
                {Object.keys(mothlyCreditInst).length !== 0 ? "Update" : "Save"}
              </Button>
            </SafeAreaView>
          </SafeAreaView>
        </ScrollView>
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#373737",
  },
  textInput: {
    borderWidth: 1,
    width: 380,
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: "gray",
    color: "white",
  },
  textArea: {
    borderWidth: 1,
    width: 380,
    height: 70,
    padding: 10,
    margin: 10,
    borderColor: "gray",
    color: "white",
  },
  dateTextInput: {
    borderWidth: 1,
    width: "105%",
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: "gray",
    color: "white",
  },
  datePicker: {
    width: 400,
    height: 40,
    padding: 10,
    margin: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
  datePickerContainer: {
    flexDirection: "row",
  },
  datePickerTextContainer: {
    width: "75%",
  },
  datePickerButtonContainer: {
    width: "25%",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: "#DE0000",
    paddingHorizontal: 12,
  },
  dropdown: {
    borderWidth: 1,
    borderColor: "#B7B7B7",
    // borderRadius: 8,
    height: 40,
    width: "89%",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    margin: 10,
    color: "white",
  },
});

export default MonthlyCredit;
