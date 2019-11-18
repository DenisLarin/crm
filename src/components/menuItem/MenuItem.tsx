import React from 'react';
import classes from './menuItem.module.scss'
import Preloader from "../loading/Preloader";

interface IProps {
    isActive: boolean;
    onClick: ()=>void;
    name: string;
    sortedOrder: string;
    sortedImage: string;
    isSorting: boolean;
}

const MenuItem = (props: IProps) => {
    let cls = classes.menuItem;
    if (props.isActive){
        cls = `${classes.menuItem} ${classes.active}`
    }
    let onClickAvaliable = (props.name === "Сравнить" || props.name === 'Название') ? null : props.onClick
    return (
        <div onClick={onClickAvaliable as ()=>void} className={cls}>
            {props.name}
            <br/>
            {props.isActive ? (props.sortedOrder === "asc" ? "up" : "down") : null}
            <br/>
            {props.isSorting ? <Preloader/> : null}
        </div>
    );
}

export default MenuItem;