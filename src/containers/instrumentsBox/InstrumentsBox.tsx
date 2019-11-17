import React, {Component} from 'react';
import ProductItem from "../../components/productItem/ProductItem";
import axios from 'axios'
import company from "../../models/company";
import classes from './instrumentBox.module.scss';


interface IState {
    companies: company[];
    page: number;
    isLoading: boolean;
}

class InstrumentsBox extends Component<{}, IState> {

    state = {
        companies: [],
        page: 1,
        isLoading: true
    };

    componentDidMount() {
        this.getCompanies(this.state.page);
    }

    getCompanies = (page: number) => {
        if (!this.state.isLoading)
            this.setState({isLoading: true});
        axios.get(`https://api.cmsmagazine.ru/v1/instrumentsList?instrument_type_code=cms&page=${page}`).then(response => {
            let companies = this.state.companies;
            companies = companies.concat(response.data.data);
            this.setState((state) => {
                return {companies: companies, page: state.page + 1, isLoading:false};
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
                    </div> : <span onClick={() => this.getCompanies(this.state.page)}
                                   className={classes.loadMore}>Показать еще</span>}

                </td>
            </tr>
            </tbody>
        );
    }
}

export default InstrumentsBox;