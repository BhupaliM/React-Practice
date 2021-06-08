import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class DateField extends React.Component {
    render() {
        return (
            <DatePicker
                placeholderText="Choose DOB"
                selected={this.props.selected_date}
                onChange={this.props.handleDate}
                dateFormat="dd/MM/yyyy"
                maxDate = {new Date()}
                showYearDropdown
                scrollableYearDropdown
                className="form-group"
                required
            />
        );
    } 
}

export default DateField
