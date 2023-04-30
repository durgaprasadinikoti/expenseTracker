import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Layout from './Layout';
import ExpenseList from '../components/expenses/ExpenseList';
import { useExpenses } from '../hooks/useExpenses';

const Expenses = () => {
    const {expenses } = useExpenses();
    return (
        <Layout>
            <ExpenseList title="Total" data={expenses} />
        </Layout>
    )
}

export default Expenses;