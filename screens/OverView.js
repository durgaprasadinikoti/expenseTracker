
import Layout from './Layout';
import AccoutSummary from '../components/Account/AccountSummary';
import TotalCard from '../components/expenses/TotalExpensesCard';
import { useEffect, useState, useContext } from 'react';
import { useSavings } from '../hooks/useSavings';
import ExpenseContext from '../store/expense-context';
import {SafeAreaView, Text, StyleSheet } from 'react-native';
import { useExpenses } from '../hooks/useExpenses';

const OverView = () => {
    const [ totalSavings, setTotalSavings ] = useState();
    const { monthlyCredits, expenses } = useContext(ExpenseContext);
    const { fetchMonthlyCredit } = useSavings();
    const {} = useExpenses();
    const [loader, setLoader] = useState(true)

    useEffect( () => {
        fetchMonthlyCredit();
    }, []);

    useEffect( () => {
        if(Object.keys(monthlyCredits).length !== 0) {
            const total = monthlyCredits.reduce( (acc, item) => acc = acc + item.amount, 0 )
            let expensesCount = 0;
            if(Object.keys(expenses).length !== 0) {
                expensesCount = expenses.reduce( (acc, item) => acc = acc + Number(item.price), 0 )
            }
            setTotalSavings(total - expensesCount);
            setLoader(false);
        }
    })

    return (
        <Layout>
             { loader && <SafeAreaView style={styles.innerContainer}><Text style={styles.text}>Loading please wait...</Text></SafeAreaView>}
             {!loader && <TotalCard  title={'Account Balance'} price={totalSavings} /> }
             {!loader && <AccoutSummary /> }
        </Layout>
    )
}

const styles = {
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      text: {
        fontWeight: "bold",
        fontSize: 20,
        margin: 20,
        padding: 20,
        color: "#210041",
      },
}



export default OverView;