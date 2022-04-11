import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

import './App.css';



function Credit() {
  const [creditData, setCreditData] = useState([]);
  useEffect(() => {
      axios.get('https://moj-api.herokuapp.com/credits')
      .then((res) => 
        {
            console.log(`data from api: ${res.data}`)
            setCreditData(res.data)
            console.log(`data of creditData: ${creditData}`)
        }).
      catch((err) => console.log(err))
  },[])
  
  return (
    <div className="credit_info">
      <h1>Credit info:</h1>
      <table>
            <tr>
                <th>Description</th>
                <th>Amount</th>
                <th>Date</th>
            </tr>
       {creditData.map((val) => 
            <tr>
                <th>{val.description}</th>
                <th>{val.amount}</th>
                <th>{val.date}</th>
            </tr>
       
       )}
        
        </table>
      <button onClick={Credit}></button>
    </div>
  );
}

export default Credit;
