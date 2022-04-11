import React from 'react';
import axios from 'axios';
import { useState, useEffect, useRef} from 'react';
import Row from './Row';
import './App.css';

function App() {
  const getCurrentTime = () => {
    const time = new Date();
    return `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`
  }
  
  const [time, setTime] = useState(getCurrentTime());
  
  setInterval(() => {
    setTime(getCurrentTime());
  }, 1000);

  const [transactionType, setTransactionType] = useState('debit');
  const [transactions, setTransactions] = useState([]);
  const firstRun = useRef(true);

  const getTransactions = async () => {
    let url = transactionType === 'credit' ? 'https://moj-api.herokuapp.com/credits' : 'https://moj-api.herokuapp.com/debits';
    const res = await axios.get(url);
    return res.data;
  }

  useEffect(() => {
    if(firstRun.current){
      firstRun.current = false;
      return;
    }
    
    getTransactions().then(data => {
      setTransactions(data);
    });
  }, [transactionType])

  return (
    <div className="App">
      <div>
        <p>Hello User</p>
        
        <p>{time}</p>

        <h3>Select transaction type</h3>
        <select onChange={e => setTransactionType(e.target.value)}>
          <option value={'debit'}>Debits</option>
          <option value={'credit'}>Credits</option>
        </select>

        {transactions.map(transaction => (
          <Row key={transaction.id} transaction={transaction}/>
        ))}
      </div>
    </div>
  );
}

export default App;
