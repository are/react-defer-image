import React from "react";

export class DeferImage extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        className="panel panel-default"
        key={this.props.key}
        style={{ marginTop: "20px", fontFamily: "Segoe UI" }}>

        <div
          className="panel-body"
          dangerouslySetInnerHTML={{ __html: md.render(this.props.content) }} />
      </div>
    );
  }

}
