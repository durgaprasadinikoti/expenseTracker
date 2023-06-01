import { SafeAreaView, StyleSheet, Text } from 'react-native';
import AccountSummaryEnity from './AccountSummaryEntity';

const AccoutSummary = () => {
    return (
        <SafeAreaView style={styles.container}>
            <AccountSummaryEnity />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});

export default AccoutSummary;