export default function ProductCategoryRow({categoria}) {
    return (
        <tr>
            <th colSpan="2">
                {categoria}
            </th>
        </tr>
    )
}