import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";
import { toast, ToastContainer } from "react-toastify";


const getLocalStorage = () => {
  const list = localStorage.getItem('items');
  if (list) {
    return JSON.parse(list);
  } else {
    return [];
  }
}

const setLocalStorage = (items) => {
  localStorage.setItem('items', JSON.stringify(items));
}

const App = () => {
  const [items, setItems] = useState(getLocalStorage());
  const addItem = (itemName) => {
    const newItem = {
      name:itemName,
      completed:false,
      id: nanoid(),
    };
    const newItems = [...items,newItem];
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item agregado a la lista');
  }
  
  const removeItem = (itemId)=> {
    const newItems = items.filter((item)=> item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
    toast.success('Item eliminado de la lista');
  }

  const toggleItem = (itemId) => {
    const newItems = items.map((item)=>{
      if (item.id === itemId) {
        const newItem = {...item, completed: !item.completed};
        return newItem;
      }
      return item;
    });
    setItems(newItems);
    setLocalStorage(newItems);
    const toggledItem = newItems.find((item) => item.id === itemId);
    toast.info(`${toggledItem.name} ${toggledItem.completed ? 'marcado': 'desmarcado'} en la lista`);
  }

  return (
    <section className="section-center">
      <ToastContainer />
      <Form addItem={addItem } removeItem={removeItem}/>
      <Items items={items} removeItem={removeItem} toggleItem={toggleItem}/>
    </section>
  );
};

export default App;
