import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <div>
        <Button>
          Hello World
        </Button>
      </div>
    );
  }
}

render(<App />, document.getElementById('app'));
