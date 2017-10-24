// Framework
import React, { Component } from "react";
import { Meteor } from "meteor/meteor";

// Components
import { Alert, Row, Col } from "reactstrap";
import Page from "../components/Page.jsx";
import Product from "../components/Product";

class Shop extends Component {
  constructor(props) {
    super(props);
    // Initialize State
    this.initialState = {
      merchants: [],
      error: null
    };
    this.state = this.initialState;
  }

  componentWillMount() {
    console.log("here1newNow11");
    Meteor.call("merchants.getMerchants", (error, response) => {
      if (error) {
        this.setState(() => ({ error: error }));
      }
      this.setState(() => ({ merchants: response }));
    });
  }

  goBack = () => this.props.history.push("/");

  render() {
    const { merchants, error } = this.state;

    const products = merchants.reduce(
      (acc, { products = [] }, i, self) => [
        ...acc,
        ...products.map(product => ({
          ...product,
          brand: self[i].brands[product.belongsToBrand]
        }))
      ],
      []
    );

    return (
      <Page pageTitle="shop" history goBack={this.goBack}>
        <div className="shop-page">
          {products.map(({ id, ...product }) =>
            <Product {...product} key={id} />
          )}
        </div>
      </Page>
    );
  }
}

export default Shop;
