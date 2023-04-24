import { createContext, useContext } from 'react';

const ExpenseContext = createContext({
    isAddExpenseModalVisible: false,
    setIsAddExpenseModalVisible: flag => {}
})

export default ExpenseContext;