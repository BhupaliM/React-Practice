import React from 'react';
import { connect } from 'react-redux';

import '../style.css';
import store from '../../../store.js';
import { addRecord, editRecord } from '../../../actions/TableActions.js';

import InputText from '../../../components/InputText.js'
import SelectField from '../../../components/SelectField.js'
import RadioButton from '../../../components/RadioButton.js'
import DateField from '../../../components/DateField.js'
import FileUpload from '../../../components/FileUpload';
import PasswordField from '../../../components/PasswordField.js'
import Table from './Table.js';

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      fields: {
        input: "",
        email: "",
        selectedValue: "10th",
        selectedFile: "",
        selectedDate: "",
        selectedRadioValue: "",
        password: "",
        cpassword: "",
        selectedRange: ""
      },
      formErrors: {
        input: '',
        email: '',
        selectedValue: '',
        selectedFile: '',
        selectedDate: '',
        selectedRadioValue: '',
        password: '',
        cpassword: '',
        selectedRange: ''
      }
    }
  }

  handleValidation() {
    let isFormValid = true
    let fields = this.state.fields
    let errors = {}

    if (!fields['selectedRadioValue']) {
      isFormValid = false
      errors['selectedRadioValue'] = "This field is required"
    }

    if (!fields['email'].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isFormValid = false
      errors['email'] = "Email is not valid"
    }

    if (fields['password'].length < 8) {
      isFormValid = false
      errors['password'] = "Password is too short"
    }

    if (fields['cpassword'] !== fields['password']) {
      isFormValid = false
      errors['cpassword'] = "Password does not match"
    }

    if (new Date().toISOString().split('T')[0] < fields['selectedDate']) {
      isFormValid = false
      errors['selectedDate'] = "Date cannot be greater than today's date"
    }

    this.setState({ formErrors: errors })
    return isFormValid
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.handleValidation()) {
      alert("Form has errors");
    }
    else {
      alert("Form submitted successfully");
      this.props.addRecord(this.state.fields);
      let resetFields = {
        input: "",
        email: "",
        selectedValue: "10th",
        selectedFile: "",
        selectedDate: "",
        selectedRadioValue: "",
        password: "",
        cpassword: "",
        selectedRange: ""
      }
      this.setState({ fields: resetFields })
    }
  }

  handleInput = (e) => {
    let fields = this.state.fields
    let isFile = e.target.type === "file"
    let inputFile = ''
    if (isFile && e.target.files[0]) {
      inputFile = URL.createObjectURL(e.target.files[0])
    }
    fields[e.target.name] = isFile ? inputFile : e.target.value
    this.setState({ fields: fields });
  }

  updateRange = (e, data) => {
    let fields = this.state.fields
    fields['selectedRange'] = data
    this.setState({ fields: fields })
  }

  handleEdit = (id) => {
    console.log(id)
    this.props.editRecord(id)
    const currentState = store.getState()
    this.setState({
      fields: currentState.userData.currentFields
    })
  }

  render() {
    return (
      <div className="form">
        <div className="row">
          <div className="col-lg-5">
            <label className="label-class">React Form</label>
            <form onSubmit={this.handleSubmit}>
              <div>
                <label>Name : </label>
                <InputText input={this.state.fields.input} handleInput={this.handleInput} placeholder={"Enter name"} name={"input"} />
                <span className="error">{this.state.formErrors.input}</span>
              </div>

              <div>
                <label>Email : </label>
                <InputText input={this.state.fields.email} handleInput={this.handleInput} placeholder={"Enter email"} name={"email"} />
                <span className="error">{this.state.formErrors.email}</span>
              </div>

              <div>
                <label>Date of Birth : </label>
                <DateField selectedDate={this.state.fields.selectedDate} handleDate={this.handleInput} name={"selectedDate"} />
                <span className="error">{this.state.formErrors.selectedDate}</span>
              </div>

              <div>
                <label>Select Gender : </label>
                <RadioButton value="male" label="Male" isSelected={this.state.fields.selectedRadioValue === "male"} handleChange={this.handleInput} name={"selectedRadioValue"} />
                <RadioButton value="female" label="Female" isSelected={this.state.fields.selectedRadioValue === "female"} handleChange={this.handleInput} name={"selectedRadioValue"} />
                <span className="error">{this.state.formErrors.selectedRadioValue}</span>
              </div>

              <div>
                <label>Upload Profile Picture : </label>
                <FileUpload selectedFile={this.state.fields.selectedFile} handleFile={this.handleInput} name={"selectedFile"} />
                <span className="error">{this.state.formErrors.selectedFile}</span>
              </div>

              <div>
                <label>Select Level of Education : </label>
                <SelectField value={this.state.fields.selectedValue} handleSelect={this.handleInput} name={"selectedValue"} />
                <span className="error">{this.state.formErrors.selectedValue}</span>
              </div>

              <div>
                <label>Password : </label>
                <PasswordField password={this.state.fields.password} handlePassword={this.handleInput} name={"password"} />
                <span className="error">{this.state.formErrors.password}</span>
              </div>

              <div>
                <label>Confirm Password : </label>
                <PasswordField password={this.state.fields.cpassword} handlePassword={this.handleInput} name={"cpassword"} />
                <span className="error">{this.state.formErrors.cpassword}</span>
              </div>

              <input type="submit" value="Submit" className="btn btn-outline-success" />
            </form>
          </div>
          <div className="col-lg-7">
            <label className="label-class">User Data</label>
            <Table handleEdit={this.handleEdit} />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { addRecord, editRecord }
)(Form);
