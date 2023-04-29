import { FlatList, StyleSheet, Text, SafeAreaView } from "react-native";
import TotalExpernsesCard from "./TotalExpensesCard";
import DetailExpenseCard from "./DetailExpenseCard";
import { useContext } from "react";
import ExpenseContext from "../../store/expense-context";
import { Octicons } from '@expo/vector-icons'; 
import { useEffect } from 'react';

const ExpenseList = ({ title }) => {
  const { expenses } = useContext(ExpenseContext);

  const TotalPrice = expenses.reduce(
    (acc, item) => acc + Number(item.price),
    0
  );
  return (
    <>
      {TotalPrice !== 0 && (
        <TotalExpernsesCard title={title} price={TotalPrice} />
      )}
      {TotalPrice === 0 && (
        <SafeAreaView style={styles.noExpenseContainer}>
          <Text style={styles.text}>Start add your expenses  <Octicons name="smiley" size={24} color="#FF4900" /></Text>
        </SafeAreaView>
      )}
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DetailExpenseCard item={item} />}
      />
    </>
  );
};

const styles = StyleSheet.create({
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
