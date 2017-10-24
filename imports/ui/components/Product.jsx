// Framework
import React, { PureComponent } from "react";

// Components
import Button from "../components/Button.jsx";

class Product extends PureComponent {
  handleBuyProduct = () => {
    alert("nothing");
  };

  render() {
    const {
      name = "Product",
      brand,
      color,
      description,
      id,
      image,
      price,
      quantity,
      size
    } = this.props;
    return (
      <div className="product">
        <div className="image-container">
          <img alt={name} src={image} />
        </div>
        <div className="product-details-container">
          <Button onClick={this.handleBuyProduct}>
            Buy {name}
          </Button>
        </div>
      </div>
    );
  }
}

export default Product;
