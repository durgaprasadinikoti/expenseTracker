import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  Platform,
} from "react-native";
import { useState, useEffect, useContext } from "react";
import ExpenseContext from "../../store/expense-context";
import Button from "./Button";
import DateTimePicker from "@react-native-community/datetimepicker";

const ExtendedModal = () => {
  const { isAddExpenseModalVisible, setIsAddExpenseModalVisible } =
    useContext(ExpenseContext);
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    if (Platform.OS === "android") {
      setShow(false);
      // for iOS, add a button that closes the picker
    }
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
    setShow(true);
  };

  useEffect(() => {
    console.log(isAddExpenseModalVisible);
  }, [isAddExpenseModalVisible]);

  return (
    <Modal
      visible={isAddExpenseModalVisible}
      animationType={"side"}
      transparent={true}
      onRequestClose={() => {
        setIsAddExpenseModalVisible(false);
      }}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>Add Expense</Text>
        <SafeAreaView>
          <TextInput
            placeholder="Enter Expense title"
            style={styles.textInput}
          />
          <Button onPress={showDatepicker}>Show date picker</Button>
          <Text>selected: {date.toLocaleString()}</Text>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              onChange={onChange}
            />
          )}
        </SafeAreaView>
        <SafeAreaView style={styles.buttonsContainer}>
          <SafeAreaView style={styles.buttonContainer}>
            <Button
              style={{ backgroundColor: "#CED9DA", borderColor: "#CED9DA" }}
              textStyle={{ color: "#000000" }}
              onPress={() => setIsAddExpenseModalVisible(false)}
            >
              Cancel
            </Button>
          </SafeAreaView>
          <SafeAreaView style={styles.buttonContainer}>
            <Button>Add Expense</Button>
          </SafeAreaView>
        </SafeAreaView>
        {/* <Button title="Cancel" onPress={ () => setIsAddExpenseModalVisible(false) } /> */}
      </SafeAreaView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CED9DA",
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    borderWidth: 1,
    width: 380,
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: "#120015",
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
    color: "#5C0070",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default ExtendedModal;
