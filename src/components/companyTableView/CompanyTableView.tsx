import React from 'react';
import classes from './companyTableView.module.scss';
import Preloader from "../loading/Preloader";

interface IProps {
    products: React.ReactNode;
}

const CompanyTableView = (props: IProps) => {
    return (
        <tbody>
        {props.products}
        </tbody>
    );
}

export default CompanyTableView;