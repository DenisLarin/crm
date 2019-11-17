import React, {Component} from 'react';
import Menu from "../../menu/Menu";
import InstrumentsBox from "../../instrumentsBox/InstrumentsBox";
import classes from './intrumentsPage.module.scss';

class InstrumetnsPage extends Component {
    render() {
        return (
            <div>
                <h1>Список инструментов</h1>
                <table className={classes.table}>
                    <thead>
                    <Menu/>
                    </thead>
                    <InstrumentsBox/>
                </table>
            </div>
        );
    }
}

export default InstrumetnsPage;