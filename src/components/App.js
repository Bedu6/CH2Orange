import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Users from './Users';
import Agregar from './Users/Agregar'

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Menu />
                        <div>
                            <Route exact path = "/" component = { Users } />
                            <Route exact path = "/" component = { Agregar } />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;