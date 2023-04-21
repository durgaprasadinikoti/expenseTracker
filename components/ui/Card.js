import { SafeAreaView, StyleSheet } from 'react-native';

const Card = ({children, style}) => {
    return (
        <SafeAreaView style={[styles.container, style]}>
                {children}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   container: {
     width: '95%',
     borderWidth: 1,
     borderRadius: 8,
     borderColor: '#120015',
     margin: 12,
     elevation: 3,
     shadowColor: 'black',
     shadowOpacity: 0.5,
     backgroundColor: '#120015',
     shadowOffset: {
        width: 0, 
        height: 1
     },
     shadowRadius: 8
   }
});

export default Card;