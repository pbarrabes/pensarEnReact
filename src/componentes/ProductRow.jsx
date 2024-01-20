export default function ProductRow({product}) {
    //Modifico el ejemplo para probar renderizado condicional

    return product.stocked ? ProductoConStock({product}) : ProductoSinStock({product})
}

function ProductoConStock({product}){
    return (
        <tr>
            <td>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}

function ProductoSinStock({product}){
    return (
        <tr>
            <td style={{color: "red"}}>{product.name}</td>
            <td>{product.price}</td>
        </tr>
    )
}