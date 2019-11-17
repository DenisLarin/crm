import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import classes from './sidebar.module.scss';

class SideBar extends Component {
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
                        <li><NavLink to="/favourites" activeClassName={classes.active}>Избраные</NavLink></li>
                        <li>Поиск</li>
                        <li>Кабинет агентсва</li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default SideBar;