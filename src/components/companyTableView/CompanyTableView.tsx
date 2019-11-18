import React from 'react';
import classes from './companyTableView.module.scss';
import Preloader from "../loading/Preloader";

interface IProps {
    products: React.ReactNode;
    isLoading: boolean;
    loadMore?: () => void;
    isNeedLoadMore: boolean
}

const CompanyTableView = (props: IProps) => {
    return (
        <tbody>
        {props.products}
        {props.isNeedLoadMore ?
        <tr>
            <td colSpan={30}>
                {props.isLoading ? <Preloader/> : <span onClick={props.loadMore}
                                                        className={classes.loadMore}>Показать еще</span>}
            </td>
        </tr> : null}
        </tbody>
    );
}

export default CompanyTableView;