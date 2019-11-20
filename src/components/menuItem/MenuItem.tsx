import React, {useEffect, useState} from 'react';
import classes from './menuItem.module.scss'
import icon from './../../assets/sorted.svg';
import sortRequest from "../../models/sortRequest";
import {useSelector} from "react-redux";

interface IProps {
    onChangeFilter: (sortRequest?: sortRequest) => void;
    onClick: () => void;
    name: string;
    sortVariable?: string;
    isActive: boolean;
    possibleSort: boolean;

}

const MenuItem = (props: IProps) => {
    //выбран ли заголовок
    const [isActive, setActive] = useState(props.isActive);
    //порядок сортировки
    const [sortedOrder, setSortedOrder] = useState("");
    //redux хук, для блокировки множественных нажатий на заголовок, во время выполнения запроса
    const isMakingRequest = useSelector((state: any) => state.requestReducer.isMakingRequest);

    //формирование классов
    let cls = classes.menuItem;
    let imgCls = classes.icon;
    if (isActive && props.possibleSort) {
        cls = `${classes.menuItem} ${classes.active}`
        if (sortedOrder === 'asc') {
            imgCls = `${classes.icon} ${classes.active} ${classes.iconReverse}`;
        } else {
            imgCls = `${classes.icon} ${classes.active}`;
        }
    }


    //переключение активного заголовка при нажатии на новый заголовок
    useEffect(() => {
        setActive(props.isActive);
    }, [props.isActive]);


    const onClick = () => {
        if (isMakingRequest){
            return null;
        }

        props.onClick();
        let sortProsition = "";
        let tempIsActive = false;
        if (sortedOrder === "") {
            setSortedOrder("asc");
            tempIsActive = true;
            sortProsition = "asc";
            setActive(true);
        } else if (sortedOrder === "asc") {
            tempIsActive = true;
            sortProsition = "desc";
            setSortedOrder("desc");
        } else {
            tempIsActive = false;
            sortProsition = "";
            setSortedOrder("");
            setActive(false);
            props.onChangeFilter({sortVariable: "clean", sortPosition: ""})
        }

        if (tempIsActive && props.sortVariable) {
            const sortRequest: sortRequest = {
                sortPosition: sortProsition,
                sortVariable: props.sortVariable
            };
            props.onChangeFilter(sortRequest);
        }
    };
    //у каких элементов будет доступна стрелка сортировки
    const arrowAvaliable = !(props.name === "Сравнить" || props.name === 'Название');
    //у каких компонентов будет доступна функция клика
    const onClickAvaliable = (props.name === "Сравнить" || props.name === 'Название') || !props.possibleSort ? null : onClick;
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