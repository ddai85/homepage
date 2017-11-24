import React from 'react';
import { render } from 'react-dom';
import Card from './card.jsx'
import $ from 'jquery';
import Grid from 'material-ui/Grid';

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {

    return (
      <Grid container>
        <Grid item xs={12}>
          <Grid container justify="center" spacing={24}>
            {[0, 1, 2, 3, 4].map(value => (
              <Grid key={value} item>
                <Card/>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

module.exports = List;