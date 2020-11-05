import React from 'react';
import { Button } from '@material-ui/core';
export interface ButtonComponentProps {
    btnText: string,
    onSearchChildClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({ btnText, onSearchChildClick }) => {
    return (<span className="custom__btn__wrap"><Button className="custom__btn" variant="contained" color="secondary" onClick={onSearchChildClick}>
    {btnText}
</Button></span>);
}

export default ButtonComponent;