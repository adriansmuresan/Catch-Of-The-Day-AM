import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  myInput = React.createRef();

  goToStore = (e) => {
    // Stop the form from submitting
    e.preventDefault();
    //  Get the text from that input
    console.log(this);
    // Change the page to /store/whatever-they-entered
  }
  render() {
    return (
    <form className="store-selector" onSubmit={this.goToStore}>
      <h2>Please Enter A Store</h2>
      <input type="text" ref={this.myInput} requiered placeholder="Store Name" defaultValue={getFunName()} />
      <button type="submit">Visit Store →</button>
    </form>
    )
  }
}

export default StorePicker;
