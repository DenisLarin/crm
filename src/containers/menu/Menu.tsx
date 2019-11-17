import React, {Component} from 'react';
import MenuItem from "../../components/menuItem/MenuItem";
import sortedImage from '../../assets/sortedDown.svg'
import classes from './menu.module.scss'

class Menu extends Component {
    state = {
        menus: [
            {name: "Название"},
            {name: "Проекты"},
            {name: "Партнеры"},
            {name: "Оценка пользователей"},
            {name: "Сравнить"},
        ],
        activeLink: "",
        isDescending: false
    };
    onMenuClick = (name: string) => {
        if (this.state.activeLink === name) {
            if (this.state.isDescending) {
                this.setState({activeLink: "", isDescending: false})
            } else {
                this.setState({isDescending: true});
            }
        } else {
            this.setState({activeLink: name, isDescending: false});
        }
    };

    render() {
        const menus = this.state.menus.map((item, index) => {
            return <th key={item.name} colSpan={index === 0 ? 10: 5} style={{textAlign: "left"}}><MenuItem
                                 isActive={this.state.activeLink === item.name}
                                 sortedOrder={this.state.isDescending}
                                 onClick={() => this.onMenuClick(item.name)} name={item.name}
                                 sortedImage={sortedImage}/></th>
        });
        return (
            <tr className={classes.menu}>
                {menus}
            </tr>
        );
    }
}

export default Menu;