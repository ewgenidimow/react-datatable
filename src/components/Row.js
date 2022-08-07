import checkIcon from '../assets/img/check.png';
import cancelIcon from '../assets/img/cancel.png';
import moment from "moment";

const Row = ({rowData, handleEditRow, activeRow, isEdit}) => {

    const convertDate = (date) => {
        return moment(date).format('DD.MM.YYYY HH:MM:SS');
    }

    return (
        <tr onClick={handleEditRow} className={activeRow === rowData.id ? 'active' : ''}>
            <td>{rowData.number}</td>
            <td>{rowData.summary}</td>
            <td style={{'textAlign': 'center'}}>{<img src={rowData.isPrivate ? checkIcon : cancelIcon} alt=""/>}</td>
            <td>{rowData.status.name}</td>
            {!isEdit && <td>{rowData.service !== null ? rowData.service.name : ''}</td>}
            {!isEdit && <td>{rowData.author.name}</td>}
            {!isEdit && <td>{convertDate(rowData.createdOn)}</td>}
            {!isEdit && <td>{convertDate(rowData.updatedOn)}</td>}
        </tr>
    )
}

export default Row;