export default function Summary({ items }) {
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