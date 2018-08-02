//SurveyField contains logic that displays fields in SurveyForm
//input provided by reduxForm
import React from 'react';

export default ({ input, label }) => {
    
    return(
        <div>
            <label>{ label }</label>
            <input {...input}/>
        </div>
    )
}