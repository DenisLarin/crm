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
    onSelect: ()=>void;
}

const ProductItem = (props: IProps) => {
    const [isSelected, setSelected] = useState(false);
    let cls = classes.tickBox;
    if (isSelected){
        cls = `${classes.tickBox} ${classes.active}`
    }
    const onselectHandler = () =>{
        isSelected ? setSelected(false) : setSelected(true);
        props.onSelect();
    };
    return (
        <tr className={classes.productItem}>
            <td colSpan={10}>
                <div className={classes.logoContainer}>
                    {props.isSponsor ? <img className={classes.sponsor} src={sponsor} alt=""/> : null}
                    {props.img ? <CompanyLogo img={props.img}/> : props.firstLettersOfName}
                </div>
            </td>
            <td colSpan={5}>
                <span>{props.worksCount}</span>
            </td>
            <td colSpan={5}>
                <span>{props.partnersCount}</span>
            </td>
            <td colSpan={5}>
                <span>{props.rate}</span>
            </td>
            <td colSpan={5}>
                <div onClick={onselectHandler} className={cls}>
                    <img src={tick} alt=""/>
                </div>
            </td>

        </tr>
    );
}

export default ProductItem;