import { SafeAreaView, Text, StyleSheet } from 'react-native';

const Settings = () => {
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Coming soon!</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
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
    }
})


export default Settings;