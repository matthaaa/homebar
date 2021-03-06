import React from 'react';
import {Route, Switch} from 'react-router-dom';

// Components
import HomeContainer from './home_views/home_container';


const App = ({children}) => (
  <div>
    <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,700" rel="stylesheet" />
    <Switch>
      <Route exact path="/" component={HomeContainer} />
    </Switch>
  </div>
);


export default App;
