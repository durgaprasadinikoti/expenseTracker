import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Layout from './Layout';
import ExpenseList from '../components/expenses/ExpenseList';
import { useExpenses } from '../hooks/useExpenses';
import moment from 'moment';

const Expenses = () => {
    const {expenses } = useExpenses();
    const filteredData = expenses.sort( (a, b) => {
        const dateA = new Date(moment(a.date, 'MMM D, YYYY').toDate());
        const dateB = new Date(moment(b.date, 'MMM D, YYYY').toDate());
        return dateB - dateA;
    } )
    return (
        <Layout>
            <ExpenseList title="Total" data={filteredData} />
        </Layout>
    )
}

export default Expenses;