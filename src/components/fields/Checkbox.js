const Checkbox = (props) => {
    return (
        <div className='form-field'>
            <label>
                <input data-testid='checkbox'
                       type={props.type}
                       name={props.name}
                       checked={props.checked}
                       onChange={(e) => props.handleOnChange(e)}/> {props.label}
            </label>
        </div>
    )
}
export default Checkbox;