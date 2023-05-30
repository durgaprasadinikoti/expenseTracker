import {
  SafeAreaView,
  Text,
  StyleSheet,
  Modal,
  TextInput,
  Platform,
  ScrollView,
} from "react-native";
import { useState, useContext } from "react";
import Button from "../ui/Button";
import ExpenseContext from "../../store/expense-context";
const MonthlyCredit = () => {
  const { isMonthlyExpenseModalVisible, setIsMonthlyExpenseModalVisible } =
    useContext(ExpenseContext);
  const [amount, setAmount] = useState();

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
            Add Monthly Credit
          </Text>
          <SafeAreaView>
            <TextInput
              placeholder="Enter Amount"
              placeholderTextColor="gray"
              style={styles.textInput}
              keyboardType={"numeric"}
              value={amount}
              onChangeText={() => {}}
            />
            {/* {state.errors.price && (
          <Text style={styles.errorText}>{state.errors.price}</Text>
        )} */}
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
              <Button onPress={() => {}}>
                {Object.keys({}).length !== 0
                  ? "Update Amount"
                  : "Add Amount"}
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
});

export default MonthlyCredit;
