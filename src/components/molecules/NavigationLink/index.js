import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavigationLink extends Component {
  render() {
    const { name, href } = this.props;

    return (
        <div>
            <NavLink
                to={ href }
                activeClassName="active"
                activeStyle={ { borderBottom: '4px solid #008dc8' } }
                style={ { marginRight: '6px' } }
            >
                {name}
            </NavLink>
        </div>
    );
  }
}


export default NavigationLink;
