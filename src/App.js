import React, { Component } from 'react';
import TopMenu from './components/Layout/TopMenu/TopMenu';
import HomePage from './components/Pages/Home/HomePage';
import UserFormPage from './components/Pages/UserForm/UserFormPage';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import {connect} from 'react-redux'
import UserInformation from './components/Pages/UserInformation/UserInformation';
import * as actions from './store/actions/actions'

class App extends Component {
  state = {
    homePageText: 'Welcome to React SPA!',
    links: [
      {
        id: 1,
        text: 'Link 1',
        redirectAddress: '/link1'
      },
      {
        id: 2,
        text: 'Link 2',
        redirectAddress: '/link2'
      } 
    ]
  }

  componentDidMount(){
    this.props.onPageReload()
  }

  render() {
    let routes = null;

    routes =
        <Switch>
          <Route
            path="/link1"
            exact
            render={() =>
              <React.Fragment>
                <TopMenu links={this.state.links}></TopMenu>
                <UserFormPage></UserFormPage>
              </React.Fragment>
            }
          />
          <Route
            path="/link2"
            render={() =>
              <React.Fragment>
                <TopMenu links={this.state.links}></TopMenu>
                <UserInformation></UserInformation>
              </React.Fragment>
            }
          />
          <Route
            path="/"
            exact
            render={() =>
              <React.Fragment>
                <TopMenu links={this.state.links}></TopMenu>
                <HomePage>{this.state.homePageText}</HomePage>
              </React.Fragment>
            }
          />
        </Switch>

    return (
      <React.Fragment>
        <BrowserRouter>
          {routes}
        </BrowserRouter>
      </React.Fragment>

    );
  }
}

  const mapDispatchToProps = dispatch => {
    return {
      onPageReload: () => dispatch({type: actions.GET_USER_FROM_SESSION})
    }
  }

  export default connect(null, mapDispatchToProps)(App);