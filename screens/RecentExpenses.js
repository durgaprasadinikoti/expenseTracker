import { StyleSheet } from "react-native";
import Layout from "./Layout";
import ExpenseList from "../components/expenses/ExpenseList";

const RecentExpenses = () => {
  return (
    <Layout>
        <ExpenseList title="Last 7 Days" />
    </Layout>
  );
};

export default RecentExpenses;
