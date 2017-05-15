/*jshint esversion: 6 */

import React from 'react';
import PropTypes from 'prop-types';

import './topbar.component.scss';


class TopbarCom extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    liked: false
	  };
	  //loginStatus
	  //userName
	}

	userLogin(){

	}

	userLogout(){

	}

	render() {

	  return (
		  	<div className="top">
		  	    <div className="input-search">
		  	        <input type="text" name=""/>
		  	    </div>
		  	    <div className="login-area">
		  	        <span className="welcome">欢迎您，<span className="login-btn" hidden={this.props.loginStatus}>请<a onClick={this.userLogin}>登录</a></span><span className="user-name" hidden={!this.props.loginStatus}>{this.props.userName}</span></span>
		  	        <a className="logout-btn" hidden={!this.props.loginStatus} onClick={this.userLogout}></a>
		  	    </div>
		  	</div>
	    );
	}

}


module.exports = TopbarCom;