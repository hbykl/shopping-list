import { useState } from "react";

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
  return (
    <>
      <Header />
      <Form addItem={handleAddItem} />
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
function Header() {
  return (
    <h1>🛒 Shopping List</h1>
  );
}
function Form({ addItem }) {
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState(1);
  function handleFormSubmit(e) {
    e.preventDefault();
    const item = { id: Date.now(), title, quantity, completed: false }
    console.log(item);
    addItem(item);
    setTitle('');
    setQuantity(1);
  }
  return (
    <form className="form" onSubmit={handleFormSubmit} >
      <input type="text" placeholder="Ürün adı giriniz" value={title} onChange={(e) => setTitle(e.target.value)} />
      <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
        {
          Array.from({ length: 10 }, (v, i) => i + 1).map(num =>
            <option value={num} key={num}>{num}</option>
          )
        }
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}
function List({ items, deleteItem, updateItem }) {
  return <>{
    items.length > 0 ? (

      <div className="list">
        <ul>
          {items.map((i, index) => (<Item item={i} key={index} onDelete={deleteItem} onUpdate={updateItem} />))}
        </ul>
      </div>
    ) :
      (<p className="list">
        Sepette ürün yok.
      </p>)
  }
  </>;
}
function Item({ item, onDelete, onUpdate }) {
  return (
    <li>
      <input type="checkbox" checked={item.completed} onChange={() => onUpdate(item.id)} />
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.title}</span>
      <button onClick={() => onDelete(item.id)}>X</button>
    </li>
  );
}
function Summary({ items }) {
  if (items.length == 0) { return (<p className="summary"> Sepetinizde ürün bulunmamaktadır.</p>); }

  const completed = items.filter(item => item.completed).length
  return (
    <footer className="summary">
      {items.length == completed ? <p>Alışverişi tamamladınız.</p> :
        <>
          <p>Alışveriş Sepetinizde {items.length} adet ürün bulunmaktadır.</p>
          <p>Bu ürünlerden {completed} tanesini aldınız.</p></>
      }
    </footer>
  );
}
export default App
