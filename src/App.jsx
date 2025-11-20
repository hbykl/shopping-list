function App() {
  return (
    <>
      <Header />
      <Form />
      <List/>
      <Summary/>
    </>
  )
}
const items=[
  {"id":1,"title":"Yumurta","quantity":10,"completed":true},
  {"id":2,"title":"Ekmek","quantity":2,"completed":false},
  {"id":3,"title":"Süt","quantity":1,"completed":true},
  {"id":4,"title":"Et","quantity":3,"completed":true},
  {"id":5,"title":"Zeytin","quantity":10,"completed":true},
]
function Header() {
  return (
    <h1>🛒 Shopping List</h1>
  );
}
function Form() {
  return (
    <form className="form">
      <input type="text" placeholder="Ürün adı giriniz" />
      <select>
        {
          Array.from({length:10},(v,i)=>i+1).map(num=>
            <option value={num}>{num}</option>
          )
        }
      </select>
      <button type="submit">Ekle</button>
    </form>
  );
}
function List() {
  return (
    <div className="list">
      <ul>
        {items.map((i,index)=>(<Item item={i} key={index}/>))}
      </ul>
    </div>
  );
}
function Item({item}) {
  return (
    <li>
      <span style={item.completed?{textDecoration:"line-through"}:{}}>{item.title}</span>
      <button>X</button>
    </li>
  );
}
function Summary() {
  return (
    <footer className="summary">Alışveriş Sepetinizde 10 adet ürün bulunmaktadır.</footer>
  );
}
export default App
