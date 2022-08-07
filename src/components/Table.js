import Row from "./Row";

const Table = ({data, handleEdit, clickedRow, isEdit}) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Type</th>
                    <th>Summary</th>
                    <th style={{'textAlign': 'center'}}>Private</th>
                    <th>Status</th>
                    {!isEdit && <th>Service</th>}
                    {!isEdit && <th>Author</th>}
                    {!isEdit && <th>Created</th>}
                    {!isEdit && <th>Updated</th>}
                </tr>
            </thead>
            <tbody>
                 {data && data.items.map((item, index) => (
                     <Row key={index}
                          activeRow={clickedRow}
                          isEdit={isEdit}
                          rowData={item.entity.data}
                          handleEditRow={() => handleEdit(item.entity.data)}
                     />
                 ))}
            </tbody>
        </table>
    )
}
export default Table;