import React from 'react';
import './App.css';
import GetData from './components/getData';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Form from './components/createData';
import Edit from './components/Edit';
import history from './history';
import MainComponent from './Dashboard/mainComponent';
import NewData from './Dashboard/newData';
import NewEdit from './Dashboard/newEdit';
import BookList from './components/getBookList';
import GetStudentData from './students/getStudentData';
import Project from './container/get';
import Details from './container/details';

function App() {
  return (
    // <div className="App">
    //   <GetData />
    // </div>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={GetData}/>
        <Route exact path="/form" component={Form} />
        <Route exact path="/edit/:id" component={Edit}/>
        <Route exact path="/get" component={MainComponent}/>
        <Route exact path="/newData" component={NewData}/>
        <Route exact path="/newEdit/:id" component={NewEdit}/>
        <Route exact path="/book" component={BookList}/>
        <Route exact path="/students" component={GetStudentData}/>
        <Route exact path="/getjson" component={Project}/>
        <Route exact path="/details/:id" component={Details}/>
      </Switch>
    </Router>
  );
}

export default App;
