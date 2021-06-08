function EmailField(props) {
    return (
        <input type="email" placeholder="Enter email" value={props.email} onChange={props.handleEmail} className="form-control" />
    );
}

export default EmailField