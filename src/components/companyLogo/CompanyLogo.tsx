import React, { CSSProperties } from 'react';
import classes from './companyLogo.module.scss';

interface IProps {
    img: string
}

const CompanyLogo = (props: IProps) => {
    const bg: CSSProperties = { backgroundImage: `url(${props.img})` };
    return (
        <div className={classes.logo} style={bg}></div>
    );
}

export default CompanyLogo;