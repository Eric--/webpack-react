
import React from 'react';
import PropTypes from 'prop-types';

import './login.popup.component.scss';


class LoginPopupCom extends React.Component {

	constructor(props) {
	  super(props);
	  this.state = {
	    errorShow: false,
	    errorMsg: ''
	  };
	  //show
	}

	hide(e){
		this.props.toggleLoginPopup(false);
	}

	componentWillUpdate(){
	  console.log('loginPopup update');
	}

	render() {

		  	return (
			  	<div className="popup" hidden={!this.props.show}>
			  		<div className="pop-bar"></div>
			  		<div className="pop-title">
			  			<span>操作员登录</span>
			  			<div className="close" onClick={e=>this.hide(e)}></div>
			  		</div>
			  		<div className="pop-content">
			  			<div className="input-error" hidden={this.errorShow}>{this.errorMsg}</div>
			  			<div className="input-name">
			  				<label>请输入操作员号：</label><input
			  				 type="text" name="account"/> 
			  			</div>
			  			<div className="input-pwd">
			  				<label>请输入密码：</label><input
			  				 type="password" name="password" />
			  			</div>
			  			<div className="input-submit">
			  				<button className="btn btn-default btn-cancel">取消</button><button className="btn btn-primary" 
			  				 >确定</button>
			  			</div>
			  		</div>
			  	</div>
		    );
	}

}


module.exports = LoginPopupCom;