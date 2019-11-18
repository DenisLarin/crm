import React, {Component} from 'react';
import InstrumentsBox from "../../instrumentsBox/InstrumentsBox";
import classes from './intrumentsPage.module.scss';

class InstrumetnsPage extends Component {

    render() {
        console.log('render InstrumetnsPage');
        return (
            <div>
                <h1>Список инструментов</h1>
                <InstrumentsBox/>
            </div>
        );
    }
}

export default InstrumetnsPage;