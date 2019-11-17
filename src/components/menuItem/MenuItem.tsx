import React from 'react';
import classes from './menuItem.module.scss'

interface IProps {
    isActive: boolean;
    onClick: ()=>void;
    name: string;
    sortedOrder: boolean;
    sortedImage: string;
}

const MenuItem = (props: IProps) => {
    let cls = classes.menuItem;
    if (props.isActive){
        cls = `${classes.menuItem} ${classes.active}`
    }
    let onClickAvaliable = props.name === "Сравнить" ? null : props.onClick
    return (
        <div onClick={onClickAvaliable as ()=>void} className={cls}>
            {props.name}
            <br/>
            {props.isActive ? (props.sortedOrder ? "up" : "down") : null}
        </div>
    );
}

export default MenuItem;