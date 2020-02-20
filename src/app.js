import React from "react";
import Superagent from "superagent";
import ReactJson from "react-json-view";

import Form from "./components/form/form";
import Header from "./components/header/header";

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
        results: res.body.results
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
        <Form
          onSubmit={this.formSubmit}
          setMethod={this.setMethod}
          setUrl={this.setUrl}
        />
        <ReactJson src={this.state.results} />
      </>
    );
  }
}

export default App;
