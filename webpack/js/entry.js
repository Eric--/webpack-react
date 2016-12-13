require("../css/style.css");

//react
var React = require('react');
var ReactDOM = require('react-dom');
var Hello = require('./component.jsx');
var myDivElement = <div className="foo">test</div>;
var names = ['Alice', 'Emily', 'Kate'];

var oName = {};
names.forEach(function(val, idx){
  oName[idx] = val;
});
console.table(oName);

var Avatar = require('./avatar.jsx');
var pagename = "Engineering";

var ListItemWrapper = require('./listitemwrapper.jsx');

var CheckLink = require('./checklink.jsx');

var Subtoparent = require('./subtoparent.jsx');

var FormChange = require('./formchange.jsx');

var Refprop = require('./refprop.jsx');

ReactDOM.render(<Subtoparent />, document.getElementById('app'));
