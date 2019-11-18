import React from 'react';
import classes from './numberInCircle.module.scss';

interface IProps {
    number: number
}

const NumberInCircle = (props:IProps)=> {
    return (
        <span className={classes.numberInCircle}>
            {props.number}
        </span>
    );
}

export default NumberInCircle;