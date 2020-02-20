import React from "react";

class Form extends React.Component {
  render() {
    return (
      <>
        <form onSubmit={this.props.onSubmit}>
          <div>
            <input id="url" onChange={this.props.setUrl} />
            <div id="method" onChange={this.props.setMethod}>
              <label>
                GET
                <input type="radio" name="method" id="get" value="GET" />
              </label>
              <label>
                POST
                <input type="radio" name="method" id="post" value="POST" />
              </label>
              <label for="get">
                PUT
                <input type="radio" name="method" id="put" value="PUT" />
              </label>
              <label for="get">
                PATCH
                <input type="radio" name="method" id="patch" value="PATCH" />
              </label>
              <label for="get">
                DELETE
                <input type="radio" name="method" id="delete" value="DELETE" />
              </label>
            </div>
          </div>
          <button type="submit">Go!</button>
        </form>
      </>
    );
  }
}

export default Form;
