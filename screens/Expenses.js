import { SafeAreaView, FlatList, StyleSheet } from 'react-native';
import TotalExpernsesCard from '../components/expenses/TotalExpensesCard';
import DetailExpenseCard from '../components/expenses/DetailExpenseCard';
import Layout from './Layout';

const DATA = [
    {
        id: 1,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 2,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 3,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 4,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 5,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 6,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 7,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 8,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 9,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    },
    {
        id: 10,
        title: 'A Ranga book',
        price: 200,
        date: '01-05-2023'
    }

]


const Expenses = () => {
    const TotalPrice = DATA.reduce( (acc, item) => acc + item.price, 0 )
    return (
        <Layout>
            <TotalExpernsesCard title={'Total'} price={TotalPrice} />
            <FlatList data={DATA} keyExtractor={ (item) => item.id} renderItem={ ({item}) =>  <DetailExpenseCard item={item}/> }/>
        </Layout>
    )
}

export default Expenses;