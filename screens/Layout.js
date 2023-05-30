import { SafeAreaView, StyleSheet } from "react-native";
import ExtendedModal from "../components/ui/Modal";
import MonthlyCredit from "../components/expenses/MonthlyCredit";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <ExtendedModal />
      <MonthlyCredit />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CED9DA",
  },
});

export default Layout;
