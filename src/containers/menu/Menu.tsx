import React, {Component} from 'react';
import MenuItem from "../../components/menuItem/MenuItem";
import sortRequest from "../../models/sortRequest";

interface IProps {
    onChangeFilter: (sortRequest?: sortRequest) => void;
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
            return <th key={item.name} colSpan={5}>
                <MenuItem
                    isActive={this.state.activeMenuItem === item.name}
                    onClick={()=>this.onChangeActiveLink(item.name)}
                    onChangeFilter={this.props.onChangeFilter} sortVariable={item.sort} name={item.name}
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
