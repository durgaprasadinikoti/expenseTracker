import { SafeAreaView , StyleSheet, Text } from 'react-native';
import Card from '../ui/Card';
import { FontAwesome } from '@expo/vector-icons';

const TotalCard = () => {
    return (
        <Card>
            <SafeAreaView style={styles.container}>
                 <SafeAreaView style={styles.totalTextContainer}>
                        <Text style={styles.text}>Total</Text>
                 </SafeAreaView>
                 <SafeAreaView style={styles.priceTextContainer}>
                     <Text style={styles.text}> <FontAwesome name="rupee" size={24} color="white" /> 4000</Text>
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
        padding: 5,
        fontWeight: 500,
        color: 'white',
        fontSize: 20
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