import React, {useState} from 'react';
import classes from './productItem.module.scss'
import sponsor from './../../assets/iconfinder_star_115793.svg'
import CompanyLogo from "../companyLogo/CompanyLogo";
import tick from './../../assets/tick.svg';


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
}

const ProductItem = (props: IProps) => {
    let cls = classes.tickBox;
    if (props.isSelected) {
        cls = `${classes.tickBox} ${classes.active}`
    }
    return (
        <tr className={classes.productItem}>
            <td colSpan={10}>
                <div className={classes.logoContainer}>
                    {props.isSponsor ? <img className={classes.sponsor} src={sponsor} alt=""/> : null}
                    {props.img ? <CompanyLogo img={props.img}/> : props.firstLettersOfName}
                </div>
            </td>
            <td colSpan={5}>
                <span>{props.worksCount} проект{props.worksCount % 10 === 1 ? null  : ([2,3,4].indexOf(props.worksCount % 10) !== -1) ? 'a' : 'ов'}</span>
            </td>
            <td colSpan={5}>
                <span>{props.partnersCount}</span>
            </td>
            <td colSpan={5}>
                <span>{props.rate}</span>
            </td>
            <td colSpan={5}>
                <div className={classes.tickBoxContainter}>
                    <div onClick={props.onSelect} className={cls}>
                        <img src={tick} alt=""/>
                    </div>
                    {props.isSponsor ? <span className={classes.sponsor__text}>Спонсор</span> : null}
                </div>
            </td>
        </tr>
    );
}

export default ProductItem;