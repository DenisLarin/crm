import React, {Component} from 'react';
import InstrumentsBox from "../../instrumentsBox/InstrumentsBox";

class InstrumetnsPage extends Component {

    componentDidMount() {
        document.title = "Список инструментов";
    }


    render() {
        return (
            <div>
                <h1>Список инструментов</h1>
                <InstrumentsBox/>
            </div>
        );
    }
}

export default InstrumetnsPage;