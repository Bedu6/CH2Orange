import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import Comments from './Comments';
import SaveComments from './Comments/Save';
import Photos from './Photos';

class App extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <div>
                        <Menu />
                        <div>
                            <Route exact path = "/" component = { Comments } />
                            <Route exact path = "/comments/save" component = { SaveComments } />
                            <Route exact path = "/comments/edit/:id" component = { SaveComments } />
                            <Route exact path = "/photos" component = { Photos } />
                        </div>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;