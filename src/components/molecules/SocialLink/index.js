import React, { Component } from 'react';

class SocialLink extends Component {
  render() {
    const { name, href } = this.props;

    return (
        <div>
            <a
                href={ href }
                activeStyle={ { borderBottom: '4px solid #008dc8' } }
                style={ { marginRight: '6px' } }
                target="_blank"
                rel="noopener"
            >
                {name}
            </a>
        </div>
    );
  }
}


export default SocialLink;
