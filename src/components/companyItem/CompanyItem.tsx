import React from 'react';
import classes from './companyItem.module.scss'
import sponsor from './../../assets/iconfinder_star_115793.svg'
import CompanyLogo from "../companyLogo/CompanyLogo";
import tick from './../../assets/tick.svg';
import {withRouter} from "react-router";

interface IProps {
    isSponsor: number;
    img: string;
    firstLettersOfName: string;
    worksCount: number;
    partnersCount: number;
    rate: number;
    title: string;
    code: string;
    url: string
    shortUrl: string;
    onSelect: () => void;
    isSelected: boolean;
    history: any;
    isRemoveBtn?: boolean;
}


const CompanyItem = (props: IProps) => {

    //формирование классов
    let cls = classes.tickBox;
    if (props.isSelected) {
        cls = `${classes.tickBox} ${classes.active}`
    }
    //добавление окончаний в слова рядом с цифрами
    const addWordToNumber = (count: number) => {
        const lastTwoNumbers = count % 100;
        const lastNumber = lastTwoNumbers % 10;

        if (lastTwoNumbers >= 11 && lastTwoNumbers <= 14) {
            return 'ов'
        } else if (lastNumber === 1) {
            return null;
        } else if (lastNumber >= 2 && lastNumber <= 4) {
            return 'а'
        } else {
            return 'ов'
        }
    };


    const onCompanyClick = () => {
        props.history.push(`/instrument/${props.code}`);

    };
    return (
        <tr className={classes.productItem}>
            <td colSpan={5} onClick={onCompanyClick} style={{cursor: "pointer"}}>
                <div className={classes.logoContainer}>
                    {props.isSponsor ? <img className={classes.sponsor} src={sponsor} alt=""/> : null}
                    {props.img ? <CompanyLogo img={props.img}/> : props.firstLettersOfName}
                </div>
            </td>
            <td colSpan={5}>
                {props.worksCount} проект{addWordToNumber(props.worksCount)}
            </td>
            <td colSpan={5}>
                {props.partnersCount ? props.partnersCount : 0} партнер{addWordToNumber(props.partnersCount)}
            </td>
            <td colSpan={5}>
                {props.rate}
            </td>
            <td colSpan={5}>
                {props.isRemoveBtn ? <div className={classes.removeBtn} onClick={props.onSelect}>
                        удалить
                    </div> :
                    <div className={classes.tickBoxContainter}>
                        <div onClick={props.onSelect} className={cls}>
                            <img src={tick} alt=""/>
                        </div>
                        {props.isSponsor ? <span className={classes.sponsor__text}>Спонсор</span> : null}
                    </div>
                }
            </td>
        </tr>
    );
}

export default withRouter<any, any>(CompanyItem);