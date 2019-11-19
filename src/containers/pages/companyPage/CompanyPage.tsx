import React, {Component} from 'react';

interface IProps {
    match: any
}

class CompanyPage extends Component<IProps, {}> {
    state={
        companyCode: ""
    }
    componentDidMount() {
        const companyCode = this.props.match.params.CODE;
        document.title = companyCode;
        this.setState({
            companyCode: companyCode
        })
    }

    render() {
        return (
            <div>
                Страница компонента: {this.state.companyCode}
            </div>
        );
    }
}

export default CompanyPage;