import React from "react";
import Form from "./components/form/form";
import ReactJson from "react-json-view";

const Main = props => {
  return (
    <>
      <Form
        onSubmit={props.submit}
        setMethod={props.setMethod}
        setUrl={props.setUrl}
      />
      <ReactJson src={props.results} />
    </>
  );
};

export default Main;
