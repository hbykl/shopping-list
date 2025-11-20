import Item from "./Item.jsx";
export default function List({ items, deleteItem, updateItem }) {
  return <>{
    items.length > 0 ? (

      <div className="list">
        <ul>
          {items.map((i, index) => (<Item item={i} key={index} onDelete={deleteItem} onUpdate={updateItem}/>))}
        </ul>
      </div>
    ) :
      (<p className="list">
        Sepette ürün yok.
      </p>)
  }
  </>;
}