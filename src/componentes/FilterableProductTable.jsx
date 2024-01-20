import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";
import { useState } from "react";

 export default function FilterableProductTable() {
    const PRODUCTS = [
        {category: "Frutas", price: "$1", stocked: true, name: "Manzana"},
        {category: "Frutas", price: "$1", stocked: true, name: "Fruta del dragón"},
        {category: "Frutas", price: "$2", stocked: false, name: "Maracuyá"},
        {category: "Verduras", price: "$2", stocked: true, name: "Espinaca"},
        {category: "Verduras", price: "$4", stocked: false, name: "Calabaza"},
        {category: "Verduras", price: "$1", stocked: true, name: "Guisantes"}
      ];

      const [filterText,setFilterText] = useState('');
      const [inStockOnly,setInStockOnly] = useState();     
    return (
        <div>
            <SearchBar filterText={filterText} setFilterText={setFilterText} setInStockOnly={setInStockOnly}/>
            <ProductTable products={PRODUCTS} filterText={filterText} inStockOnly={inStockOnly}/>
        </div>
    )
}

