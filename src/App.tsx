import React from 'react';
import {Redirect, Route, Switch} from "react-router";
import InstrumetnsPage from "./containers/pages/instrumentsPage/InstrumetnsPage";
import FavoritesPage from "./containers/pages/favoritesPage/favoritesPage";
import Layout from "./hoc/layout/Layout";
import Content from "./hoc/content/Content";
import CompanyPage from "./containers/pages/companyPage/CompanyPage";

const App: React.FC = () => {
    return (
        <div className="App">
            <Layout>
                <Content>
                    <Switch>
                        <Route path='/instruments' exact component={InstrumetnsPage}/>
                        <Route path='/favorites' component={FavoritesPage}/>
                        <Route path='/instrument/:CODE' component={CompanyPage}/>
                        <Redirect from="/" to="/instruments"/>
                    </Switch>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
