import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Expenses from './screens/Expenses';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
         <StatusBar style="light" />
         <NavigationContainer>
            <Stack.Navigator screenOptions={{
              headerStyle: {
                backgroundColor: '#02494D'
              },
              headerTintColor: 'white',
            }}>
                <Stack.Screen name="AllExpenses" component={Expenses} options={{
                  title:"All Expenses"
                }}/>
            </Stack.Navigator>
         </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({

});
