import { StatusBar } from "expo-status-bar";
import ExpenseProvider from "./store/ExpenseProvider";
import BootStrap from "./BootStrap";

export default function App() {

  return (
    <ExpenseProvider>
      <StatusBar style="light" />
      <BootStrap />
    </ExpenseProvider>
  );
}
