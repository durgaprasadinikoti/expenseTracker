import { SafeAreaView, StyleSheet, Modal, Text, Button } from 'react-native';
import { useState, useEffect, useContext } from 'react';
import ExpenseContext from '../../store/expense-context';

const ExtendedModal = () => {
    const { isAddExpenseModalVisible, setIsAddExpenseModalVisible } = useContext(ExpenseContext);

    useEffect( () => {
        console.log(isAddExpenseModalVisible);
    }, [isAddExpenseModalVisible]);

    return(
        <Modal visible={isAddExpenseModalVisible} animationType={'side'} transparent={true} onRequestClose={() => { setIsAddExpenseModalVisible(false) }}>
                <SafeAreaView style={styles.container}>
                        <Text>Add Expense modal</Text>
                        <Button title="Cancel" onPress={ () => setIsAddExpenseModalVisible(false) } />
                </SafeAreaView>
        </Modal>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CED9DA',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default ExtendedModal;