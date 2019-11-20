import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import classes from './sidebar.module.scss';
import NumberInCircle from "../../components/numberInCircle/NumberInCircle";
import {connect} from "react-redux";


interface IProps {
    selectedCompaniesCount: number;
}

class SideBar extends Component<IProps, {}> {
    render() {
        return (
            <div className={classes.siderbar}>
                <h2>Логотип</h2>
                <nav className={classes.navFirst}>
                    <ul>
                        <li>Журнал</li>
                        <li>Агентства</li>
                        <li><NavLink to="/instruments" activeClassName={classes.active}>Инструменты</NavLink></li>
                    </ul>
                </nav>
                <div className={classes.line}></div>
                <nav className={classes.navSecond}>
                    <ul>
                        <li><NavLink className={classes.withNumber} to="/favorites"
                                     activeClassName={classes.active}>Избраные {this.props.selectedCompaniesCount > 0 ?
                            <NumberInCircle number={this.props.selectedCompaniesCount}/> : null}</NavLink></li>
                        <li>Поиск</li>
                        <li>Кабинет агентсва</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state: any) => {
    return {
        selectedCompaniesCount: state.favoriteReducer.companies.length
    }
}
export default connect(mapStateToProps)(SideBar);