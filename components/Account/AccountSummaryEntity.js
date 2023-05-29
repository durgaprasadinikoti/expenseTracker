import { SafeAreaView, StyleSheet, Text, ActivityIndicator, Alert } from "react-native";
import Card from "../ui/Card";
import DateCard from "../ui/DateCard";
import Filter from "../ui/Filter";
import { useContext, useState } from 'react';
import ExpenseContext from "../../store/expense-context";

const AccountSummaryEnity = ({ accountInfo }) => {
  const { Date, totalAmount, totalSpend, delta } = accountInfo;
  const { expenses } = useContext(ExpenseContext);
  const [filterInputObj, setFilterInputObj] = useState({month: '', year: ''})
  const [ loader, setLoader ] = useState(false);
  const [ dataRendered, setIsDataRendered ] = useState(false);
  const [totalAmountValue, setTotalAmountValue] = useState(280000);
  const [totalAmountSepent, setTotalAmountSpent] = useState(280000);
  const [totalBalance, setTotalBalance] = useState(0);

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });

  const COLORS = {
    loss: "#E41E18",
    profit: "#22AE00",
    black: 'black',
    other: '#3F3F3F'
  };

  handleFilter = (filterInput) => {
    if(Object.values(filterInput).every( item => item !== '' )){
      setLoader(true);
      setIsDataRendered(false);
      const filteredExpenses = expenses.filter( item => item.date.includes(filterInput.month) && item.date.includes(filterInput.year) )
      setFilterInputObj({month: filterInput.month, year: filterInput.year})
      const TotalPrice = filteredExpenses.reduce(
        (acc, item) => acc + Number(item.price),
        0
      );
      setTotalAmountSpent(TotalPrice);
      setTotalBalance(totalAmountValue - TotalPrice);
      setLoader(false);
      setIsDataRendered(true);
    } else {
      Alert.alert(
        'Error',
        'Please select month and year',
        [
          { text: 'OK', onPress: () => console.log('OK Pressed') },
        ],
        { cancelable: false }
      );
    }
  }

  const Spinner = () => (
    <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: 40 }}>
      <ActivityIndicator size="large" color="#FF1005" />
    </SafeAreaView>
  );


  return (
    <SafeAreaView>
      <SafeAreaView style={[styles.container, styles.accountSummaryContainer]}>
        <Filter onFilter={handleFilter} />
      </SafeAreaView>
      { !loader && dataRendered && <SafeAreaView style={[styles.container, styles.accountSummaryContainer]}> 
        <DateCard month={filterInputObj.month} year={filterInputObj.year} />
      </SafeAreaView> }
      {loader && <Spinner />}
     {!loader && dataRendered && <Card
        style={{ borderColor: COLORS.other, backgroundColor: COLORS.other }}
      >
        <SafeAreaView>
          <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.totalTextContainer}>
              <Text style={styles.text}>Total Amount</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.priceTextContainer}>
              <Text style={styles.priceText}>
                {" "}
                {formatter.format(totalAmountValue)}
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
                {formatter.format(totalAmountSepent)}
              </Text>
            </SafeAreaView>
          </SafeAreaView>

          <SafeAreaView style={styles.horizantalLine}></SafeAreaView>

          <SafeAreaView style={styles.container}>
            <SafeAreaView style={styles.totalTextContainer}>
              <Text style={styles.text}>Profit / Loss</Text>
            </SafeAreaView>
            <SafeAreaView style={styles.priceTextContainer}>
              <Text style={[styles.priceText, {color: totalBalance > 0 ? COLORS.profit : COLORS.loss}]}> {formatter.format(totalBalance)}</Text>
            </SafeAreaView>
          </SafeAreaView>
        </SafeAreaView>
      </Card> }
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
