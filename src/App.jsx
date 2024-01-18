
import './App.css'
import FilterableProductTable from './componentes/FilterableProductTable'

function App() {
 // De momento, los productos se definen aquí, pero luego se obtendrán de una API
  const PRODUCTS = [
    {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
    {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
    {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
    {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
    {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
    {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
  ];

  return (
    <>
     <FilterableProductTable products={PRODUCTS}/>
    </>
  )
}

export default App
