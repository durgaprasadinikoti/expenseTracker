import { createContext, useContext } from 'react';

const ExpenseContext = createContext({
    isAddExpenseModalVisible: false,
    setIsAddExpenseModalVisible: flag => {},
    expenses: [],
    setExpenses: expense => {},
    deleteExpense: id => {},
    expense: {},
    setExpense: expense => {},
    updateExpense: expense => {},
    mainScreen: false,
    setMainScreen: screen => {},
    loader: true,
    setLoader: flag => {},
    isMonthlyExpenseModalVisible: false,
    setIsMonthlyExpenseModalVisible: flag => {},
})

export default ExpenseContext;