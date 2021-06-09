import './App.css';

import React from 'react';

import InputText from './components/InputText.js'
import SelectField from './components/SelectField.js'
import RadioButton from './components/RadioButton.js'
import DateField from './components/DateField.js'
import FileUpload from './components/FileUpload';
import PasswordField from './components/PasswordField.js'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.updateRange = this.updateRange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      fields: {
        input: "",
        email: "",
        selected_value: "",
        selected_file: "",
        selected_date: "",
        selected_radio_value: "",
        password: "",
        cpassword: "",
        selected_range: ""
      },
      formErrors: {
        input: '',
        email: '',
        selected_value: '',
        selected_file: '',
        selected_date: '',
        selected_radio_value: '',
        password: '',
        cpassword: '',
        selected_range: ''
      }
    }
  }

  handleValidation() {
    let isFormValid = true
    let fields = this.state.fields
    let errors = {}

    if(!fields['selected_radio_value']) {
      isFormValid = false
      errors['selected_radio_value'] = "This field is required"
    }

    if(!fields['email'].match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      isFormValid = false
      errors['email'] = "Email is not valid"
    }

    if(fields['password'].length < 8) {
      isFormValid = false
      errors['password'] = "Password is too short"
    }

    if(fields['cpassword'] !== fields['password']) {
      isFormValid = false
      errors['cpassword'] = "Password does not match"
    }

    if(new Date().toISOString().split('T')[0] < fields['selected_date']) {
      isFormValid = false
      errors['selected_date'] = "Date cannot be greater than today's date"
    }

    this.setState({formErrors: errors})
    return isFormValid
  }
  handleSubmit(e) {
    e.preventDefault()
    if(!this.handleValidation()) {
      alert("Form has errors");
    }
    else {
      console.log(this.state)
      alert("Form submitted successfully");
      let reset_fields = {
        input: "",
        email: "",
        selected_value: "",
        selected_file: "",
        selected_date: "",
        selected_radio_value: "",
        password: "",
        cpassword: "",
        selected_range: ""
      }
      this.setState({fields: reset_fields})
    }
  }

  handleInput(e) {
    let fields = this.state.fields
    let isFile = e.target.type === "file"
    fields[e.target.name] = isFile ? e.target.files[0] : e.target.value
    this.setState({fields: fields});
  }

  updateRange(e, data) {
    let fields = this.state.fields
    fields['selected_range'] = data
    this.setState({fields: fields})
  }

  render() {
    return (
      <div style={{ margin: 30 }}>
        <h1>React Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Name : </label>
            <InputText input={this.state.fields.input} handleInput={this.handleInput} placeholder={"Enter name"} name={"input"} />
            <span className="error">{this.state.formErrors.input}</span>
          </div>

          <br />

          <div className="form-group">
            <label>Email : </label>
            <InputText input={this.state.fields.email} handleInput={this.handleInput} placeholder={"Enter email"} name={"email"} />
            <span className="error">{this.state.formErrors.email}</span>
          </div>

          <br />

          <div className="form-group">
            <label>Date of Birth : </label>
            <DateField selected_date={this.state.fields.selected_date} handleDate={this.handleInput} name={"selected_date"}/>
            <span className="error">{this.state.formErrors.selected_date}</span>
          </div>

          <br />

          <div className="form-group">
            <label>Select Gender : </label>
            <RadioButton value="male" label="Male" isSelected={this.state.fields.selected_radio_value === "male"} handleChange={this.handleInput} name={"selected_radio_value"} />
            <RadioButton value="female" label="Female" isSelected={this.state.fields.selected_radio_value === "female"} handleChange={this.handleInput} name={"selected_radio_value"} />
            <span className="error">{this.state.formErrors.selected_radio_value}</span>
          </div>

          <br />

          <div className="form-group">
            <label>Upload Profile Picture : </label>
            <FileUpload selected_file={this.state.fields.selected_file} handleFile={this.state.handleInput} name={"selected_file"} />
            <span className="error">{this.state.formErrors.selected_file}</span>
          </div>

          <br />

          <div className="form-group">
            <label>Select Level of Education : </label>
            <SelectField value={this.state.fields.selected_value} handleSelect={this.handleInput} name={"selected_value"} />
            <span className="error">{this.state.formErrors.selected_value}</span>
          </div>

          <br />

          <div className="form-group">
            <label>Password : </label>
            <PasswordField password={this.state.fields.password} handlePassword={this.handleInput} name={"password"} />
            <span className="error">{this.state.formErrors.password}</span>
          </div>

          <br />

          <div className="form-group">
            <label>Confirm Password : </label>
            <PasswordField password={this.state.fields.cpassword} handlePassword={this.handleInput} name={"cpassword"} />
            <span className="error">{this.state.formErrors.cpassword}</span>
          </div>

          <br />

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
