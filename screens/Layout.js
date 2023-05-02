import { SafeAreaView, StyleSheet } from "react-native";
import ExtendedModal from "../components/ui/Modal";

const Layout = ({ children }) => {
  return (
    <SafeAreaView style={styles.container}>
      {children}
      <ExtendedModal />
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
