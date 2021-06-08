import React from 'react'
import { Slider } from '@material-ui/core'

class Range extends React.Component {
    render() {
        return (
            <div style={{width: 300, margin:30}}>
                <Slider value={this.props.value} onChange={this.props.updateRange} required/>
            </div>
        );
    } 
}

export default Range