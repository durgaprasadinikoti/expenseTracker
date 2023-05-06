import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Button from "../components/ui/Button";
import { FontAwesome } from "@expo/vector-icons";
import { useState, useContext, useRef } from "react";
import ExpenseContext from "../store/expense-context";

const IndexScreen = () => {
  
  const [passcode1, setPasscode1] = useState('');
  const [passcode2, setPasscode2] = useState('');
  const [passcode3, setPasscode3] = useState('');
  const [passcode4, setPasscode4] = useState('');

  const passcode1Element = useRef();
  const passcode2Element = useRef();
  const passcode3Element = useRef();
  const passcode4Element = useRef();


  const { setMainScreen } = useContext(ExpenseContext);

  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleContinueAction = () => {
    if (validatePasscode()) {
      // onPress();
      setMainScreen(true);
    }
  };

  const handleChangeTextForPasscode1 = (newText) => {
    setPasscode1(newText);
    passcode2Element.current.focus();
  };
  const handleChangeTextForPasscode2 = (newText) => {
    setPasscode2(newText);
    passcode3Element.current.focus();
  };
  const handleChangeTextForPasscode3 = (newText) => {
    setPasscode3(newText);
    passcode4Element.current.focus();
  };
  const handleChangeTextForPasscode4 = (newText) => {
    setPasscode4(newText);
  };

  const validatePasscode = () => {
    const passcode = `${passcode1}${passcode2}${passcode3}${passcode4}`;
    console.log(passcode);
    if (passcode === "4855") {
      setError(false);
      setErrorMessage("");
      return true;
    } else {
      setError(true);
      setErrorMessage("Please enter correct passcode");
      return false;
    }
  };

  return (
    <LinearGradient colors={["#539C97", "#241401"]} style={styles.container}>
      <ImageBackground
        source={require("../assets/images/expenses.jpg")}
        style={styles.container}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.innerContainer}>
          <Text style={styles.text}>
            <FontAwesome name="rupee" size={24} color="white" /> Expenses
          </Text>
          {/* <TextInput placeholder="Enter Passcode" style={styles.TextInput} placeholderTextColor="#808080" keyboardType="numeric" onChangeText={handlePasscodeChange} /> */}
          <Text style={styles.subTitle}>Enter Passcode</Text>
          <SafeAreaView style={styles.passcodeContainer}>
            <TextInput
              style={styles.passcodeInput}
              value={passcode1}
              onChangeText={handleChangeTextForPasscode1}
              maxLength={1}
              keyboardType="number-pad"
              secureTextEntry
              ref={passcode1Element}
            />
            <TextInput
              style={styles.passcodeInput}
              value={passcode2}
              onChangeText={handleChangeTextForPasscode2}
              maxLength={1}
              keyboardType="number-pad"
              secureTextEntry
              ref={passcode2Element}
            />
            <TextInput
              style={styles.passcodeInput}
              value={passcode3}
              onChangeText={handleChangeTextForPasscode3}
              maxLength={1}
              keyboardType="number-pad"
              secureTextEntry
              ref={passcode3Element}
            />
            <TextInput
              style={styles.passcodeInput}
              value={passcode4}
              onChangeText={handleChangeTextForPasscode4}
              maxLength={1}
              keyboardType="number-pad"
              secureTextEntry
              ref={passcode4Element}
            />
          </SafeAreaView>

          {error && <Text style={styles.errorText}>{errorMessage}</Text>}
          <Button onPress={handleContinueAction}>Continue</Button>
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.2,
  },
  innerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  TextInput: {
    borderWidth: 1,
    borderColor: "white",
    width: "95%",
    height: 40,
    margin: 10,
    padding: 10,
    color: "white",
  },
  text: {
    fontWeight: "bold",
    color: "white",
    fontSize: 28,
    margin: 10,
    padding: 10,
  },
  errorText: {
    color: "red",
    fontSize: 16,
    margin: 5,
    padding: 5,
  },
  passcodeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "95%",
    marginVertical: 16,
  },
  passcodeInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 50,
    fontSize: 24,
    width: "20%",
    height: 38,
    textAlign: "center",
    color: 'white'
  },
  subTitle: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 14
  }
});

export default IndexScreen;
