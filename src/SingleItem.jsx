import React, { useState } from 'react'

const SingleItem = ({item, removeItem, toggleItem}) => {
    const [isChecked, setIsChecked]= useState(item.completed)
  return (
    <div className='single-item'>
        <input type="checkbox" checked={isChecked} onChange={()=>{setIsChecked(!isChecked); toggleItem(item.id);}} />
        <p style={{textTransform:'capitalize', textDecoration:isChecked && 'line-through'}}>{item.name}</p>
        <button type="button" className='btn remove-btn' onClick={()=> removeItem(item.id)}>
            Quitar
        </button>
    </div>
  )
}

export default SingleItem