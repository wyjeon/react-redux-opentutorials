import React, {Component} from 'react'
import AddNumber from '../components/AddNumber'

class AddNumberRoot extends Component {
  render() {
    return (
      <div>
        <h1>Add Numer Root</h1>
        <AddNumber onClick={function(size){
          this.props.onClick(size);
        }.bind(this)}/>
      </div>
    );
  }
}


export default AddNumberRoot;
