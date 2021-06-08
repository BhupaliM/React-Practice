function PasswordField(props) {
    return(
        <input type="password" name={props.name} placeholder="Enter password" value={props.password} onChange={props.handlePassword} className="form-control" required/>
    );
}

export default PasswordField