import { SafeAreaView, Pressable, StyleSheet, Text } from 'react-native';
import Layout from './Layout';
import Card from '../components/ui/Card';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import ExpenseContext from '../store/expense-context';
import { useContext } from 'react';

const Settings = () => {
    const { setMainScreen } = useContext(ExpenseContext)
    return(
        <Layout>
            <Card>
                <SafeAreaView style={styles.container}>
                  <Text style={styles.text} onPress={() => setMainScreen(false)}> <MaterialCommunityIcons name="logout" size={24} color="white" />  Logout</Text>
                </SafeAreaView>
            </Card>
        </Layout>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontWeight: "bold",
        fontSize: 16,
        margin: 5,
        padding: 5,
        color: "white",
    }
})


export default Settings;