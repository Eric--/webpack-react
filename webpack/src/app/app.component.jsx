
import React from 'react';
import PropTypes from 'prop-types';

import './app.component.scss';

let NavbarCom = require('./nav_bar/navbar.component');
let TopbarCom = require('./top_bar/topbar.component');
let LoginPopupCom = require('./login_popup/login.popup.component');
let CookieService = require('./service/cookie.service');

class AppComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        layerHidden: true,
        loginPopupShow: true,
        loginStatus: false,
        userName: ''
    };

  }

  toggleLoginPopup(show){
      this.setState({
        loginPopupShow: show,
        layerHidden: true
      });
  }

  render() {

    console.log('render');
    return (
      <div>
        <div className="container container-xl">

            <NavbarCom></NavbarCom>

            <div className="page-right">

                <TopbarCom loginStatus={this.state.loginStatus} userName={this.state.userName}></TopbarCom>

                <router-outlet></router-outlet>
            
            </div>
        </div>

        <LoginPopupCom show={this.state.loginPopupShow} toggleLoginPopup={show=>this.toggleLoginPopup(show)}></LoginPopupCom> 

        <div className="overlay" hidden={this.state.layerHidden}></div>
      </div>
      );
  }

  //首次装载
  // getDefaultProps(){componentWillUnmount()
  //   console.log('getDefaultProps');
  // }

  getInitialState(){
    console.log('getInitialState');
  }

  componentWillMount(){
      console.log('componentWillMount');

      let userName = CookieService.getCookie('sys_username');
      if(userName){
        this.setState({
          userName: userName,
          loginStatus: true,
          loginPopupShow: false
        });
      }else{
        this.setState({
          layerHidden: false
        });
      }
  }

  componentDidMount(){
    console.log('componentDidMount');
  }

  //卸载
  componentWillUnmount(){
    console.log('componentWillUnmount');
  }

  //组件状态更新
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }

  componentWillUpdate(){
    console.log('componentWillUpdate');
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }
}

AppComponent.defaultProps = {
      autoPlay: false,
      maxLoops: 10
};

AppComponent.propTypes = {
    autoPlay: PropTypes.bool.isRequired,
    maxLoops: PropTypes.number.isRequired
};

module.exports = AppComponent;
