import React from 'react'
import DatePicker from 'react-datepicker';

const buttonPosition = {
    display: 'block',
    marginTop: '1.1rem',
    marginBottom: '1.1rem'
}
const buttonStyle = {
    backgroundColor: 'blue'
}
const InputDateField = (props) => (
    <div className="text-center">
        <DatePicker
            className="form-control"
            selected={props.date}
            onChange={props.changeDate}
        />
        <div style={buttonPosition}>
            <button
                onClick={props.handleClick}
                style={buttonStyle}
                className="btn btn-default"
            >
                Random Photo
            </button>
        </div>
    </div>
)
export default InputDateField;
