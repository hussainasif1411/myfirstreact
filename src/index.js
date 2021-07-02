// import React from 'react';
// import ReactDOM from 'react-dom';

// const myfirstelement = <h1>Hello React!</h1>

// ReactDOM.render(myfirstelement, document.getElementById('root'));

//COMPONENT USING CLASS
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
// ReactDOM.render(<Car />, document.getElementById('root'));

//COMPONENET USING FUNCTION
// import React from 'react';
// import ReactDOM from 'react-dom';

// function Car() {
//   return <h2>Hi, I am also a Car!</h2>;
// }

// ReactDOM.render(<Car />, document.getElementById('root'));

//STATE
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component{
//   constructor(){
//     super();
//     this.state = {color: "red"};
//   }
//   render(){
//     return <h2>I am a {this.state.color} Car!</h2>
//   }
// }
// ReactDOM.render(<Car />, document.getElementById('root'));

//COMPONENT IN COMPONENET
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a Car!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('root'));


//COMPONENT IN FILES
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Car from './App.js';

// ReactDOM.render(<Car />, document.getElementById('root'));

//REACT PROPS

//REACT PROP
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>
//   }
// }

// const myelement = <Car brand="Ford" />;

// ReactDOM.render(myelement, document.getElementById('root'));

//PASSING DATA FROM ONE COMPONENT TO OTHER
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car brand="Ford" />
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Garage />, document.getElementById('root'));


//PASSING VARIABLE INSTEAD OF STRING IN ABOVE CODE
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const carname = "JAGUAR";
//     return (
//       <div>
//       <h1>Who lives in my Garage?</h1>
//       <Car brand={carname} />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Garage />, document.getElementById('root'));

//PASSING OBJECT INSTEAD OF VARIABLE_NAME IN ABOVE CODE
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   render() {
//     return <h2>I am a {this.props.brand.model}!</h2>;
//   }
// }

// class Garage extends React.Component {
//   render() {
//     const carinfo = {name: "Ford", model: "Mustang"};
//     return (
//       <div>
//       <h1>Who lives in my garage?</h1>
//       <Car brand={carinfo} />
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Garage />, document.getElementById('root'));

//PROPS IN THE CONSTRUCTER
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return <h2>I am a {this.props.model}!</h2>;
//   }
// }

// ReactDOM.render(<Car model="Mustang"/>, document.getElementById('root'));

//REACT STATE
// import React from 'react';
// import ReactDOM from 'react-dom';
// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red"
//   };
//   }
//   render() {
//     return (
//       <div>
//         <h1>My Car is {this.state.brand} {this.state.model} {this.state.color}</h1>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Car />, document.getElementById('root'));

//REACT CHANGE STATE
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Car extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       brand: "Ford",
//       model: "Mustang",
//       color: "red",
//       year: 1964
//     };
//   }
//   changeColor = () => {
//     this.setState({color: "blue"});
//   }
//   render() {
//     return (
//       <div>
//         <h1>My {this.state.brand}</h1>
//         <p>
//           It is a {this.state.color} {this.state.model}
//           from {this.state.year}.
//         </p>
//         <button
//           type="button"
//           onClick={this.changeColor}
//         >Change color</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Car />, document.getElementById('root'));

//getDerivedStateFromProps() Method in MOUNTING
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

