import React, { useEffect, useState } from 'react'

function Clock() {
  const [Clockstate, setClockstate] = useState()
  
  useEffect(() => {
    setInterval(() => {
        const date = new Date();
        setClockstate(date.toLocaleTimeString());
    }, 1000);
  }, [])
  
  
    return <div>{Clockstate}</div>
}

export default Clock