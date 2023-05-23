import { SafeAreaView , StyleSheet, Text } from 'react-native';
import Card from '../ui/Card';

const TotalCard = ({title, price}) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'INR',
        minimumFractionDigits: 2,
      });
    return (
        <Card>
            <SafeAreaView style={styles.container}>
                 <SafeAreaView style={styles.totalTextContainer}>
                        <Text style={styles.text}>{title}</Text>
                 </SafeAreaView>
                 <SafeAreaView style={styles.priceTextContainer}>
                     <Text style={styles.priceText}> {formatter.format(price)}</Text>
                 </SafeAreaView>
            </SafeAreaView>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    text: {
        margin: 5,
        padding: 10,
        color: 'white',
    },
    priceText: {
        margin: 5,
        padding: 5,
        fontWeight: 500,
        color: 'white',
        fontSize: 18
    },
    totalTextContainer: {
        width: '50%',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    priceTextContainer: {
        width: '45%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
});

export default TotalCard;