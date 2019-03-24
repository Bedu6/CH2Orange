import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Comentarios from './Comentarios';
import Fotos from './Fotos';
import ComentariosGuardar from './Comentarios/Guardar';

class App extends Component {
  render() {
    return (
      <div>
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
    );
  }
}

export default App;
