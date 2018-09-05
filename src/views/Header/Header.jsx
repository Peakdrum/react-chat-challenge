import React, { Component } from 'react';
import { connect } from 'react-redux';

import { setSubGreeting } from 'store/actions';

import headerStyles from './Header.scss';


class Header extends Component {
  componentDidMount() {
    setTimeout(this.postSubGreeting, 3000);
  }

  componentWillUnmount() {
    clearTimeout(this.postSubGreeting);
  }

  render() {
    const { greeting, subGreeting } = this.props;

    return (
      <div className={headerStyles.main}>
      </div>
    );
  }

  // Use arrow functions for class methods so you don't have to bind 'this'
  postSubGreeting = () => {
    // Supply parameters to functions as an object to make it easy to see
    // what is being passed to the function.
    // This also makes supplied argument order irrelevant.
    setSubGreeting({ subGreeting: 'Please make PRs to this repository for any suggested changes/updates.' });
  }

}

const mapStateToProps = ({ header }) => ({
  greeting: header.greeting,
  subGreeting: header.subGreeting
});

export default connect(mapStateToProps)(Header);
