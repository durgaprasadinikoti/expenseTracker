import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import TotalExpernsesCard from "../components/expenses/TotalExpensesCard";
import DetailExpenseCard from "../components/expenses/DetailExpenseCard";

const DATA = [
  {
    id: 1,
    title: "A Ranga book",
    price: 200,
    date: "01-05-2023",
  },
  {
    id: 2,
    title: "A Ranga book",
    price: 200,
    date: "01-05-2023",
  },
  {
    id: 3,
    title: "A Ranga book",
    price: 200,
    date: "01-05-2023",
  },
  {
    id: 4,
    title: "A Ranga book",
    price: 200,
    date: "01-05-2023",
  }
];

const RecentExpenses = () => {
  const TotalPrice = DATA.reduce( (acc, item) => acc + item.price, 0 )
  return (
    <SafeAreaView style={styles.rootContainer}>
      <TotalExpernsesCard title={"Last 7 Days"} price={TotalPrice} />
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DetailExpenseCard item={item} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    backgroundColor: "#CED9DA",
  },
});

export default RecentExpenses;
