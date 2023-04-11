import React,{ ReactElement, FC, ChangeEvent } from 'react';

import { Input } from '@/models/inputType'

interface inputType{
  name:string,
  type: Input,
  value:string,
  label?:string,
  children?:ReactElement,
  onChange: (value: ChangeEvent<HTMLInputElement>) => void,
  onBlur?: (value:ChangeEvent<HTMLInputElement>) => void,
  required:boolean
  error?: boolean
  errorMessage:string
}


const input: FC<inputType> = ({...props}): ReactElement => (
  <input
    className="flex items-center h-12 px-4 w-64 mt-2 mb-7 rounded border shadow-lg border-blue-900 focus:outline-none focus:ring-2"
    type={props.type}
    name={props.name}
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
    required={props.required}
    />
);


export default input