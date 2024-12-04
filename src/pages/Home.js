import React, { useState, useEffect } from 'react'

function Home() {

    const data=[{id:1,name:'vimal'},
                {id:2,name:'bharath'},
                {id:3,name:'kumar'},]
    const [player,setPlayer]=useState(0);
    const increase=()=>{
        alert("Match added");
        setPlayer('Vimal')
       return console.log(data);
      
    }
    

    return(<>
    <p>Hello {player}</p>
     <p>List of players: </p>
     data.map((item)=return{
      <p>{item.name}</p>
     })

    <button onClick={increase}> Increase</button>
    </>
      )
}

export default Home