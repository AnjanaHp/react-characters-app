import { useEffect, useState } from "react";
import axios from 'axios';

function Homepage () {
const [characters , setCharacters] =useState(null);

useEffect(() => {
   axios.get('https://ih-crud-api.herokuapp.com/characters')
   
   .then((response) =>{
console.log(response.data);
setCharacters(response.data);
   })

   .catch(e => console.log('Error',e) )
}, []);

if(characters === null){
    return <h2> Loading...</h2>
}

    return(
        <>            
        <h2>Number of characters in the API: {characters.length}</h2>
        {characters.map((characterObj,index )=> {

       return (
        <div key ={index} className="box">

             <h3> {characterObj.name} </h3> 
              <p>  {characterObj.occupation}  </p>
        </div>
        )
        })}
        </>
        
        
      
    )
}
export default Homepage;