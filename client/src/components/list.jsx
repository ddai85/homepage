import React from 'react';
import { render } from 'react-dom';
import Card from './card.jsx'
import $ from 'jquery';
import Grid from 'material-ui/Grid';

const styles = theme => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
    control: {
      padding: theme.spacing.unit * 2,
    },
});

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <p>
          I am List
        </p>
        <Card/>
        <br/>
        <Card/>
      </div>
    );
  }
}

module.exports = List;