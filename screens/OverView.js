
import { SafeAreaView, StyleSheet, Text } from 'react-native';
import Layout from './Layout';
import AccoutSummary from '../components/Account/AccountSummary';
import TotalCard from '../components/expenses/TotalExpensesCard';

const OverView = () => {

    return (
        <Layout>
             <TotalCard  title={'Total Savings'} price={11000} />
             <AccoutSummary />
        </Layout>
    )
}



export default OverView;