import { useState } from "react";
import Form from "./Form";
import { nanoid } from "nanoid";
import Items from "./Items";

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
  }
  
  const removeItem = (itemId)=> {
    const newItems = items.filter((item)=> item.id !== itemId);
    setItems(newItems);
    setLocalStorage(newItems);
  }


  return (
    <section className="section-center">
      <Form addItem={addItem } removeItem={removeItem}/>
      <Items items={items} removeItem={removeItem}/>
    </section>
  );
};

export default App;
