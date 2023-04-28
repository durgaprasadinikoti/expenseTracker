import { createContext, useContext } from 'react';

const ExpenseContext = createContext({
    isAddExpenseModalVisible: false,
    setIsAddExpenseModalVisible: flag => {},
    expenses: [],
    setExpenses: expense => {},
    deleteExpense: id => {}
})

export default ExpenseContext;