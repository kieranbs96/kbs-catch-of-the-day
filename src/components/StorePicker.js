import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { getFunName } from '../helpers';

class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object,
  }

  myInput = React.createRef();

  goToStore = (event) => {
    event.preventDefault();
    const storeName = this.myInput.value.value;
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2> Please Enter A Store</h2>
          <input ref={this.myInput} type="text" required placeholder="Enter Store Name" defaultValue={getFunName()} />
          <button type="submit">Visit Store &rarr;</button>
        </form>
      </React.Fragment>
    )
  }
}

export default StorePicker;