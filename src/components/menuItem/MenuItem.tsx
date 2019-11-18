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
    isSorting: boolean;
}

const MenuItem = (props: IProps) => {
    let cls = classes.menuItem;
    if (props.isActive) {
        cls = `${classes.menuItem} ${classes.active}`
    }
    let onClickAvaliable = (props.name === "Сравнить" || props.name === 'Название') ? null : props.onClick
    return (
        <div onClick={onClickAvaliable as () => void} className={cls}>
            <div className={classes.menuItem__content}>
                {props.name}
                {props.isActive ? (props.sortedOrder === "asc" ?
                    <img src={icon} className={`${classes.icon} ${classes.iconReverse}`} alt=""/> :
                    <img src={icon} className={classes.icon} alt=""/>) : null}
            </div>
            {props.isSorting ? <Preloader/> : null}
        </div>
    );
}

export default MenuItem;