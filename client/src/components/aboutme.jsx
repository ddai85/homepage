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
      positionTop: 100, // Just so the popover can be spotted more easily
      positionLeft: 100, // Same as above
      anchorReference: 'anchorPosition',
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
  }

  handleRequestClose() {
    this.props.handleAboutmeClose();
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
        open={this.props.open}
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
        <Typography type="headline" className={classes.typography}>About Me</Typography>
        <Typography type="subheading" className={classes.typography}><b>Full Name:</b> Daniel Dai</Typography>
        <Typography type="subheading" className={classes.typography}><b>Profession:</b> Software Engineer</Typography>
        <Typography type="subheading" className={classes.typography}><b>Education:</b> </Typography>
        <Typography type="subheading" className={classes.typography}>UC Davis (Bachelor of Science)</Typography>
        <Typography type="subheading" className={classes.typography}>Hack Reactor SF (HRSF 81)</Typography>
        <Typography type="subheading" className={classes.typography}><b>Interests:</b></Typography>
        <Typography type="subheading" className={classes.typography}>Snowboarding</Typography>
        <Typography type="subheading" className={classes.typography}>Drumming</Typography>

      </Popover>
    );
  }
}

export default withStyles(styles)(Aboutme);