//componentDidMount() Method
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   render() {
//     return (
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//     );
//   }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));


//2. UPDATING
//getDErivedStateFromProps() METHOD 
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   static getDerivedStateFromProps(props, state) {
//     return {favoritecolor: props.favcol };
//   }
//   changeColor = () => {
//     this.setState({favoritecolor: "blue"});
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <button type="button" onClick={this.changeColor}>Change color</button>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Header favcol="yellow"/>, document.getElementById('root'));

/*
This example has a button that changes the favorite color to blue,
but since the getDerivedStateFromProps() method is called,
the favorite color is still rendered as yellow
(because the method updates the state
with the color from the favcol attribute).
*/

//componentDidUpdate() method
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Header extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {favoritecolor: "red"};
//   }
//   componentDidMount() {
//     setTimeout(() => {
//       this.setState({favoritecolor: "yellow"})
//     }, 1000)
//   }
//   componentDidUpdate() {
//     document.getElementById("mydiv").innerHTML =
//     "The updated favorite is " + this.state.favoritecolor;
//   }
//   render() {
//     return (
//       <div>
//       <h1>My Favorite Color is {this.state.favoritecolor}</h1>
//       <div id="mydiv"></div>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<Header />, document.getElementById('root'));

//UNMOUNTING
//componentWillUnmount() method
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Container extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {show: true};
//   }
//   delHeader = () => {
//     this.setState({show: false});
//   }
//   render() {
//     let myheader;
//     if (this.state.show) {
//       myheader = <Child />;
//     };
//     return (
//       <div>
//       {myheader}
//       <button type="button" onClick={this.delHeader}>Delete Header</button>
//       </div>
//     );
//   }
// }

// class Child extends React.Component {
//   componentWillUnmount() {
//     alert("The component named Header is about to be unmounted.");
//   }
//   render() {
//     return (
//       <h1>Hello World!</h1>
//     );
//   }
// }

// ReactDOM.render(<Container />, document.getElementById('root'));


//REACT EVENT
//ADDING EVENT
// import React from 'react';
// import ReactDOM from 'react-dom';

// function shoot() {
//   alert("Great Shot!");
// }

// const myelement = (
//   <button onClick={shoot}>Take the shot!</button>
// );


// ReactDOM.render(myelement, document.getElementById('root'));

//this with arrow functions
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Football extends React.Component {
//   shoot = () => {
//     alert(this);
//     /*
//     The 'this' keyword refers to the component object
//     */
//   }
//   render() {
//     return (
//       <button onClick={this.shoot}>Take the shot!</button>
//     );
//   }
// }
// ReactDOM.render(<Football />, document.getElementById('root'));

//binding this with bind method in regular function
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Football extends React.Component {
//   constructor(props) {
//     super(props)
//     this.shoot = this.shoot.bind(this)
//   }
//   shoot() {
//     alert(this);
//     /*
//     Thanks to the binding in the constructor function,
//     the 'this' keyword now refers to the component object
//     */
//   }
//   render() {
//     return (
//       <button onClick={this.shoot}>Take the shot!</button>
//     );
//   }
// }
// ReactDOM.render(<Football />, document.getElementById('root'));

//PASSING ARGUMENTS USING ANONYMOUS FUNCTION
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Football extends React.Component {
//   shoot = (a) => {
//     alert(a);
//   }
//   render() {
//     return (
//       <button onClick={() => this.shoot("Goal")}>Take the shot!</button>
//     );
//   }
// }
// ReactDOM.render(<Football />, document.getElementById('root'));


//BINDING THE EVENT HANDLER TO THIS
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Football extends React.Component{
//   shoot(a){
//     alert(a);
//   }
//   render(){
//     return(
//       <button onClick={this.shoot.bind(this, "Goal")}>Take the shot!</button>
//     )
//   }
// }
// ReactDOM.render(<Football />, document.getElementById('root'));

//Arrow Function: Sending the event object manually:
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Football extends React.Component {
//   shoot = (a, b) => {
//     alert(b.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }
//   render() {
//     return (
//       <button
//         onClick={(ev) => this.shoot("Goal", ev)}
//       >Take the shot!</button>
//     );
//   }
// }

// ReactDOM.render(<Football />, document.getElementById('root'));

//With the bind() method, the event object is sent as the last argument:
// import React from 'react';
// import ReactDOM from 'react-dom';

// class Football extends React.Component {
//   shoot = (a, b) => {
//     alert(b.type);
//     /*
//     'b' represents the React event that triggered the function,
//     in this case the 'click' event
//     */
//   }
//   render() {
//     return (
//       <button
//         onClick={this.shoot.bind(this, "Goal")}
//       >Take the shot!</button>
//     );
//   }
// }

// ReactDOM.render(<Football />, document.getElementById('root'));

//REACT FORM
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component{
//   render(){
//     return(
//       <form>
//         <h1>Hello</h1>
//         <p>Enter your name:</p>
//         <input type="text" />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById("root"));

//HANDLING FORMS
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));

//CONDITIONAL RENDERING
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   }
//   render() {
//     let header = '';
//     if (this.state.username) {
//       header = <h1>Hello {this.state.username}</h1>;
//     } else {
//       header = '';
//     }
//     return (
//       <form>
//       {header}
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));

//SUBMITTING FORMS
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { username: '' };
//   }
//   mySubmitHandler = (event) => {
//     event.preventDefault();
//     alert("You are submitting " + this.state.username);
//   }
//   myChangeHandler = (event) => {
//     this.setState({username: event.target.value});
//   }
//   render() {
//     return (
//       <form onSubmit={this.mySubmitHandler}>
//       <h1>Hello {this.state.username}</h1>
//       <p>Enter your name, and submit:</p>
//       <input
//         type='text'
//         onChange={this.myChangeHandler}
//       />
//       <input
//         type='submit'
//       />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));

//MULTIPLE INPUT FIELDS
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//     };
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));

