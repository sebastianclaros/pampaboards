

import React, { ChangeEvent } from 'react';

type fnHook  = (value: string)=> void;

type InputProps = {
    name: string;
    label: string;
    placeholder?: string;
    setValue: fnHook;
};


const onChange = (fn: fnHook, event: ChangeEvent<HTMLInputElement>) => {
    if ( fn !== undefined ){
        fn(event.target.value);
    }
}

const Input = (props: InputProps) => (
    <div className="sm:col-span-4">
        <label htmlFor={props.name} className="block text-sm font-medium leading-6 text-gray-900">
        {props.label}
        </label>
        <div className="mt-2">
        <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
            <input
            type="text"
            onChange={(e)=>onChange(props.setValue, e)}
            name={props.name}
            autoComplete={props.label}
            className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
            placeholder={props.placeholder}
            />
        </div>
        </div>
    </div>
);

export { Input };
