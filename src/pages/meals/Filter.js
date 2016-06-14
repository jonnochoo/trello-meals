import React, { PropTypes, Component } from 'react'
import FilterButton from './FilterButtonContainer';

class Filter extends Component {
  render() {
      return (
        <div>
          <ul className="nav nav-pills">
            {
              this.props.labels.map(label => (              
                <FilterButton key={label} label={label} />
              ))             
            }
          </ul>
        </div>
      );
    }
};

Filter.propTypes = {
  labels: PropTypes.array.isRequired
}

export default Filter;
