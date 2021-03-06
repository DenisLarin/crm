import React, {Component} from 'react';
import ProductItem from "../../components/companyItem/CompanyItem";
import axios from 'axios';
import company from "../../models/company";
import classes from './instrumentBox.module.scss';
import sortRequest from "../../models/sortRequest";
import {connect} from "react-redux";
import Menu from "../menu/Menu";
import CompanyTableView from "../../components/companyTableView/CompanyTableView";
import * as actions from './../../store/actions/actions'
import Preloader from "../../components/loading/Preloader";


interface IState {
    companies: company[];
    page: number;
    isLoading: boolean;
    sort?: sortRequest;
}

interface IProps {
    addToFavorite: (company: company) => void;
    deleteFromFavorite: (company: company) => void;
    selectedCompanies: company[];
    changeRequestStatus: (isMakingRequest: boolean)=>void;
}

class InstrumentsBox extends Component<IProps, IState> {
    state = {
        companies: [],
        page: 0,
        isLoading: true,
        sort: {} as sortRequest,
        isMakingRequest: false
    };

    componentDidMount() {
        this.getCompanies();
    }

    //функция запроса получения данных
    getCompanies = (sort?: sortRequest) => {
        this.setState({isLoading: true});
        let page = this.state.page;
        let companies = this.state.companies;
        let sortParams = this.state.sort;
        if (sort) {
            companies = [];
            page = 0;
            this.setState({
                companies: []
            });
            sortParams = sort;
        }
        let url = `https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=${page + 1}`;
        if (sortParams.sortVariable && sortParams.sortPosition) {
            this.setState({
                sort: sortParams,
            });
            url = `https://api.cmsmagazine.ru/v1/instrumentsList?sort=${sortParams.sortVariable}&sort_direction=${sortParams.sortPosition}&instrument_type_code=cms&page=${page + 1}`;
        }
        this.props.changeRequestStatus(true);
        axios.get(url).then(response => {
            const responseCompanies = response.data.data;
            const currentPage = response.data.current_page;
            companies = companies.concat(responseCompanies);
            this.props.changeRequestStatus(false);
            this.setState(state => {
                return {
                    companies: companies,
                    page: currentPage,
                    isLoading: false,
                    isSorting: false,
                }
            });
        }).catch(error => {
            this.props.changeRequestStatus(false);
            console.log(error);
        });


    };

    //функция добавления компании в избранное
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


    renderProductItems = () => {
        let products = null;
        if (this.state.companies.length > 0) {
            products = this.state.companies.map((item: company, index) => {
                //проверка компанию на наличие в избраном
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
                                    isSponsor={item.isSponsor}/>
            });
        }
        return products;
    };

    render() {
        let products = this.renderProductItems();
        return (
            <div>
                <table className={classes.table}>
                    <thead>
                    <Menu possibleSort={true}
                          onChangeFilter={(sortRequest?: sortRequest) => this.getCompanies(sortRequest)}/>
                    </thead>
                    <CompanyTableView products={products}/>
                </table>
                {this.state.isLoading ? <Preloader/> : <span onClick={() => this.getCompanies()}
                                                             className={classes.loadMore}>Показать еще</span>}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addToFavorite: (company: company) => dispatch(actions.addToFavorite(company)),
        deleteFromFavorite: (company: company) => dispatch(actions.deleteFromFavorite(company)),
        changeRequestStatus: (isMakingRequest: boolean)=>dispatch(actions.changeRequestStatus(isMakingRequest))
    }
};
const mapStateToProps = (state: any) => {
    return {
        selectedCompanies: state.favoriteReducer.companies,
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(InstrumentsBox);