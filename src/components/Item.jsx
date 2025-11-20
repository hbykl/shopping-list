export default function Item({ item, onDelete, onUpdate}) {
  return (
    <li>
      <input type="checkbox" checked={item.completed} onChange={() => onUpdate(item.id)} />
      <span style={item.completed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.title}</span>
      <button onClick={() => onDelete(item.id)}>X</button>
    </li>
  );
}