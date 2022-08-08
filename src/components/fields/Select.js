const Select = (props) => {
    return (
        <div className='form-field'>
            <label>{props.label}</label>

            <select data-testid='select'
                    name={props.name}
                    value={props.value}
                    onChange={(e) => props.handleOnChange(e)}>

                {props.options.map((option, index) => (
                    <option key={index} value={option.name}>{option.text}</option>
                ))}
            </select>
        </div>
    )
}
export default Select;