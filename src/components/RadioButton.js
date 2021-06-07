function RadioButton(props) {
    return (
        <div>
            <label> 
                <input type="radio" value={props.value} onChange={props.handleChange} checked={props.isSelected} />
                <label>{props.label}</label>
            </label>
        </div>
    ); 
}

export default RadioButton