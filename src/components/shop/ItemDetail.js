import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { products } from '../data/products'

const ItemDetail = () => {


  const { id: itemId } = useParams()
  const [item, setItem] = useState({})

  useEffect(() => {
    getItemDetails().then( response => {
      setItem ( response )
    })
  
  }, [])
  

  const getItemDetails = () => { 
      return new Promise((resolve, reject)=> {
         setTimeout(() => {
           resolve( products.find( p=> p.id === Number(itemId)) )
         }, 3000);
      })
   }
   
  return (
    <div className='m-6'>
      <div>{ item.name }</div>
      <div>Price: { item.price }</div>
    </div>
  )
}

export default ItemDetail