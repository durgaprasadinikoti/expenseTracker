import ExpenseContext from "./expense-context";
import { useState } from 'react';

const ExpenseProvider = ({children}) => {
    const [isAddExpenseModalVisible, setIsAddExpenseModalShow] = useState(false);

    const setIsAddExpenseModalVisible = (flag) => {
        console.log("I am here...");
        console.log(flag);
        setIsAddExpenseModalShow(flag);
    }

    const value = {
        isAddExpenseModalVisible, 
        setIsAddExpenseModalVisible
    }

    return(
        <ExpenseContext.Provider value={value}>
                {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider;