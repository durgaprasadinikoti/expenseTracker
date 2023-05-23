import {
  SafeAreaView,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Alert
} from "react-native";
import Card from "../ui/Card";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { useContext, useState, useRef } from "react";
import ExpenseContext from "../../store/expense-context";
import ActionSheet from "react-native-actionsheet";
import { database } from '../../firebaseConfig';
import { ref, remove } from "firebase/database";

const DetailExpenseCard = ({ item }) => {
  const [isPressed, setIsPressed] = useState(false);
  const { deleteExpense, setIsAddExpenseModalVisible, setExpense } = useContext(ExpenseContext);
  let actionSheet = useRef();
  let optionArray = ["Edit", "Delete", "Cancel"];

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const handleLongPress = () => {
    actionSheet.current.show();
  };

  const handleActions = (index) => {
        if(optionArray[index] === 'Delete') {
            Alert.alert(
                'Delete Confirmation',
                'Are you sure you want to delete?',
                [
                  {
                    text: 'Cancel',
                    style: 'cancel',
                  },
                  {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                      deleteExpense(item.id);
                      remove(ref(database, 'expenses/' + item.id));
                    },
                  },
                ],
                { cancelable: false }
              );
        } else if(optionArray[index] === 'Edit') {
          setExpense(item);
          setIsAddExpenseModalVisible(true);
        }
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
  return (
    <SafeAreaView>
      <TouchableWithoutFeedback
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onLongPress={handleLongPress}
      >
        <SafeAreaView>
          <Card
            style={[
              { backgroundColor: "#4F4F4F", borderColor: "#4F4F4F" },
              { backgroundColor: isPressed ? "#00052A" : "#4F4F4F" },
            ]}
          >
            <SafeAreaView style={styles.container}>
              <SafeAreaView style={styles.leftContainer}>
                <Text
                  style={[styles.leftContainerText, { fontWeight: "bold" }]}
                >
                  {item.title}
                </Text>
                <Text style={styles.leftContainerText}>
                  {" "}
                  <FontAwesome name="calendar" size={20} color="white" />{" "}
                  {item.date}
                </Text>
              </SafeAreaView>
              <SafeAreaView style={styles.rightContainer}>
                <SafeAreaView style={styles.expense}>
                  <Text style={styles.text}>
                    {formatter.format(item.price)}
                  </Text>
                </SafeAreaView>
              </SafeAreaView>
            </SafeAreaView>
          </Card>
        </SafeAreaView>
      </TouchableWithoutFeedback>
      <ActionSheet 
            ref={actionSheet}
            title="What you want to do ?"
            options={optionArray}   
            cancelButtonIndex={3}   
            destructiveButtonIndex={1}   
            onPress={handleActions}   
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flexDirection: "row",
  },
  expense: {
    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#fff",
    borderColor: "#fff",
    width: "100%",
    margin: 10,
    elevation: 3,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 8,
    shadowOpacity: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    padding: 10,
  },
  leftContainer: {
    width: "60%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  leftContainerText: {
    color: "white",
    padding: 5,
  },
  rightContainer: {
    width: "40%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  rightEndContainer: {
    width: "20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default DetailExpenseCard;
