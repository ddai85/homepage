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
import Aboutme from './aboutme.jsx';

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    width: '100%',
  },
  menuButton: {
    color: 'white',
  },
  menuLink: {
    color: "inherit",
    "text-decoration": "none",
  }
});

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        anchorEl: null,
        open: false,
        aboutme: false,
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleAboutmeClose = this.handleAboutmeClose.bind(this);
    this.handleAboutme = this.handleAboutme.bind(this);
  }; 

  handleClick(event) {
    this.setState({ open: true, anchorEl: event.currentTarget });
  };

  handleRequestClose() {
    this.setState({ open: false });
  };

  handleAboutme() {
    this.handleRequestClose();
    this.setState({ aboutme: true });
  }

  handleAboutmeClose() {
    this.setState({ aboutme: false });
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
                <MenuItem onClick={this.handleAboutme}>About Me</MenuItem>
                <MenuItem onClick={this.handleRequestClose}><a className={classes.menuLink} target="_blank" href="./static/resume.pdf">My Resume</a></MenuItem>
                <MenuItem onClick={this.handleRequestClose}><a className={classes.menuLink} target="_blank" href="http://github.com/ddai85">GitHub</a></MenuItem>
                <MenuItem onClick={this.handleRequestClose}><a className={classes.menuLink} target="_blank" href="https://www.linkedin.com/in/dan-dai-b5741976/">LinkedIn</a></MenuItem>
              </Menu>
            </IconButton>
            <Typography className={classes.menuButton} type="title">
              Homepage of Daniel Dai
            </Typography>
          </Toolbar>
        </AppBar>
        <Aboutme handleAboutmeClose={this.handleAboutmeClose} open={this.state.aboutme}/>
      </div>
    );
  }
}

export default withStyles(styles)(Header);