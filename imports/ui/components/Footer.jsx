// Framework
import React, { PureComponent } from "react";

// Components
import Page from "../components/Page.jsx";

class Footer extends PureComponent {
  render() {
    return (
      <Page>
        <div className="home-page">
          <h2 className="title">Welcome to our fancy Shop</h2>
          <button
            className="bonsai-button"
            onClick={() => {
              this.props.history.push("/shop");
            }}
          >
            Go shopping
          </button>
        </div>
      </Page>
    );
  }
}

export default Footer;
