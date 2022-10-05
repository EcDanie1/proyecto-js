import { useState } from "react"
import { useEffect } from "react"
import { json } from "react-router-dom"
import { products } from '../data/products'
import ItemCard from "./ItemCard"




   

const ItemList2 = () => {

  const [items, setItems] = useState([])

  useEffect(() => {

    getProducts().then(response => {
        console.log ( response );
        setItems( response )
    })

  },[])

    const getProducts = () => { 
       return new Promise( resolve => {
        setTimeout(() => {
          resolve ( products )
        }, 3000);
       })
     }



  return (
    <div>
      <h1>Componente ItemList2</h1>
      { items.map (i => <ItemCard key={i.id} {...i} />  )}
    </div>
  )
}

export default ItemList2