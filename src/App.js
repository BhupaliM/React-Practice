import './App.css';
import InputText from './components/InputText.js'
import SelectGender from './components/SelectGender.js'
import RadioButton from './components/RadioButton.js'
import DateField from './components/DateField.js'
import React from 'react';
import FileUpload from './components/FileUpload';
import Range from './components/Range.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.handleInput = this.handleInput.bind(this)
    this.handleSelect = this.handleSelect.bind(this)
    this.radioButtonChangeHandler = this.radioButtonChangeHandler.bind(this)
    this.handleDate = this.handleDate.bind(this)
    this.updateRange = this.updateRange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state = {
      name: "",
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
      <form onSubmit={this.handleSubmit}>
        <br />
        <InputText name={this.state.name} handleInput={this.handleInput} />
        <br />
        <SelectGender value={this.state.value} handleSelect={this.handleSelect} />
        <br />
        <label>
          Do you have further study plans: 
          <RadioButton value="yes" label="Yes" isSelected={this.state.selected_value === "yes"} handleChange={this.radioButtonChangeHandler} />
          <RadioButton value="no" label="No" isSelected={this.state.selected_value === "no"} handleChange={this.radioButtonChangeHandler} />
        </label>
        <br />
        <DateField selected_date={this.state.selected_date} handleDate={this.handleDate} />
        <br />
        <FileUpload />
        <br />
        <Range selected_range={this.props.selected_range} updateRange={this.updateRange} />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;
