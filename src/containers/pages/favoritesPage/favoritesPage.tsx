import React, {Component} from 'react';
import CompanyTableView from "../../../components/companyTableView/CompanyTableView";
import {connect} from "react-redux";
import * as actions from "../../../store/actions/actions";
import company from "../../../models/company";
import ProductItem from "../../../components/productItem/ProductItem";
import classes from './../../instrumentsBox/instrumentBox.module.scss';
import Menu from "../../menu/Menu";


interface IProps {
    selectedCompanies: company[];
    deleteFromFavorite: (company: company)=>void;
}
class FavoritesPage extends Component<IProps, {}> {
    onSelect = (index: number) => {
        const selectedCompany: company = this.props.selectedCompanies[index];
        this.props.deleteFromFavorite(selectedCompany);
    };

    componentDidMount() {
        document.title = "Выбранные компании"
    }


    render() {
        const products = this.props.selectedCompanies.map((item: company, index) => {
            let isSelected = false;
            const currentCompanyId = item.id;
            if (this.props.selectedCompanies.filter((item: company) => {
                return item.id === currentCompanyId;
            }).length > 0) {
                isSelected = true;
            }
            return <ProductItem key={index} title={item.title} code={item.code} img={item.image} rate={item.rate}
                                worksCount={item.worksCount} partnersCount={item.partnersCount}
                                shortUrl={item.shortUrl} firstLettersOfName={item.firstLettersOfName}
                                url={item.url}
                                isSelected={isSelected}
                                onSelect={() => this.onSelect(index)}
                                isSponsor={item.isSponsor}
                                isRemoveBtn={true}/>
        });
        return (
            <div>
                <h1>Выбранные компании:</h1>
                <table className={classes.table}>
                    <thead>
                        <Menu onChangeFilter={()=>null} possibleSort={false}/>
                    </thead>
                    <CompanyTableView products={products}/>
                </table>
            </div>
        );
    }
}
const mapDispatchToProps = (dispatch: any) => {
    return {
        deleteFromFavorite: (company: company) => dispatch(actions.deleteFromFavorite(company)),
    }
};
const mapStateToProps = (state: any) => {
    return {
        selectedCompanies: state.favoriteReducer.companies,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesPage);