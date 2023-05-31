import { SafeAreaView, StyleSheet, Text, FlatList } from "react-native";
import { useSavings } from "../hooks/useSavings";
import DetailMonthlyCreditCard from "../components/expenses/DetailMontlyCreditCard";
import { useEffect, useContext, useState } from 'react';
import ExpenseContext from "../store/expense-context";
import Layout from "./Layout";

const MonthlyExpenses = () => {
  const { fetchMonthlyCredit, loader } = useSavings();
  const [ dataLoaded, setDataLoaded] = useState(false);
  const { monthlyCredits, isMonthlyExpenseModalVisible } = useContext(ExpenseContext);
  useEffect( () => {
    fetchMonthlyCredit();
  }, [isMonthlyExpenseModalVisible])

  return (
    <Layout>
      {loader && <SafeAreaView style={styles.innerContainer}><Text style={styles.text}>Loading please wait...</Text></SafeAreaView>}
      {!loader && ( 
        <FlatList
          data={monthlyCredits}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <DetailMonthlyCreditCard item={item} />}
        /> ) }
    
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 20,
    padding: 20,
    color: "#210041",
  },
});

export default MonthlyExpenses;
