import { useState } from "react";
import Header from "./components/Header.jsx";
import Form from "./components/Form.jsx";
import List from "./components/List.jsx";
import Summary from "./components/Summary.jsx";

function App() {
  const [items, setItems] = useState([]);
  function handleAddItem(item) {
    setItems((items) => [...items, item])
  }
  function handleDeleteItem(id) {
    setItems(items => items.filter(item => item.id !== id));
  }
  function handleUpdateItem(id) {
    setItems(items => items.map(item => item.id == id ? { ...item, completed: !item.completed } : item))
  }
  function handleClearList(){
    if (items.length==0){return null}
    const onay=window.confirm("Listedeki tüm ürünleri silmek istediğinizden emin misiniz?");
    if(onay){
    setItems([]);
    }
  }
  return (
    <>
      <Header />
      <Form addItem={handleAddItem} clearItem={handleClearList} />
      <List items={items} deleteItem={handleDeleteItem} updateItem={handleUpdateItem} />
      <Summary items={items} />
    </>
  )
}
// const items=[
//   {"id":1,"title":"Yumurta","quantity":10,"completed":true},
//   {"id":2,"title":"Ekmek","quantity":2,"completed":false},
//   {"id":3,"title":"Süt","quantity":1,"completed":true},
//   {"id":4,"title":"Et","quantity":3,"completed":true},
//   {"id":5,"title":"Zeytin","quantity":10,"completed":true},
// ]
export default App
