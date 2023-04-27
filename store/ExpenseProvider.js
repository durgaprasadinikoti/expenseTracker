import ExpenseContext from "./expense-context";
import { useState } from 'react';

const ExpenseProvider = ({children}) => {
    const [isAddExpenseModalVisible, setIsAddExpenseModalShow] = useState(false);
    const [expenses, setExpensesInst] = useState([]);

    const setIsAddExpenseModalVisible = (flag) => {
        setIsAddExpenseModalShow(flag);
    }

    const setExpenses = expense => setExpensesInst( (previousExpenses) => [...previousExpenses, expense]  )
    const value = {
        isAddExpenseModalVisible, 
        setIsAddExpenseModalVisible,
        expenses,
        setExpenses
    }

    return(
        <ExpenseContext.Provider value={value}>
                {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider;