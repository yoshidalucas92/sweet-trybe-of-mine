
import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon;
    return (
      <div className ="pokemon">
          <img src={image} alt={`${name} sprite`} />
          <div>
              <p><strong>Name:</strong> {name}</p>
              <p><strong>Type:</strong> {type}</p>
              <p><strong>Average weight:</strong> {`${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          </div>
      </div>
    );
  }
}

export default Pokemon;
