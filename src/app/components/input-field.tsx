'use client';

import React from 'react';
import { Field } from 'formik';
export interface InputFieldProps {
    label?: string;
    id: string;
    as?: 'input' | 'select';
    children?: React.ReactNode;
    required?: boolean;
    placeholder?: string; 
    name: string;
  }
  

export default function InputField({label, id, ...rest}:InputFieldProps){
    return(

        <div className="flex flex-col">
            {label && (<label htmlFor={id} className="mb-2 text-base color-grey-900">{label}</label>)}
            <Field {...rest} id={id} name={rest.name} placeholder={rest.placeholder} className="p-3 h-11 text-sm rounded border border-gray-300 shadow">
        {rest.as === 'select' ? rest.children : null}
      </Field>
        </div>
    
    );
}