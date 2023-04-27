import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import TotalExpernsesCard from '../components/expenses/TotalExpensesCard';
import DetailExpenseCard from '../components/expenses/DetailExpenseCard';
import Layout from './Layout';
import { useContext } from 'react';
import ExpenseContext from "../store/expense-context";

const Expenses = () => {
    const { expenses } = useContext(ExpenseContext);
    console.log(expenses);
    const TotalPrice = expenses.reduce( (acc, item) => acc + Number(item.price), 0 )
    return (
        <Layout>
            <TotalExpernsesCard title={'Total'} price={TotalPrice} />
            <FlatList data={expenses} keyExtractor={ (item) => item.id} renderItem={ ({item}) =>  <DetailExpenseCard item={item}/> }/>
        </Layout>
    )
}

export default Expenses;