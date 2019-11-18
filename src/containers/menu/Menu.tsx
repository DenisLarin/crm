import React, {Component} from 'react';
import MenuItem from "../../components/menuItem/MenuItem";
import sortedImage from '../../assets/sortedDown.svg'
import classes from './menu.module.scss'
import sortRequest from "../../models/sortRequest";

interface IProps {
    onChangeFilter: (sortRequest?: sortRequest) => void;
    isSorting?: boolean;
}

class Menu extends Component<IProps, any> {
    state = {
        menus: [
            {name: "Название"},
            {name: "Проекты", sort: 'works_count'},
            {name: "Партнеры", sort: 'partners_count'},
            {name: "Оценка пользователей", sort: 'rate'},
            {name: "Сравнить"},
        ],
        activeLink: "",
        sortedPosition: ""
    };
    onMenuClick = (name: string) => {
        let activeLink = name;
        let sortProsition = "";
        if (this.state.activeLink === name) {
            if (this.state.sortedPosition === "asc") {
                sortProsition = "";
                this.setState({activeLink: "", sortedPosition: ""})
            } else {
                sortProsition = "asc";
                this.setState({sortedPosition: "asc"});
            }
        } else {
            sortProsition = "desc";
            this.setState({activeLink: name, sortedPosition: "desc"});
        }

        if (activeLink && sortProsition) {
            const sort = this.state.menus.filter(item => {
                return item.name === activeLink;
            });

            const sortRequest: sortRequest = {
                sortPosition: sortProsition,
                sortVariable: sort[0].sort as string,
            };
            this.props.onChangeFilter(sortRequest);
        } else {
            const emptySortRequest: sortRequest = {
                sortPosition: "",
                sortVariable: "",
            };
            this.props.onChangeFilter(emptySortRequest);
        }
    };

    render() {
        const menus = this.state.menus.map((item, index) => {

            return <th key={item.name} colSpan={index === 0 ? 10 : 5}>
                <MenuItem
                    isActive={this.state.activeLink === item.name}
                    isSorting={(this.props.isSorting && item.name === this.state.activeLink) ? true: false}
                    sortedOrder={this.state.sortedPosition}
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