import React from 'react';
import classes from './menuItem.module.scss'
import Preloader from "../loading/Preloader";
import icon from './../../assets/sorted.svg';

interface IProps {
    isActive: boolean;
    onClick: () => void;
    name: string;
    sortedOrder: string;
    sortedImage: string;
}

const MenuItem = (props: IProps) => {
    let cls = classes.menuItem;
    if (props.isActive) {
        cls = `${classes.menuItem} ${classes.active}`
    }
    let imgCls = classes.icon;
    if (props.isActive) {
        if (props.sortedOrder === 'asc') {
            imgCls = `${classes.icon} ${classes.active} ${classes.iconReverse}`;
        } else {
            imgCls = `${classes.icon} ${classes.active}`;
        }
    }
    let onClickAvaliable = (props.name === "Сравнить" || props.name === 'Название') ? null : props.onClick
    return (
        <div onClick={onClickAvaliable as () => void} className={cls}>
            <div className={classes.menuItem__content}>
                {props.name}
                <img src={icon} className={imgCls} alt=""/>
            </div>
        </div>
    );
}

export default MenuItem;