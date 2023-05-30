import { useEffect, useContext } from 'react';
import ExpenseContext from '../store/expense-context';
const useSavings = () => {
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
        addMontlyCredit
    }
}

export {useSavings};