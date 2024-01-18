import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

 export default function FilterableProductTable({products}) {
    console.log(products);
    return (
        <div>
            <SearchBar/>
            <ProductTable products={products}/>
        </div>
    )
}

