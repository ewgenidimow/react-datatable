const Input = (props) => {
    return (
        <div className='form-field'>
            <label>{props.label}</label>
            <input data-testid='input'
                   type={props.type}
                   name={props.name}
                   value={props.value}
                   onChange={(e) => props.handleOnChange(e)}/>
        </div>
    )
}
export default Input;