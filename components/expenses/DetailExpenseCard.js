import { SafeAreaView, Text, StyleSheet } from 'react-native';
import Card from '../ui/Card';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons'; 
import { useContext } from 'react';
import ExpenseContext from '../../store/expense-context';

const DetailExpenseCard = ({item}) => {
    const { deleteExpense } = useContext(ExpenseContext);
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
                <SafeAreaView style={styles.rightEndContainer}>
                     <MaterialIcons name="edit" size={24} color="#29BB0C" />
                     <MaterialIcons name="delete" size={24} color="#FF0000" onPress={deleteExpense.bind(this, item.id)} />
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
       width: '50%',
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
    },
    rightEndContainer: {
        width: '20%',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }

});

export default DetailExpenseCard;
