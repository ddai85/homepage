import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    root: {
      marginTop: theme.spacing.unit * 3,
      width: '100%',
    },
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  } 


  render() {
    return (
        <div className={this.props.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                <Typography type="title" color="inherit">
                    I am a Header
                </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
  }
}

export default withStyles(styles)(Header);