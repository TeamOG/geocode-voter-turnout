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


    render() {
        return (
            <div>
                <AppBar
                    title="The O.G. Voter Data App"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleMenuToggleToggle}
                />
            
                <Drawer open={this.state.open} docked={false} onRequestChange={this.closeDrawer}>
                    <MenuItem onClick={this.redirectPage.bind(this, '')}>Home</MenuItem>
                    <MenuItem onClick={this.redirectPage.bind(this, 'map')}>Map</MenuItem>
                    <MenuItem onClick={this.redirectPage.bind(this, 'reports')}>Reports</MenuItem>
                </Drawer>
            </div>

        )
    }
}