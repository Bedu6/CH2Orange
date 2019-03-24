import React, { Component } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Comments from './Comments';
import Guardar from'./Comments/Agregar';

class App extends Component {
  render() {
    return (
      <div>
      <BrowserRouter>
        <div>
          
          <Menu />
            <div className="container">
            <Switch>
                <Route exact path='/' component={Comments}/>
                <Route exact path='/comments/guardar' component={Guardar}/>
                <Route exact path='/comments/editar/:id' component={Guardar}/>
            </Switch>
            </div>
        </div>
      </BrowserRouter>
    </div>
    );
  }
}

export default App;
