import React, {useEffect, useState} from 'react';
import classes from './menuItem.module.scss'
import icon from './../../assets/sorted.svg';
import sortRequest from "../../models/sortRequest";

interface IProps {
    onChangeFilter: (sortRequest?: sortRequest) => void;
    onClick: () => void;
    name: string;
    sortVariable?: string;
    isActive: boolean;

}

const MenuItem = (props: IProps) => {
    const [isActive, setActive] = useState(props.isActive);
    const [sortedOrder, setSortedOrder] = useState("");
    console.log("menuItem");
    let cls = classes.menuItem;
    if (isActive) {
        cls = `${classes.menuItem} ${classes.active}`
    }
    let imgCls = classes.icon;
    if (isActive) {
        if (sortedOrder === 'asc') {
            imgCls = `${classes.icon} ${classes.active} ${classes.iconReverse}`;
        } else {
            imgCls = `${classes.icon} ${classes.active}`;
        }
    }

    useEffect(() => {
        setActive(props.isActive);
    }, [props.isActive]);

    const onClick = () => {
        props.onClick();
        let sortProsition = "";
        let tempIsActive = false;
        if (sortedOrder === "") {
            setSortedOrder("asc");
            tempIsActive = true;
            sortProsition = "asc";
            setActive(true);
            console.log(1);
        } else if (sortedOrder === "asc") {
            tempIsActive = true;
            sortProsition = "desc";
            setSortedOrder("desc");
            console.log(2);
        } else {
            tempIsActive = false;
            sortProsition = "";
            setSortedOrder("");
            setActive(false);
            props.onChangeFilter({sortVariable: "", sortPosition: ""})
            console.log(3);
        }

        if (tempIsActive && props.sortVariable) {
            const sortRequest: sortRequest = {
                sortPosition: sortProsition,
                sortVariable: props.sortVariable
            }
            props.onChangeFilter(sortRequest);
        }
    };
    const arrowAvaliable = !(props.name === "Сравнить" || props.name === 'Название');
    const onClickAvaliable = (props.name === "Сравнить" || props.name === 'Название') ? null : onClick;
    return (
        <div onClick={onClickAvaliable as () => void} className={cls}>
            <div className={classes.menuItem__content}>
                <span>{props.name}</span>
                {arrowAvaliable ? <img src={icon} className={imgCls} alt=""/> : null}
            </div>
        </div>
    );
}

export default MenuItem;