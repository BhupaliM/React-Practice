import React from 'react'
import { Slider } from '@material-ui/core'

class Range extends React.Component {
    render() {
        return (
            <div className="slider-class">
                <Slider value={this.props.value} onChange={this.props.updateRange} required/>
            </div>
        );
    } 
}

export default Range
