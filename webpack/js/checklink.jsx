import React from 'react';

class CheckLink extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    return(
        <a {...this.props}>{'√ '}{this.props.children}</a>
    )
  }
}

module.exports = CheckLink;
