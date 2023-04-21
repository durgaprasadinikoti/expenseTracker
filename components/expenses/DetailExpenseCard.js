import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import { FontAwesome } from '@expo/vector-icons'; 

const DetailExpenseCard = ({item}) => {
    console.log(item);
    return(
        <Card style={{backgroundColor: '#4F4F4F', borderColor: '#4F4F4F'}}>
            <SafeAreaView style={styles.container}>
                <SafeAreaView style={styles.leftContainer}>
                    <Text style={[styles.leftContainerText, {fontWeight: 'bold'}]}>{item.title}</Text>
                    <Text style={styles.leftContainerText}><FontAwesome name="calendar" size={20} color="white" /> {item.date}</Text>
                </SafeAreaView>
                <SafeAreaView style={styles.rightContainer}>
                     <SafeAreaView  style={styles.expense}>
                         <Text style={styles.text}>{item.price}</Text>
                     </SafeAreaView>
                </SafeAreaView>
            </SafeAreaView>
        </Card>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
        flexDirection: 'row'
    },
    expense: {
        borderWidth: 1,
        borderRadius: 8,
        backgroundColor: '#fff',
        borderColor: '#fff',
        width: '100%',
        margin: 10,
        elevation: 3,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 8,
        shadowOpacity: 0.5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: 'bold',
        padding: 10
    },
    leftContainer: {
       width: '70%',
       justifyContent: 'flex-start',
       alignItems: 'flex-start',
    },
    leftContainerText: {
        color: 'white',
        padding: 5
    },
    rightContainer: {
        width: '30%',
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }

});

export default DetailExpenseCard;
