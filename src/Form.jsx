import React, { useState } from 'react'
import { toast } from 'react-toastify';

const Form = ({addItem}) => {
    const [nameItem, setNameItem]= useState('');

    const handleSubmit = (e)=> {
        e.preventDefault();
        if (!nameItem) {
            toast.error('Por favor ingresa un nombre para agregar a la lista');
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