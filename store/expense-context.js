import { createContext, useContext } from 'react';

const ExpenseContext = createContext({
    isAddExpenseModalVisible: false,
    setIsAddExpenseModalVisible: flag => {},
    expenses: [],
    setExpenses: expense => {},
    deleteExpense: id => {},
    expense: {},
    setExpense: expense => {},
    updateExpense: expense => {}
})

export default ExpenseContext;