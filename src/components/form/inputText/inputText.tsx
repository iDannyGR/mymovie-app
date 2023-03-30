import React from 'react';
import {ReactElement} from 'react';



const inputText = (...props): ReactElement => (
  <input
    className="flex items-center h-12 px-4 w-64 mt-2 mb-7 rounded border shadow-lg border-blue-900 focus:outline-none focus:ring-2"
    type={}
    name={}
    value={}
    onChange={props.onChange}
    onBlur={props.handleBlur}
    required={props.required}
    />
);


export default inputText