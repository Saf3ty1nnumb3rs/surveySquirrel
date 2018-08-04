//SurveyField contains logic that displays fields in SurveyForm
//input provided by reduxForm
import React from 'react';

export default ({ input, label, meta: {error, touched} }) => {
    //touched will return a boolean and error will return a string - if touched is true, it will return an error string
    return(
        <div>
            <label>{ label }</label>
            <input {...input} style={{ marginBottom: '5px' }} />
            <div className="red-text" style={{ marginBottom: '20px' }}>
                {touched && error}
            </div>
            
        </div>
    )
}