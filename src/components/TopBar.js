import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import Drawer from 'material-ui/Drawer';

export default class TopBar extends Component {
    constructor(props) {
        super(props);
this.state = {
    open: false,

}



    }

    handleMenuToggleToggle = () => this.setState({ open: !this.state.open });
    closeDrawer = () => this.setState({ open: false });

    redirectPage(loc) {
        window.location.assign(`/${loc}`)
    };

    redirectToGoogle() {
        window.location.assign('https://datastudio.google.com/reporting/1ypN34cY7_XQMeLliYK39HzvfWLeDlSBI/page/ULWP');
    }

    redirectToGitHub() {
        window.location.assign('https://github.com/TeamOG');
    }

    render() {
        return (
            <div>
                <AppBar
                    title=""
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleMenuToggleToggle}
                />
            
                <Drawer open={this.state.open} docked={false} onRequestChange={this.closeDrawer}>
                    <MenuItem onClick={this.redirectPage.bind(this, '')}>Home</MenuItem>
                    <MenuItem onClick={this.redirectPage.bind(this, 'map')}>Map</MenuItem>
                    <MenuItem onClick={this.redirectPage.bind(this, 'data')}>Data</MenuItem>
                    <MenuItem onClick={this.redirectToGoogle.bind(this)}>Google Reports</MenuItem>
                    <MenuItem onClick={this.redirectToGitHub.bind(this)}>GitHub</MenuItem>
                </Drawer>
            </div>

        )
    }
}