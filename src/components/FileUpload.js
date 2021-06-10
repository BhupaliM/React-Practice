function FileUpload(props) {
    return ( 
        <input type="file" name={props.name} onChange={props.handleFile} className="form-control" required/>
    );
}

export default FileUpload
