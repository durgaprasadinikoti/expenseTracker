import { StyleSheet } from "react-native";
import Layout from "./Layout";
import ExpenseList from "../components/expenses/ExpenseList";
import { useExpenses } from '../hooks/useExpenses';
import moment from 'moment';


const RecentExpenses = () => {
  const {expenses } = useExpenses();
  const currentDate = moment().format('YYYY-MM-DD');

  const filteredData = expenses.filter( item => {
    const originalDate = moment(item.date.toString(), 'MMMM DD, YYYY');
    const formattedDate = originalDate.format('YYYY-MM-DD');
    return currentDate.toString() === formattedDate.toString();
  });

  
  return (
    <Layout>
        <ExpenseList title="Today" data={filteredData} />
    </Layout>
  );
};

export default RecentExpenses;
