import { SafeAreaView, Text, StyleSheet } from 'react-native';

const DateCard = ({month, year}) => {
    return <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.innerContainer}>
                <Text style={styles.innterTopText}>{month}</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.secondInnerContainer}>
                <Text style={styles.secondText}>{year}</Text>
            </SafeAreaView>
    </SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'white',
        backgroundColor: 'white',
        shadowColor: 'white',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowRadius: 8
    },

    innerContainer: {
        backgroundColor: '#F55640',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
    innterTopText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        padding: 5
    },
    secondInnerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    secondText: {
        fontSize: 24,
        fontWeight: 500,
        color: 'black',
        padding: 5
    }

})

export default DateCard;