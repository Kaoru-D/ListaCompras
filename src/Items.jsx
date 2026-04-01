import React from 'react'
import SingleItem from './SingleItem'

const Items = ({items, removeItem, toggleItem}) => {
  return (
    <div className='items'>
        {items.map((item)=>{
            return <SingleItem key={item.id} item={item} removeItem={removeItem} toggleItem={toggleItem}/>
        })}
    </div>
  )
}

export default Items