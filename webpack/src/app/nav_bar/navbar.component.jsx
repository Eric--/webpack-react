
import React from 'react';
import PropTypes from 'prop-types';

import './navbar.component.scss';


class NavbarCom extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    liked: false
	  };
	  this.content='<strong>content</strong>';
	}

	render() {

	  return (
	  	<div className="page-left">
	  	    <div className="system-logo">
	  	        <div></div>
	  	    </div>
	  	    <div className="system-nav">
	  	        <ul className="list-unstyled">
	  	            <li><a><span 
	  	                className="icon icon2"></span><span className="txt">业务受理</span></a>
	  	            </li>
	  	            <li><a><span 
	  	                className="fa fa-search"></span><span className="txt">查询</span></a>
	  	            </li>
	  	            <li><a><span 
	  	                className="icon icon4"></span><span className="txt">其它</span></a>
	  	            </li> 
	  	        </ul>
	  	    </div>
	  	</div>
	    );
	}

}


module.exports = NavbarCom;