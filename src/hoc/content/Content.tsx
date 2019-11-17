import React from 'react';
import classes from './content.module.scss'
interface IProps {
    children: React.ReactNode
}
const Content = (props:IProps) => {
    return (
        <div className={classes.content}>
            {props.children}
        </div>
    );
}

export default Content;