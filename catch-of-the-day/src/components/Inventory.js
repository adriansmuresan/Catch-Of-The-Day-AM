import React from 'react';
import ProtoTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';

class Inventory extends React.Component {
  static propTypes = {
    fishes: ProtoTypes.object,
    updateFish: ProtoTypes.func,
    deleteFish: ProtoTypes.func, 
    addFish: ProtoTypes.func,
    loadSampleFishes: ProtoTypes.func,
  };

  authHandler = async authData => {
    console.log(authData);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebase
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler);
  };

  render() {
    return <Login authenticate={this.authenticate} />;

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