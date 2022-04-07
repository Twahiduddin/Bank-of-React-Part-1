import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import './App.css';



function Debits() {
  const [debitData, setDebitData] = useState([]);
  useEffect(() => {
      axios.get('https://moj-api.herokuapp.com/debits')
      .then((res) => 
        {
            console.log(`data from api: ${res.data}`)
            setDebitData(res.data)
            console.log(`data of creditData: ${debitData}`)
        }).
      catch((err) => console.log(err))
  },[])
  
  return (
    <div className="debit_info">
       <h1>Debit info</h1>
       <table>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
       {debitData.map((val) => 
            <tr>
                <th>{val.description}</th>
                <th>{val.amount}</th>
                <th>{val.date}</th>
            </tr>
       )}
        </table>
    </div>
  );
}

export default Debits;