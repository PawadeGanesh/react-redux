import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import store from './store';


ReactDOM.render(
<Provider store={store}><App/></Provider>,
document.getElementById('root'),
);


// function extend(Child, Parent){
//   Child.prototype = Object.create(Parent.prototype);
//   Child.prototype.constructor = Child;
// }

// function Shape(){}

// Shape.prototype.color = function(){
//   console.log("red");
// }

// function Circle(radius){
//   this.radius = radius;
// }

// extend(Circle, Shape);

// Circle.prototype.color = function(){
//   console.log("red");
// }


// const c = new Circle(10);
// console.log(c.color());





