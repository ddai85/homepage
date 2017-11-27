import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

const styles = {
  card: {
    maxWidth: 360,
    height: 500,
  },
  media: {
    height: 200,
  },
  logo: {
    padding: "0 7px 4px 0",
    "vertical-align": "middle",
  },
  title: {
    color: "inherit",
    "text-decoration": "none",
  }
};

class SimpleCard extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    const props = this.props;
    const { classes } = props;
    const techstack = props.details.techstack.join(' | ');
    return (
      <div>
        <Card className={classes.card}>
          <a className="bla-1" href={props.details.video}><CardMedia
            className={classes.media}
            image={props.details.picture}
          /></a>
          <Divider light />
          <CardContent>
            <Typography type="title" component="h2">
              <img className={classes.logo} src="./images/github.svg" height="20" width="20"/><a className={classes.title} href={props.details.gitHub} target="_blank">{props.details.title}</a>
            </Typography>
            <Typography type="subheading" component="p">
              {techstack}
            </Typography>
            <br/>
            <Typography component="p">
              {props.details.description}
            </Typography>
          </CardContent>
          <CardActions>
            {/* <Button href={props.details.achievements} dense color="primary">
              Individual Contribution
            </Button> */}
          </CardActions>
        </Card>
      </div>
    );
  }
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);