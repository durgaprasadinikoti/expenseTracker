import { useEffect, useContext, useState } from 'react';
import ExpenseContext from '../store/expense-context';
import { database } from '../firebaseConfig';
import { ref, set, update } from "firebase/database";

const useSavings = () => {
    const [loader, setLoader] = useState(true); 
    const { setMontlyCredits } = useContext(ExpenseContext);
    const addMontlyCredit = async(reqBody) => {
      try{
        set(ref(database, 'monthlyCredit/' + reqBody.id), reqBody);
          // const persistData = await (await fetch(`https://expenses-f2237-default-rtdb.firebaseio.com/monthlyCredit/${reqBody.id}.json`, {
          //   method: 'POST',
          //   headers: {
          //     'Content-Type': 'application/json'
          //   },
          //   body: JSON.stringify(reqBody)
          // })).json()
      } catch(error) {
        console.log(error);
      } finally {
       console.log('Completed the persistance...')
      }
    }

    const fetchMonthlyCredit = async() => {
      try {
        const response = await (await fetch('https://expenses-f2237-default-rtdb.firebaseio.com/monthlyCredit.json')).json();
        const modifiedData = [];
        for(let entry in response) {
          modifiedData.push(response[entry]);
        }
        setMontlyCredits(modifiedData);
      } catch(error) {
        console.error(error);
      } finally {
        setLoader(false);
      }
    }
    const updateMontlyCredit = async(reqBody) => {
      try{
          const update = await (await fetch(`https://expenses-f2237-default-rtdb.firebaseio.com/monthlyCredit/${reqBody.id}.json`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(reqBody)
          })).json()
      } catch(error) {
        console.log(error);
      } finally {
       console.log('Completed the update...')
      }
    }

    const deleteMontlyCreditInst = async(id) => {
      try{
          const update = await (await fetch(`https://expenses-f2237-default-rtdb.firebaseio.com/monthlyCredit/${id}.json`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json'
            },
          })).json()
      } catch(error) {
        console.log(error);
      } finally {
       console.log('Completed the delete...')
      }
    }
    
    return {
        addMontlyCredit,
        fetchMonthlyCredit,
        updateMontlyCredit,
        deleteMontlyCreditInst,
        loader
    }
}

export {useSavings};