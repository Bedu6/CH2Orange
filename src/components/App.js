import React, { Component } from 'react';
<<<<<<< HEAD
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Menu from './Menu';
import Comments from './Comments';
import Guardar from'./Comments/Agregar';
=======
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Comentarios from './Comentarios';
import Fotos from './Fotos';
import ComentariosGuardar from './Comentarios/Guardar';
>>>>>>> leticia

class App extends Component {
  render() {
    return (
      <div>
<<<<<<< HEAD
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
=======
        <BrowserRouter>
          <div>
            <Menu />
            <div className='container'>
              <Route exact path='/' component={Comentarios} />
              <Route exact path='/comentarios/guardar' component={ComentariosGuardar} />
              <Route exact path='/fotos' component={Fotos} />
              <Route exact path='/comentarios/editar/:id' component={ComentariosGuardar} />
            </div>
          </div>
        </BrowserRouter>
      </div>
>>>>>>> leticia
    );
  }
}

export default App;
