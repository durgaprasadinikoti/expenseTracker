import ExpenseContext from "./expense-context";
import { useState } from 'react';

const ExpenseProvider = ({children}) => {
    const [isAddExpenseModalVisible, setIsAddExpenseModalShow] = useState(false);
    const [expenses, setExpensesInst] = useState([]);
    const [expense, setExpenseInst] = useState({});
    const [mainScreen, setMainScreenInst] = useState(false);

    const setIsAddExpenseModalVisible = (flag) => {
        setIsAddExpenseModalShow(flag);
    }

    const setExpenses = expense => setExpensesInst( (previousExpenses) => [...previousExpenses, ...expense]  )
    const deleteExpense = id => setExpensesInst( (previousExpenses) => previousExpenses.filter( expense => expense.id !== id ) );
    const updateExpense = (expenseInst) => setExpensesInst( (previousExpenses) => previousExpenses.map( expense => {
        if(expense.id === expenseInst.id) {
            return { ...expenseInst }
        }
        return expense;
    } ));
    const setExpense = expense => {
        console.log(expense);
        setExpenseInst(expense);
    }

    const setMainScreen = (screen) => {
        setMainScreenInst(screen);
    }   
    const value = {
        isAddExpenseModalVisible, 
        setIsAddExpenseModalVisible,
        expenses,
        setExpenses,
        deleteExpense,
        expense,
        setExpense,
        updateExpense,
        mainScreen,
        setMainScreen
    }

    return(
        <ExpenseContext.Provider value={value}>
                {children}
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider;