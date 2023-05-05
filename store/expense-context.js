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
    setMainScreen: screen => {}
})

export default ExpenseContext;