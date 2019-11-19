import React from 'react';

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