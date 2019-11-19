import React, { Component } from 'react';
import ProductItem from "../../components/productItem/ProductItem";
import axios from 'axios'
import company from "../../models/company";
import classes from './instrumentBox.module.scss';
import sortRequest from "../../models/sortRequest";
import { connect } from "react-redux";
import Menu from "../menu/Menu";
import CompanyTableView from "../../components/companyTableView/CompanyTableView";
import * as actions from './../../store/actions/actions'


interface IState {
    companies: company[];
    page: number;
    isLoading: boolean;
    sort?: sortRequest;
    isSorting: boolean;
}

interface IProps {
    addToFavorite: (company: company) => void;
    deleteFromFavorite: (company: company) => void;
    selectedCompanies: company[];
}

class InstrumentsBox extends Component<IProps, IState> {

    state = {
        companies: [],
        page: 0,
        isLoading: true,
        isSorting: false,
        sort: {} as sortRequest,
    };

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies = (sort?: sortRequest) => {
        this.setState({ isLoading: true });
        let page = this.state.page;
        let companies = this.state.companies;
        let sortParams = this.state.sort;

        if (sort) {
            companies = [];
            page = 0;
            sortParams = sort;
        }
        let url = `https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=${page + 1}`;
        if (sortParams.sortVariable && sortParams.sortPosition) {
            this.setState({
                sort: sortParams,
                isSorting: true,
            });
            url = `https://api.cmsmagazine.ru/v1/instrumentsList?sort=${sortParams.sortVariable}&sort_direction=${sortParams.sortPosition}&instrument_type_code=cms&page=${page + 1}`;
        }
        axios.get(url).then(response => {
            const responseCompanies = response.data.data;
            const currentPage = response.data.current_page;
            companies = companies.concat(responseCompanies);
            this.setState(state => {
                return {
                    companies: companies,
                    page: currentPage,
                    isLoading: false,
                    isSorting: false,

                }
            });
        }).catch(error => {
            console.log(error);
        });


    };

    onSelect = (index: number) => {
        const selectedCompany: company = this.state.companies[index];
        const currentSelectedCompanies = this.props.selectedCompanies;
        if (currentSelectedCompanies.filter(item => {
            return item.id === selectedCompany.id;
        }).length > 0) {
            this.props.deleteFromFavorite(selectedCompany);
        } else {
            this.props.addToFavorite(selectedCompany);
        }
    };

    render() {
        const products = this.state.companies.map((item: company, index) => {
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
                isSponsor={item.isSponsor} />
        });
        return (
            <table className={classes.table}>
                <thead>
                    <Menu isSorting={this.state.isSorting}
                        onChangeFilter={(sortRequest?: sortRequest) => this.getCompanies(sortRequest)} />
                </thead>
                <CompanyTableView products={products} isLoading={this.state.isLoading}
                    loadMore={() => this.getCompanies()} isNeedLoadMore={true} />
            </table>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addToFavorite: (company: company) => dispatch(actions.addToFavorite(company)),
        deleteFromFavorite: (company: company) => dispatch(actions.deleteFromFavorite(company)),
    }
};
const mapStateToProps = (state: any) => {
    return {
        selectedCompanies: state.favoriteReducer.companies,
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsBox);