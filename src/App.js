import React, { Component } from "react";
import DisplayItems from "./components/Display-Items/DisplayItems";
import Sizes from "./components/Sort-Buttons/Sizes";
import Cart from "./components/Cart/Cart";
import Header from "./components/Header/Header";
import "./App.css";
import shoppingCart from "./components/icon/shopping-cart.png";
import axios from "axios";

const DataLoaded = ({ state, filterSizes, addToCart, removeFromOrder,toggleCart }) => {
  return (
    <div>
      {console.log(state)}
      <Header />
      <div className="root">
        <Sizes products={state.products} filterSizes={filterSizes} />

        <DisplayItems products={state.filterData} addToCart={addToCart} />
        <Cart
          orders={state.order}
          products={state.products}
          removeFromOrder={removeFromOrder}
        />
        <img
          src={shoppingCart}
          className="toggle-button"
          onClick={() => toggleCart()}
          width="50px"
          height="50px"
          alt="Shopping Cart"
        />
      </div>
    </div>
  );
};

class App extends Component {
  constructor() {
    super();
    this.filterSizes = this.filterSizes.bind(this);
    this.addToCart = this.addToCart.bind(this);
    this.removeFromOrder = this.removeFromOrder.bind(this);
    this.toggleCart = this.toggleCart.bind(this);
    this.state = {
      products: [],
      filterData: [],
      order: {},
      isShowing: false,
      isLoading: true
    };
  }

  //loading data from the link
  componentDidMount() {
    axios.get(`https://api.myjson.com/bins/l5ayx`).then(res => {
      const persons = res.data.products;
      this.setState({
        products: persons,
        filterData: persons,
        isLoading: false
      });
    });
  }
  //filtering data on the basis of size (XL, L, S)
  filterSizes(match) {
    this.setState({ filterData: match });
  }
  //adding the selected product to the cart
  addToCart(key) {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  }
  //deleting the product after selecting it.
  removeFromOrder(key) {
    console.log("inside remove fnction (key):", key);
    const order = { ...this.state.order };
    delete order[key];
    console.log("Deleted");
    this.setState({ order });
  }
  //showing and hiding cart on click action
  toggleCart() {
    const cart = document.getElementsByClassName("cart-right");
    const cart2 = document.getElementsByClassName("cart-container");
    let showing = this.state.isShowing;
    if (showing) {
      cart2[0].classList.add("cart-right");
      cart[0].classList.remove("cart-container");
      showing = false;
      this.setState({ isShowing: showing });
    } else {
      cart[0].classList.add("cart-container");
      cart2[0].classList.remove("cart-right");
      showing = true;
      this.setState({ isShowing: showing });
    }
  }

  render() {
    return (
      <>
        {this.state.isLoading ? (
          "Loading Data..."
        ) : (
          <DataLoaded
            state={this.state}
            filterSizes={this.filterSizes}
            addToCart={this.addToCart}
            removeFromOrder={this.removeFromOrder}
            toggleCart={this.toggleCart}
          />
        )}
      </>
    );
  }
}

export default App;
