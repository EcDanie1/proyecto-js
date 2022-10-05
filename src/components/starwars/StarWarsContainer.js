import { useState } from "react"
import { useEffect } from "react"

const StarWarsContainer = () => {

    const [people, setPeople] = useState([])
 


   useEffect(() => {

     getPeople()
    
   }, [])

   const getPeople = () => {
    const URL = 'http://swapi.dev/api/people/'
    fetch (URL)
         .then( response => response.json() )
         .then( data=> {
            console.log( data.results);
            setPeople( data.results )
        })    

   }
   


  return (
    <div>
        <h1>StarWars Container</h1>
        { people.map( p=> <li key={p.ul}>{ p.name }</li>)}
    </div>
  )
}

export default StarWarsContainer