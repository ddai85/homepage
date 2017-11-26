import React from 'react';
import { render } from 'react-dom';
import { withStyles } from 'material-ui/styles';
import Typography from 'material-ui/Typography';
import Popover from 'material-ui/Popover';

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 2,
  },
});

class Aboutme extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
      anchorEl: null,
      anchorOriginVertical: 'bottom',
      anchorOriginHorizontal: 'center',
      transformOriginVertical: 'top',
      transformOriginHorizontal: 'center',
      positionTop: 200, // Just so the popover can be spotted more easily
      positionLeft: 400, // Same as above
      anchorReference: 'anchorPosition',
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.setState({
      open: false,
    });
  };

  render() {
    const { classes } = this.props;
    const {
      open,
      anchorEl,
      anchorOriginVertical,
      anchorOriginHorizontal,
      transformOriginVertical,
      transformOriginHorizontal,
      positionTop,
      positionLeft,
      anchorReference,
    } = this.state;

    return (
      <Popover
        open={open}
        anchorEl={anchorEl}
        anchorReference={anchorReference}
        anchorPosition={{ top: positionTop, left: positionLeft }}
        onRequestClose={this.handleRequestClose}
        anchorOrigin={{
        vertical: anchorOriginVertical,
        horizontal: anchorOriginHorizontal,
        }}
        transformOrigin={{
        vertical: transformOriginVertical,
        horizontal: transformOriginHorizontal,
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>
    );
  }
}

export default withStyles(styles)(Aboutme);