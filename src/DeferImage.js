import React from "react";

export default class DeferImage extends React.Component {

  static propTypes = {
    src: React.PropTypes.string.isRequired,
    emptySrc: React.PropTypes.string
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let element = this.refs.image.getDOMNode();
    element.setAttribute("src", element.getAttribute("data-src"));
  }

  componentDidUpdate(prevProps) {
    let element = this.refs.image.getDOMNode();
    element.setAttribute("src", element.getAttribute("data-src"));

    element.setAttribute("src", this.props.src);
  }

  render() {
    return (
      <img
        ref="image"
        data-src={ this.props.emptySrc || "data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="}
        style={{ maxWidth: "100%", margin: "0 auto", display: "block" }} />
    );
  }
}
