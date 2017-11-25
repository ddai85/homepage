import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = {
  card: {
    maxWidth: 360,
  },
  media: {
    height: 200,
  },
};

function SimpleCard(props) {
  const { classes } = props;
  const techstack = props.details.techstack.join(' | ');
  return (
    <div>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={props.details.picture}
          title="picture title"
        />
        <CardContent>
          <Typography type="headline" component="h2">
            {props.details.title}
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
          <Button href={props.details.video} dense color="primary">
            Video Demo
          </Button>
          <Button href={props.details.gitHub} dense color="primary">
            GitHub Repo
          </Button>
          <Button href={props.details.achievements} dense color="primary">
            Achievements
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

SimpleCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleCard);