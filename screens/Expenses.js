import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import Layout from './Layout';
import ExpenseList from '../components/expenses/ExpenseList';

const Expenses = () => {
    return (
        <Layout>
            <ExpenseList title="Total" />
        </Layout>
    )
}

export default Expenses;