import React, { useState, useEffect } from 'react'

function Home() {
    const [player,setPlayer]=useState(0);
    const increase=()=>{
        alert("Match added");
       return console.log('hello');
    }
    

    return(<>
    <p>Hello {player}</p>
    <button onClick={increase}> Increase</button>
    </>
      )
}

export default Home