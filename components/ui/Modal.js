import {
  SafeAreaView,
  StyleSheet,
  Modal,
  Text,
  TextInput,
  Platform,
} from "react-native";
import { useState, useEffect, useContext, useReducer } from "react";
import ExpenseContext from "../../store/expense-context";
import Button from "./Button";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native'

const initialState = {
  title: '',
  price: 0,
  date: '',
  comments: '',
  errors: {}
}


const reducerFn = (state, action) => {

  switch(action.type) {
    case 'SET_FIELD_VALUE':
           return {
            ...state,
            [action.field]: action.value
           }
    case 'SET_ERROS':
        return {
          ...state,
          errors: action.errors,
        } 
    case 'CLEAR_FORM': 
         return initialState
    default:
       return state;      
  }
}

const ExtendedModal = () => {

  const navigation = useNavigation();

  const { isAddExpenseModalVisible, setIsAddExpenseModalVisible } =
    useContext(ExpenseContext);
  const [date, setDate] = useState(new Date());

  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);
  const [ state, dispatch ] = useReducer(reducerFn, initialState);

  useEffect(() => {
    dispatch({type: 'SET_FIELD_VALUE', field: 'date', value: formatDate(new Date())})
  } , [])

  const handleDatePickerChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
    dispatch({type: 'SET_FIELD_VALUE', field: 'date', value: formatDate(selectedDate)})
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

  const formatDate = (date) => {
    const options = { year: "numeric", month: "long", day: "numeric" };
    return new Intl.DateTimeFormat("en-US", options).format(date);
    1;
  };


  const handleFormFields = (fieldName) => (value) => {
    dispatch({type: 'SET_FIELD_VALUE', field: fieldName, value})
  }

  const handleValidateForm = () => {
     const errors = {};
     if(!state.title) {
        errors.title = "Title is required";
     }
     if(!state.price) {
        errors.price = "Price is required";
     }
     if(!state.comments) {
        errors.comments = "Comments are required";
     }
     return errors;

  }

  const handleSubmit = () => {
       console.log(state);
       const errors = handleValidateForm();
       if(Object.keys(errors).length === 0) {
          setDate(new Date());
          dispatch({type: 'CLEAR_FORM'});
          setIsAddExpenseModalVisible(false);
          // navigation.navigate('RecentExpenses')
       } else {
          dispatch({type: 'SET_ERROS', errors  })
       }
  }

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
            value={state.title}
            onChangeText={handleFormFields('title')}
          />
          {state.errors.title && <Text style={styles.errorText}>{ state.errors.title }</Text>}
          <TextInput
            placeholder="Enter Expense Price"
            style={styles.textInput}
            keyboardType={"numeric"}
            value={state.price}
            onChangeText={handleFormFields('price')}
          />
           {state.errors.price && <Text style={styles.errorText}>{ state.errors.price }</Text>}
          <SafeAreaView style={styles.datePickerContainer}>
            <SafeAreaView style={styles.datePickerTextContainer}>
              <TextInput
                value={formatDate(date)}
                style={styles.dateTextInput}
              />
            </SafeAreaView>
            <SafeAreaView style={styles.datePickerButtonContainer}>
              <Fontisto
                name="date"
                size={24}
                color="black"
                onPress={showDatepicker}
              />
            </SafeAreaView>
          </SafeAreaView>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={mode}
              is24Hour={true}
              display={"inline"}
              onChange={handleDatePickerChange}
            />
          )}

          <TextInput style={styles.textArea} placeholder="Comments" value={state.comments} onChangeText={handleFormFields('comments')}/>
          {state.errors.comments && <Text style={styles.errorText}>{ state.errors.comments }</Text>}
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
            <Button onPress={handleSubmit}>Add Expense</Button>
          </SafeAreaView>
        </SafeAreaView>
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
    borderColor: "gray",
  },
  textArea: {
    borderWidth: 1,
    width: 380,
    height: 70,
    padding: 10,
    margin: 10,
    borderColor: "gray",
  },
  dateTextInput: {
    borderWidth: 1,
    width: "105%",
    height: 40,
    padding: 10,
    margin: 10,
    borderColor: "gray",
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
    color: '#DE0000',
    paddingHorizontal: 12,
  }
});

export default ExtendedModal;
