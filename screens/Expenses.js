import { SafeAreaView, Text, StyleSheet } from 'react-native';
import TotalExpernsesCard from '../components/expenses/TotalExpensesCard';

const Expenses = () => {
    return (
        <SafeAreaView style={styles.rootContainer}>
            <TotalExpernsesCard />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        backgroundColor: '#CED9DA'
    }
})

export default Expenses;