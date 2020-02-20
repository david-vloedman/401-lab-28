import React from "react";
import Superagent from "superagent";

import { Route } from "react-router-dom";

import Header from "./components/header/header";
import Nav from "./components/nav/nav";
import Main from "./main";
import History from "./components/history/history";


import "./app.scss";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: "",
      method: "get",
      count: 0,
      results: []
    };
  }

  formSubmit = e => {
    e.preventDefault();
    Superagent(this.state.method, this.state.url).then(res => {
      this.setState({
        count: res.body.count,
        results: res.body

      });
    });
  };

  setMethod = method => {
    this.setState({ method });
  };

  setUrl = e => {
    this.setState({ url: e.target.value });
  };

  render() {
    return (
      <>
        <Header />
        <Nav />
        <Route exact path="/">
          <Main
            submit={this.formSubmit}
            setMethod={this.setMethod}
            setUrl={this.setUrl}
            results={this.state.results}
          />
        </Route>

        <Route exact path="/history">
          <History />
        </Route>

      </>
    );
  }
}

export default App;
