import React from 'react';
import logo from './logo.svg';
import {Redirect, Route, Switch} from "react-router";
import InstrumetnsPage from "./containers/pages/instrumentsPage/InstrumetnsPage";
import FavouritesPage from "./containers/pages/favouritesPage/FavouritesPage";
import Layout from "./hoc/layout/Layout";
import Content from "./hoc/content/Content";

const App: React.FC = () => {
    return (
        <div className="App">
            <Layout>
                <Content>
                    <Switch>
                        <Route path='/instruments' component={InstrumetnsPage}/>
                        <Route path='/favorites' component={FavouritesPage}/>
                        <Redirect exact={true} from="/" to="/instruments"/>
                    </Switch>
                </Content>
            </Layout>
        </div>
    );
}

export default App;
