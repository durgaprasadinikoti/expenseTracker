import { SafeAreaView, StyleSheet, Text } from "react-native";
import Card from "../ui/Card";
import DateCard from "../ui/DateCard";

const AccountSummaryEnity = ({ accountInfo }) => {
  const { Date, totalAmount, totalSpend, delta } = accountInfo;
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  const COLORS = {
    loss: "#A40000",
    profit: "#02494D",
  };

  return (
    <SafeAreaView>
      <SafeAreaView style={[styles.container, styles.accountSummaryContainer]}>
        <DateCard />
      </SafeAreaView>
      <Card
        style={{ borderColor: COLORS.profit, backgroundColor: COLORS.profit }}
      >
        <SafeAreaView>
          <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.totalTextContainer}>
              <Text style={styles.text}>Total Amount</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.priceTextContainer}>
              <Text style={styles.priceText}>
                {" "}
                {formatter.format(totalAmount)}
              </Text>
            </SafeAreaView>
          </SafeAreaView>

          <SafeAreaView style={styles.horizantalLine}></SafeAreaView>

          <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.totalTextContainer}>
              <Text style={styles.text}>Total Spend</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.priceTextContainer}>
              <Text style={styles.priceText}>
                {" "}
                {formatter.format(totalSpend)}
              </Text>
            </SafeAreaView>
          </SafeAreaView>

          <SafeAreaView style={styles.horizantalLine}></SafeAreaView>

          <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.totalTextContainer}>
              <Text style={styles.text}>Profit / Loss</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.priceTextContainer}>
              <Text style={styles.priceText}> {formatter.format(delta)}</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </Card>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
   accountSummaryContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 150
   }, 
    accountSummary: {
        fontWeight: 'bold',
        fontSize: 22,
        color: '#230333'
    }, 
  horizantalLine: {
    width: "100%",
    borderColor: "white",
    borderWidth: 1,
  },
  container: {
    flexDirection: "row",
  },
  text: {
    margin: 5,
    padding: 10,
    color: "white",
  },
  priceText: {
    margin: 5,
    padding: 5,
    fontWeight: 500,
    color: "white",
    fontSize: 18,
  },
  totalTextContainer: {
    width: "50%",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  priceTextContainer: {
    width: "45%",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
});

export default AccountSummaryEnity;
