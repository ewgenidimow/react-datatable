const Checkbox = (props) => {
    return (
        <div className='form-field'>
            <label>
                <input type={props.type}
                       name={props.name}
                       checked={props.checked}
                       onChange={props.handleOnChange}/> {props.label}
            </label>
        </div>
    )
}
export default Checkbox;