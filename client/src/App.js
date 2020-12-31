import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Book from './components/Book/Book'
import Edit from './components/Book/Edit';
import Create from './components/Book/Create';
import Show from './components/Book/Show';
import Art from './components/Art/Art'
import EditArt from './components/Art/EditArt';
import CreateArt from './components/Art/CreateArt';
import ShowArt from './components/Art/ShowArt';
class App extends Component {

  render() {
    return (
      <Router>
          <div>
              <Route exact path='/' component={Art} />
              <Route exact path='/book' component={Book} />
              <Route path='/book/edit/:id' component={Edit} />
              <Route path='/book/create' component={Create} />
              <Route path='/book/show/:id' component={Show} />
              <Route exact path='/art' component={Art} />
              <Route path='/art/edit/:id' component={EditArt} />
              <Route path='/art/create' component={CreateArt} />
              <Route path='/art/:id' component={ShowArt} />
          </div>
      </Router>
    );
  }
}

export default App;
