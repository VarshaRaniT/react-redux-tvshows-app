import React from 'react';
import { TextField } from '@material-ui/core';
export interface InputComponentProps {
    fieldType: string
    fieldlabel: string
    onSearchChild: (e:any) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({ fieldType, fieldlabel, onSearchChild }) => {
    return (<span className="input__wrap"><TextField type={fieldType} label={fieldlabel} onChange={onSearchChild} /></span>);
}

export default InputComponent;