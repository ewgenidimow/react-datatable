import {useEffect, useState} from "react";
import Table from "./components/Table";
import Edit from './components/Edit';

function App() {
    const [tableData, setTableData] = useState();
    const [formStructure, setFormStructure] = useState();

    const [isEdit, setIsEdit] = useState(false);
    const [editData, setEditData] = useState();
    const [editDataId, setEditDataId] = useState(null);

    // fetch data
    const getTableData = () => {
        fetch('/data/items.json')
            .then((res) => res.json())
            .then((data) => setTableData(data));
    }

    const getFormStructure = () => {
        fetch('/data/form.json')
            .then((res) => res.json())
            .then((data) => setFormStructure(data));
    }

    // set data
    useEffect(() => {
        getTableData()
        getFormStructure()
    }, [])

    const handleOpenEditForm = (item) => {
        setEditData(item)
        setEditDataId(item.id);
        setIsEdit(true)
    }

    const handleCloseEditForm = () => {
        setEditDataId(null);
        setIsEdit(false);
    }

    const handleEditFormChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        const newEditData = {...editData};
        const newTableData = {...tableData};

        switch (name) {
            case 'IsPrivate':
                newEditData['isPrivate'] = value;
                break;
            case 'Summary':
                newEditData['summary'] = value;
                break;
            case 'Status':
                newEditData['status'] = {
                    id: target.selectedIndex,
                    name: value
                }
                break;
            case 'KnownErrorTypeId':
                const newNum = newEditData.number.slice(2);
                newEditData.type.name = value;
                if (value === 'Advice') {
                    newEditData['number'] = 'AD' + newNum;
                    newEditData.type.prefix = 'AD';
                    newEditData.type.name = value;
                } else if (value === 'FAQ') {
                    newEditData['number'] = 'FA' + newNum;
                    newEditData.type.prefix = 'FA';
                    newEditData.type.name = value;
                } else {
                    newEditData['number'] = 'KE' + newNum;
                    newEditData.type.prefix = 'KE';
                    newEditData.type.name = value;
                }
                break;

            default:
                newEditData[target.name] = value;
        }

        setEditData(newEditData);

        const index = tableData.collection.items.findIndex((item) => (item.entity.data.id === editDataId));

        newTableData.collection.items[index].entity.data = newEditData;

        setTableData(newTableData);
    }

    return (
        <div className={`App ${isEdit ? 'split-view' : ''}`}>

            {tableData && <Table data={tableData.collection}
                                 clickedRow={editDataId}
                                 isEdit={isEdit}
                                 handleEdit={(item) => handleOpenEditForm(item)}/>}

            {isEdit && <Edit data={formStructure}
                             editData={editData}
                             handleClose={handleCloseEditForm}
                             handleEditFormChange={handleEditFormChange}/>}
        </div>
    );
}

export default App;
