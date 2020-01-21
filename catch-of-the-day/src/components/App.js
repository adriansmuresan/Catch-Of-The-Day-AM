import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';
import sampleFishes from '../sample-fishes'
import Fish from './Fish';
import base from '../base';


class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  componentDidMount() {
    const params = this.props.match;
    this.ref = base.syncState(`${params.storeId}/fishes`, {
      context: this,
      state: 'fishes'
    });
  };

  componentWillUnmount() {
    base.removeBinding(this.ref);
  };

  addFish = fish => {
    // Take a copy of the existing state
    const fishes ={ ...this.state.fishes};
    // Add our new fish to that fishes variable
    fishes[`fish${Date.now()}`] = fish;
    // Set the new fishes object to sate
    this.setState({
      fishes: fishes // it can be just fishes as per ES6
    });
  };

  loadSampleFishes = () => {
    this.setState({
      fishes: sampleFishes
    })
  };

  addToOrder = (key) => {
    // Take a copy of state
    const order = {...this.state.order};
    // Either add to the order, or update the number in our order
    order[key] = order[key] + 1 || 1;
    // Call setState to update our state object
    this.setState({ order: order });
  }

  render() {
    return(
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market"/>
          <ul className="fishes">
            {Object.keys(this.state.fishes).map(key => <Fish 
            key={key}
            index={key}
            details={this.state.fishes[key]} 
            addToOrder={this.addToOrder} />)}
          </ul>     
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} />
        <Inventory addFish={this.addFish} loadSampleFishes={this.loadSampleFishes} />
      </div>
    )
  }
}

export default App;
