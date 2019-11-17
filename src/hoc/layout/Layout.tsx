import React from 'react';
import classes from './layout.module.scss';
import SideBar from "../../containers/sidebar/SideBar";

interface IProps {
    children: React.ReactNode
}
const Layout = (props:IProps)=> {
    return (
        <div className={classes.layout}>
            <SideBar/>
            {props.children}
        </div>
    );
}

export default Layout;