import { StyleSheet } from "react-native";
import Layout from "./Layout";
import ExpenseList from "../components/expenses/ExpenseList";
import { useExpenses } from '../hooks/useExpenses';
import moment from 'moment';


const RecentExpenses = () => {
  const {expenses } = useExpenses();
  const currentDateInst = moment();
  const currentDate = moment(currentDateInst).subtract(6, 'days').format('YYYY-MM-DD');

  const filteredData = expenses.filter( item => {
    const originalDate = moment(item.date.toString(), 'MMMM DD, YYYY');
    const formattedDate = originalDate.format('YYYY-MM-DD');
    return Number(currentDate.replaceAll('-', '')) < Number(formattedDate.replaceAll('-', ''));
  });

  const filteredDataWithLatest = filteredData.sort( (a, b) => {
    const dateA = new Date(moment(a.date, 'MMM D, YYYY').toDate());
    const dateB = new Date(moment(b.date, 'MMM D, YYYY').toDate());
    return dateB - dateA;
} )

  
  return (
    <Layout>
        <ExpenseList title="Last 7 Days" data={filteredDataWithLatest} />
    </Layout>
  );
};

export default RecentExpenses;
