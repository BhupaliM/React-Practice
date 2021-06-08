import './App.css';
import InputText from './components/InputText.js'
import EmailField from './components/EmailField.js'
import SelectField from './components/SelectField.js'
import RadioButton from './components/RadioButton.js'
import DateField from './components/DateField.js'
import React from 'react';
import FileUpload from './components/FileUpload';
import Range from './components/Range.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.radioButtonChangeHandler = this.radioButtonChangeHandler.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.updateRange = this.updateRange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: "",
      email: "",
      value: "",
      selected_date: null,
      selected_value: null,
      selected_range: ""
    }
    this.baseState = this.state 
  }

  handleSubmit(e) {
    e.preventDefault()
    alert("Form submitted successfully");
    this.setState(this.baseState)
  }

  handleInput(e) {
    this.setState({name: e.target.value})
  }

  handleEmail(e) {
    this.setState({email: e.target.value})
  }

  handleSelect(e) {
    this.setState({value: e.target.value})
  }

  radioButtonChangeHandler(e) {
    this.setState({selected_value: e.target.value})
  }

  handleDate(date) {
    this.setState({selected_date: date})
  }

  updateRange(e, data) {
    this.setState({selected_range: data})
  }

  render() {
    return (
      <div>
        <h1>React Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label for="name">Name: </label>
            <InputText name={this.state.name} handleInput={this.handleInput} />
          </div>

          <br />

          <div className="form-group">
            <label for="email">Email: </label>
            <EmailField mail={this.state.email} handleEmail={this.handleEmail} />
          </div>

          <br />

          <div className="form-group">
            <label for="dob">Date of Birth: </label>
            <DateField selected_date={this.state.selected_date} handleDate={this.handleDate} />
          </div>

          <br />

          <div className="form-group">
            <label for="gender">Select Gender: </label>
            <RadioButton value="male" label="Male" isSelected={this.state.selected_value === "male"} handleChange={this.radioButtonChangeHandler} />
            <RadioButton value="female" label="Female" isSelected={this.state.selected_value === "female"} handleChange={this.radioButtonChangeHandler} />
          </div>

          <br />

          <div className="form-group">
            <label for="profilepic">Upload Profile Picture: </label>
            <FileUpload />
          </div>
          
          <br />

          <div className="form-group">
            <label for="education">Select Level of Education: </label>
            <SelectField value={this.state.value} handleSelect={this.handleSelect} />
          </div>

          <br />

          <Range selected_range={this.props.selected_range} updateRange={this.updateRange} />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
