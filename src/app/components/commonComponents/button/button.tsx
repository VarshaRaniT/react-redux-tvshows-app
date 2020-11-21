import React from 'react';
import { Button } from '@material-ui/core';
export interface ButtonComponentProps {
    btnText: string,
    onHandelclick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ btnText, onHandelclick }) => {
    return (<div className="custom__btn__wrap"><Button className="custom__btn" variant="contained" color="secondary" onClick={onHandelclick}>
    {btnText}
</Button></div>);
}

export default ButtonComponent;