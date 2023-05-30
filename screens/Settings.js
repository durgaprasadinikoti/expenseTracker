import { SafeAreaView, Pressable, StyleSheet, Text } from "react-native";
import Layout from "./Layout";
import Card from "../components/ui/Card";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import ExpenseContext from "../store/expense-context";
import { useContext, useState } from "react";

const Settings = () => {
  const { setMainScreen, setIsMonthlyExpenseModalVisible } = useContext(ExpenseContext);

  return (
      <Layout>
        <Card>
          <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.innerCOntainer}>
              <SafeAreaView
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <MaterialCommunityIcons name="logout" size={24} color="white" />
              </SafeAreaView>
              <Text style={styles.text} onPress={() => setMainScreen(false)}>
                Logout{" "}
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </Card>

        <Card>
          <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.innerCOntainer}>
              <SafeAreaView
                style={{ justifyContent: "center", alignItems: "center" }}
              >
                <MaterialCommunityIcons name="cash" size={24} color="white" />
              </SafeAreaView>
              <Text style={styles.text} onPress={() => setIsMonthlyExpenseModalVisible(true)}>
                Add Monthly Credit
              </Text>
            </SafeAreaView>
          </SafeAreaView>
        </Card>
      </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  innerCOntainer: {
    flexDirection: "row",
  },
  text: {
    fontWeight: "bold",
    fontSize: 14,
    marginHorizontal: 5,
    marginVertical: 5,
    color: "white",
    paddingVertical: 5,
  },
});

export default Settings;
