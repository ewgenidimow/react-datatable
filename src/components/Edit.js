import cancelIcon from '../assets/img/cancel.png';
import Input from "./fields/Input";
import Checkbox from "./fields/Checkbox";
import Select from "./fields/Select";

function Edit({data, editData, handleEditFormChange, handleClose}) {
    return (
        <div className='form-container'>
            {data && data.forms.map((form, i) => (
                <div key={i}>

                    {form.fieldsets.map((fieldset, j) => (
                        <div key={j} className='fieldset-container'>

                            {fieldset.fields.map((field, k) => (
                                <div className='field-container' key={k}>
                                    {field.type === 'select' && <Select name={field.name}
                                                                        label={field.displayName}
                                                                        options={field['x-options']}
                                                                        value={field.name === "Status" ? editData.status.name : editData.type.name}
                                                                        handleOnChange={handleEditFormChange}/>}

                                    {field.type === 'checkbox' && <Checkbox type={field.type}
                                                                            name={field.name}
                                                                            label={field.displayName}
                                                                            checked={editData.isPrivate}
                                                                            handleOnChange={handleEditFormChange}/>}

                                    {field.type === 'text' && <Input type={field.type}
                                                                     name={field.name}
                                                                     label={field.displayName}
                                                                     value={editData.summary}
                                                                     handleOnChange={handleEditFormChange}/>}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            ))}
            <button onClick={handleClose}>
                <img src={cancelIcon}/>
            </button>
        </div>
    )
}

export default Edit;