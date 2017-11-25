import React from 'react';
import { render } from 'react-dom';
import $ from 'jquery';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';
import Typography from 'material-ui/Typography';
import Menu, { MenuItem } from 'material-ui/Menu';

const styles = theme => ({
    root: {
      marginTop: theme.spacing.unit * 3,
      marginBottom: theme.spacing.unit * 3,
      width: '100%',
    },
    menuButton: {
        color: 'white',
    }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        anchorEl: null,
        open: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }; 

  handleClick (event) {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose () {
    this.setState({ open: false });
  };


  render() {
    const { classes } = this.props;
    return (
        <div className={classes.root}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <IconButton className={classes.menuButton} aria-label="Menu">
                        <MenuIcon 
                            aria-owns={this.state.open ? 'simple-menu' : null}
                            aria-haspopup="true"
                            onClick={this.handleClick}/>
                        <Menu
                            id="simple-menu"
                            anchorEl={this.state.anchorEl}
                            open={this.state.open}
                            onRequestClose={this.handleRequestClose}
                            >
                            <MenuItem onClick={this.handleRequestClose}>My Portfolio</MenuItem>
                            <MenuItem onClick={this.handleRequestClose}>About Me</MenuItem>
                            <MenuItem onClick={this.handleRequestClose}>My Resume</MenuItem>
                            <MenuItem onClick={this.handleRequestClose}>GitHub</MenuItem>
                            <MenuItem onClick={this.handleRequestClose}>LinkedIn</MenuItem>
                        </Menu>
                    </IconButton>
                    <Typography className={classes.menuButton} type="title">
                        Homepage of Daniel Dai
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
  }
}

export default withStyles(styles)(Header);