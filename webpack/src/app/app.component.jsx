
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
      liked: false
    };

    this.layerHidden = true;
    this.loginPopupShow = true;
    this.loginStatus = false;
    this.userName = '';
  }

  handleBtnClick(e){
    console.log(this.state.liked);
    console.log(this.props.maxLoops);
    this.setState({liked: !this.state.liked});
  }

  render() {

    console.log('render');
    var text = this.state.liked ? 'liked' : 'haven\'t liked';
    return (
      <div>
        <div className="container container-xl">

            <NavbarCom></NavbarCom>

            <div className="page-right">

                <TopbarCom loginStatus={this.loginStatus} userName={this.userName}></TopbarCom>

                <router-outlet></router-outlet>
            
            </div>
        </div>

        <LoginPopupCom show={this.loginPopupShow}></LoginPopupCom> 

        <div className="overlay" hidden={this.layerHidden}></div>
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
        this.userName = userName;
        this.loginStatus = true;
        this.loginPopupShow = false;
      }else{
        this.layerHidden = false;
      }
  }

  componentDidMount(){
    console.log('componentDidMount');
    setTimeout(function(){
      console.log('setTimeout');
    }, 0);
    for(var i = 0; i < 10; i++){
      console.log(i);
    }
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
