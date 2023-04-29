import { StyleSheet } from "react-native";
import Layout from "./Layout";
import ExpenseList from "../components/expenses/ExpenseList";
import { useContext, useEffect } from 'react';
import ExpenseContext from "../store/expense-context";

const RecentExpenses = () => {
  const { setExpenses } = useContext(ExpenseContext);
  useEffect( () => {
    fetchExpenses();
  }, []);

  const fetchExpenses = async() => {
    try{
       const data = await (await fetch('https://expenses-f2237-default-rtdb.firebaseio.com/expenses.json')).json();
       const modifiedData = [];
       for(let entry in data) {
        modifiedData.push(data[entry]);
       }
       setExpenses(modifiedData);
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <Layout>
        <ExpenseList title="Last 7 Days" />
    </Layout>
  );
};

export default RecentExpenses;
