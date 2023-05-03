import { StatusBar } from "expo-status-bar";
import ExpenseProvider from "./store/ExpenseProvider";
import Navigation from "./Navigation/Navigation";
import { useState } from 'react';
import { Button, SafeAreaView } from 'react-native';

export default function App() {
  const [ mainScreen, setMainScreen ] = useState(false);

  return (
    <ExpenseProvider>
      <StatusBar style="light" />
      { !mainScreen && <SafeAreaView><Button title="Navigate to Main Screen" onPress={ () => setMainScreen(true) } /></SafeAreaView> }
      {mainScreen && <Navigation /> }
    </ExpenseProvider>
  );
}
