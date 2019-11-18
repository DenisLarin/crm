import React, {Component} from 'react';
import ProductItem from "../../components/productItem/ProductItem";
import axios from 'axios'
import company from "../../models/company";
import classes from './instrumentBox.module.scss';
import sortRequest from "../../models/sortRequest";
import {connect} from "react-redux";
import Menu from "../menu/Menu";


interface IState {
    companies: company[];
    page: number;
    isLoading: boolean;
    sort?: sortRequest
}

class InstrumentsBox extends Component<{}, IState> {

    state = {
        companies: [],
        page: 0,
        isLoading: true,
        sort: {} as sortRequest,

    };

    componentDidMount() {
        this.getCompanies();
    }

    getCompanies = (sort?: sortRequest) => {
        this.setState({isLoading: true});
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
                sort: sortParams
            });
            url = `https://api.cmsmagazine.ru/v1/instrumentsList?sort=${sortParams.sortVariable}&sort_direction=${sortParams.sortPosition}&instrument_type_code=cms&page=${page + 1}`;
        }


        console.log(url);
        axios.get(url).then(response => {
            const responseCompanies = response.data.data;
            const currentPage = response.data.current_page;
            companies = companies.concat(responseCompanies);
            this.setState(state => {
                return {
                    companies: companies,
                    page: currentPage,
                    isLoading: false,

                }
            });
        }).catch(error => {
            console.log(error);
        });


    };

    onSelect = (index: number) => {
        console.log(index);
    };

    render() {
        const products = this.state.companies.map((item: company, index) => {
            if (index === 0) {
                item.isSponsor = 1
            }
            return <ProductItem key={index} title={item.title} code={item.code} img={item.image} rate={item.rate}
                                worksCount={item.worksCount} partnersCount={item.partnersCount}
                                shortUrl={item.shortUrl} firstLettersOfName={item.firstLettersOfName}
                                url={item.url}
                                onSelect={() => this.onSelect(index)}
                                isSponsor={item.isSponsor}/>
        });
        return (
            <table className={classes.table}>
                <thead>
                <Menu onChangeFilter={(sortRequest?: sortRequest) => this.getCompanies(sortRequest)}/>
                </thead>
                <tbody>
                {products}
                <tr>
                    <td colSpan={30}>
                        {this.state.isLoading ? <div className='sk-circle-bounce'>
                            <div className='sk-child sk-circle-1'></div>
                            <div className='sk-child sk-circle-2'></div>
                            <div className='sk-child sk-circle-3'></div>
                            <div className='sk-child sk-circle-4'></div>
                            <div className='sk-child sk-circle-5'></div>
                            <div className='sk-child sk-circle-6'></div>
                            <div className='sk-child sk-circle-7'></div>
                            <div className='sk-child sk-circle-8'></div>
                            <div className='sk-child sk-circle-9'></div>
                            <div className='sk-child sk-circle-10'></div>
                            <div className='sk-child sk-circle-11'></div>
                            <div className='sk-child sk-circle-12'></div>
                        </div> : <span onClick={() => this.getCompanies()}
                                       className={classes.loadMore}>Показать еще</span>}

                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        sortRequest: state.filterReducer.sortRequest,
    }
};

export default connect(mapStateToProps, null)(InstrumentsBox);