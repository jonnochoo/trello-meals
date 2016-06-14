import React, { PropTypes, Component } from 'react'

class FilterButton extends Component {
  render() {
      var className = this.props.isActive ? "active" : ""
      return <li className={className} roles="presentation" key={this.props.label}>
        <a onClick={() => this.props.onClick(this.props.label)}>{this.props.label}</a>
      </li>
    }
};

FilterButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
}

export default FilterButton;
