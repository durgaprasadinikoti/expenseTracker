import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import TotalExpernsesCard from "./TotalExpensesCard";
import DetailExpenseCard from "./DetailExpenseCard";
import { Octicons } from '@expo/vector-icons'; 
import { useContext } from 'react';
import ExpenseContext from "../../store/expense-context";

const ExpenseList = ({ title, data }) => {
  const { loader } = useContext(ExpenseContext);
  const TotalPrice = data.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );
  return (
    <>
      {loader && <SafeAreaView style={styles.innerContainer}><Text style={styles.text}>Loading please wait...</Text></SafeAreaView>}
      {TotalPrice !== 0 && !loader && (
        <TotalExpernsesCard title={title} price={TotalPrice} />
      )}
      {TotalPrice === 0 && !loader && (
        <SafeAreaView style={styles.noExpenseContainer}>
          <Text style={styles.text}>Start add your expenses  <Octicons name="smiley" size={24} color="#FF4900" /></Text>
        </SafeAreaView>
      )}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DetailExpenseCard item={item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  noExpenseContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
    padding: 20,
    color: "#210041",
  },
});

export default ExpenseList;
