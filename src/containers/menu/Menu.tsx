import React, {Component} from 'react';
import MenuItem from "../../components/menuItem/MenuItem";
import sortRequest from "../../models/sortRequest";

interface IProps {
    onChangeFilter: (sortRequest?: sortRequest) => void;
    possibleSort: boolean
}

class Menu extends Component<IProps, any> {
    state = {
        menus: [
            {name: "Название"},
            {name: "Проекты", sort: 'works_count'},
            {name: "Партнеры", sort: 'partners_count'},
            {name: "Оценка пользователей", sort: 'rate'},
            {name: "Сравнить", altName: "Удалить"},
        ],
        activeMenuItem: ""
    };

    shouldComponentUpdate(nextProps: Readonly<IProps>, nextState: Readonly<any>, nextContext: any): boolean {
        return this.state.activeMenuItem !== nextState.activeMenuItem;
    }

    onChangeActiveLink = (name: string) => {
        if (this.state.activeMenuItem !== name) {
            this.setState({activeMenuItem: name});
        }
    };

    render() {
        const menus = this.state.menus.map((item) => {
            const isActive = this.state.activeMenuItem === item.name;
            return <th key={item.name} colSpan={5}>
                <MenuItem
                    isActive={isActive}
                    onClick={() => this.onChangeActiveLink(item.name)}
                    possibleSort={this.props.possibleSort}
                    onChangeFilter={this.props.onChangeFilter} sortVariable={item.sort}
                    name={(!this.props.possibleSort && item.altName) ? item.altName : item.name}
                />
            </th>
        });
        return (
            <tr>
                {menus}
            </tr>
        );
    }
}


export default Menu;
