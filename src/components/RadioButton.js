function RadioButton(props) {
    return (
        <div> 
            <input type="radio" name={props.name} value={props.value} onChange={props.handleChange} checked={props.isSelected} />
            <label>{props.label}</label>
        </div>
    ); 
}

export default RadioButton
