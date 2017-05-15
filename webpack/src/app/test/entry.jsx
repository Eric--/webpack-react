
//react
let React = require('react');
let ReactDOM = require('react-dom');
let Hello = require('./component.jsx');
let myDivElement = <div className="foo">test  aaad</div>;

// let Avatar = require('./avatar.jsx');
//
// let ListItemWrapper = require('./listitemwrapper.jsx');
//
// let CheckLink = require('./checklink.jsx');
//
// let Subtoparent = require('./subtoparent.jsx');
//
// let FormChange = require('./formchange.jsx');
//
// let Refprop = require('./refprop.jsx');

let People = require('./es6.js');
let p1 = new People("xiaolong");
p1.sayHi();
p1.prop = 12334;
console.log(p1.prop);
console.log(People.sayEle());
console.log(People.calcEggs(10000));

// let ComponentMount = require('./com_mount.jsx');
let RepoList = require('./githubres.jsx');

ReactDOM.render(<RepoList promise={$.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars')} />,
document.getElementById('app'));
// ReactDOM.render(myDivElement, document.getElementById('app'));

let SortAlgorithm = require('./sort.algorithm.js');

let arr = [7, 8, 6, 6, 5, 4, 3, 2];

// SortAlgorithm.bubbleSort(arr);
// SortAlgorithm.selectionSort(arr);
// SortAlgorithm.insertionSort(arr);
// arr = SortAlgorithm.mergeSort(arr);
SortAlgorithm.quickSort(arr, 0, arr.length-1);

console.log(arr);
