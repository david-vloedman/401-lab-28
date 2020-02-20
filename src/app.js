import React from "react";
import Superagent from "superagent";
import ReactJson from "react-json-view";

import Form from "./components/form/form";

import Header from "./components/header/header";

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
      console.log(res.body);
      this.setState({
        count: res.body.count,
        results: res.body.results
      });
      console.log(this.state.results);
    });
  };

  setMethod = method => {
    this.setState({ method });
  };

  setUrl = e => {
    this.setState({ url: e.target.value });
    console.log(this.state);
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
