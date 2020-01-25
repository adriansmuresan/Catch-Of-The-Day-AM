import React from 'react';
import ProtoTypes from 'prop-types';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';

class Inventory extends React.Component {
  static propTypes = {
    fishes: ProtoTypes.object,
    updateFish: ProtoTypes.func,
    deleteFish: ProtoTypes.func, 
    addFish: ProtoTypes.func,
    loadSampleFishes: ProtoTypes.func,
  };

  render() {
    return(
      <div className="inventory">
        <h2>Inventory</h2>
        {Object.keys(this.props.fishes).map(key => (
          <EditFishForm 
            key={key} 
            index={key} 
            fish={this.props.fishes[key]} 
            updateFish={this.props.updateFish}
            deleteFish={this.props.deleteFish} 
          />
          ))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSampleFishes}>Load Sample fishes</button>
      </div>
    );
  }
}

export default Inventory;