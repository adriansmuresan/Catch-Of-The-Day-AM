import React from 'react';
import ProtoTypes from 'prop-types';
import firebase from 'firebase';
import AddFishForm from './AddFishForm';
import EditFishForm from './EditFishForm';
import Login from './Login';
import base, { firebaseApp } from '../base';

class Inventory extends React.Component {
  static propTypes = {
    fishes: ProtoTypes.object,
    updateFish: ProtoTypes.func,
    deleteFish: ProtoTypes.func, 
    addFish: ProtoTypes.func,
    loadSampleFishes: ProtoTypes.func,
  };

  state = {
    uid: null,
    owner: null
  }

  authHandler = async authData => {
    // Look up the current store in the firebase data base
    const store = await base.fetch(this.props.storeId, { context: this });
    console.log(store);
    // Claim it if there is no owner
    if(!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }
    // Set the state of the inventory component to reflect the current user
    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
    console.log(authData);
  };

  authenticate = (provider) => {
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    firebaseApp
    .auth()
    .signInWithPopup(authProvider)
    .then(this.authHandler);
  };

  render() {
    // Check if they are logged in
    if(!this.state.uid) {
      return <Login authenticate={this.authenticate} />;
    };

    // Check if they are not the owner of the store
    if(this.state.uid !== this.sate.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
        </div>
      );
    }

    // They must be the owner, just render the inventory
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