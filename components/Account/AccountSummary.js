import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AccountSummaryEnity from './AccountSummaryEntity';

const AccoutSummary = () => {

    const accountInfo = {
        Date: 'May, 2023',
        totalAmount: 280000,
        totalSpend: 290000,
        delta: 10000
    }

    return (
        <SafeAreaView style={styles.container}>
            <AccountSummaryEnity accountInfo={accountInfo} />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default AccoutSummary;