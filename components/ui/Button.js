import { Pressable, StyleSheet, Text } from 'react-native';

const Button = ({children, style, textStyle, onPress}) => {

    return (
        <Pressable style={[styles.container, style]} onPress={onPress}>
            <Text style={[styles.text, textStyle]}>{children}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        borderColor: '#120015',
        borderWidth: 2,
        elevation: 3,
        backgroundColor: '#120015',
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.5,
        shadowRadius: 8,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        padding: 5
    }
});

export default Button;