const Input = (props) => {
    return (
        <div className='form-field'>
            <label>{props.label}</label>
            <input type={props.type}
                   name={props.name}
                   value={props.value}
                   onChange={props.handleOnChange}/>
        </div>
    )
}
export default Input;