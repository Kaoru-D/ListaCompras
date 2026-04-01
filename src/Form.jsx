import React, { useState } from 'react'

const Form = ({addItem}) => {
    const [nameItem, setNameItem]= useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (!nameItem) {
            return;
        };
        addItem(nameItem);
        setNameItem('');
    }
  return (
    <form action="" onSubmit={handleSubmit}>
        <h4>Lista de Compras</h4>
        <div className='form-control'>
            <input type="text" className='form-input' value={nameItem} onChange={(e)=>setNameItem(e.target.value)}/>
            <button type="submit" className='btn'>
                Agregar
            </button>
        </div>
    </form>
  )
}

export default Form