//Validating Form Input Before Submitting
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//     };
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     if (nam === "age") {
//       if (!Number(val)) {
//         alert("Your age must be a number");
//       }
//     }
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));

//Validating Form Input After Submitting
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//     };
//   }
//   mySubmitHandler = (event) => {
//     event.preventDefault();
//     let age = this.state.age;
//     if (!Number(age)) {
//       alert("Your age must be a number");
//     }
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form onSubmit={this.mySubmitHandler}>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       <br/>
//       <br/>
//       <input type='submit' />
//       </form>
//     );
//   }
// }

// ReactDOM.render(<MyForm />, document.getElementById('root'));

//ADDING ERROR MESSAGE
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: '',
//       age: null,
//       errormessage: ''
//     };
//   }
//   myChangeHandler = (event) => {
//     let nam = event.target.name;
//     let val = event.target.value;
//     let err = '';
//     if (nam === "age") {
//       if (val !="" && !Number(val)) {
//         err = <strong>Your age must be a number</strong>;
//       }
//     }
//     this.setState({errormessage: err});
//     this.setState({[nam]: val});
//   }
//   render() {
//     return (
//       <form>
//       <h1>Hello {this.state.username} {this.state.age}</h1>
//       <p>Enter your name:</p>
//       <input
//         type='text'
//         name='username'
//         onChange={this.myChangeHandler}
//       />
//       <p>Enter your age:</p>
//       <input
//         type='text'
//         name='age'
//         onChange={this.myChangeHandler}
//       />
//       {this.state.errormessage}
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));

//TEXTAREA
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       description: 'The content of a textarea goes in the value attribute'
//     };
//   }
//   render() {
//     return (
//       <form>
//       <textarea value={this.state.description} />
//       </form>
//     );
//   }
// }
// ReactDOM.render(<MyForm />, document.getElementById('root'));

//INLINE STYLING WITH CSS
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyHeader extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1 style={{color: "red"}}>Hello Style!</h1>
//       <p>Add a little style!</p>
//       </div>
//     );
//   }
// }

// ReactDOM.render(<MyHeader />, document.getElementById('root'));

//camelCased Property Names
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyHeader extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1 style={{backgroundColor: "lightblue"}}>Hello Style!</h1>
//       <p>Add a little style!.</p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<MyHeader />, document.getElementById('root'));

//JAVASCRIPT OBJECT WITH STYLING INFORMATION
// import React from 'react';
// import ReactDOM from 'react-dom';

// class MyHeader extends React.Component {
//   render() {
//     const mystyle = {
//       color: "white",
//       backgroundColor: "DodgerBlue",
//       padding: "10px",
//       fontFamily: "Arial"
//     };
//     return (
//       <div>
//       <h1 style={mystyle}>Hello Style!</h1>
//       <p>Add a little style!</p>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<MyHeader />, document.getElementById('root'));

//Using CSS Stylesheet
// import React from 'react';
// import ReactDOM from 'react-dom';
// import './App.css';

// class MyHeader extends React.Component {
//   render() {
//     return (
//       <div>
//       <h1>Hello Style!</h1>
//       <p>Add a little style!.</p>
//       </div>
//     );
// }
// }
// ReactDOM.render(<MyHeader />, document.getElementById('root'));

//CSS MODULES
// import React from 'react';
// import ReactDOM from 'react-dom';
// import Car from './App.js';

// ReactDOM.render(<Car />, document.getElementById('root'));

//USING SASS FILE
import React from 'react';
import ReactDOM from 'react-dom';
import './mysass.scss';

class MyHeader extends React.Component {
  render() {
    return (
      <div>
      <h1>Hello Style!</h1>
      <p>Add a little style!.</p>
      </div>
    );
  }
}

ReactDOM.render(<MyHeader />, document.getElementById('root'));

/*
Notice that you now have three files in your project:
'index.js', 'index.html', and 'mysass.scss'.
*/
