import { useEffect, useContext } from 'react';
import ExpenseContext from '../store/expense-context';
const useExpenses = () => {
    const { setExpenses, expenses, setLoader } = useContext(ExpenseContext);
    useEffect( () => {
      fetchExpenses();
    }, []);
  
    const fetchExpenses = async() => {
      try{
        if(expenses.length === 0) {
         setLoader(true);
         const data =  await (await fetch('https://expenses-f2237-default-rtdb.firebaseio.com/expenses.json')).json();
            const modifiedData = [];
            for(let entry in data) {
            modifiedData.push(data[entry]);
            }
            setExpenses(modifiedData);
        }
      } catch(error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }

    const addMontlyCredit = async(reqBody) => {
      try{
          const persistData = await (await fetch('https://expenses-f2237-default-rtdb.firebaseio.com/monthlyCredit.json', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
          })).json()
      } catch(error) {
        console.log(error);
      } finally {
       console.log('Completed the persistance...')
      }
    }
  
    
    return {
        expenses,
        addMontlyCredit
    }
}

export {useExpenses};