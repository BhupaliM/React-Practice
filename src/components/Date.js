import React from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

class Date extends React.Component {
    render() {
        return (
            <div>
                <div className="form-group">
                    <label>
                        Date of Birth : 
                        <DatePicker 
                            selected={this.props.selected_date}
                            onChange={this.props.handleDate} 
                            dateFormat="dd/MM/yyyy"
                            maxDate = {new Date()}
                            showYearDropdown
                            scrollableYearDropdown
                            required
                        />
                    </label>
                </div>
            </div>
        );
    } 
}

export default Date