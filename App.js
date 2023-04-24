import { StatusBar } from "expo-status-bar";
import ExpenseProvider from "./store/ExpenseProvider";
import Navigation from "./Navigation";

export default function App() {

  return (
    <ExpenseProvider>
      <StatusBar style="light" />
      <Navigation />
    </ExpenseProvider>
  );
}
