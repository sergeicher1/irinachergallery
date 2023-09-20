import React from "react";
import HeaderText from "./components/HeaderText";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { render } from "@testing-library/react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      current_items: [],
      items: [
        {
          id: 1,
          title: 'picture1',
          img: "1.png",
          desc: "bla123",
          price: "99.99",
          category: "1"

        },
        {
          id: 2,
          title: 'picture2',
          img: "2.png",
          desc: "bla123",
          price: "134.99",
          category: "2"

        },
        {
          id: 3,
          title: 'picture3',
          img: "3.png",
          desc: "123bla123",
          price: "232.99",
          category: "3"
        }
        ,
        {
          id: 4,
          title: 'picture4',
          img: "4.png",
          desc: "123bla123",
          price: "243.99",
          category: "3"

        }
        ,
        {
          id: 5,
          title: 'picture5',
          img: "5.png",
          desc: "123bla123",
          price: "254.99",
          category: "3"
        },
        {
          id: 6,
          title: 'picture6',
          img: "6.png",
          desc: "123bla123",
          price: "232.99",
          category: "3"
        },
        {
          id: 7,
          title: 'picture7',
          img: "7.png",
          desc: "123bla123",
          price: "132.99",
          category: "2"
        },
        {
          id: 8,
          title: 'picture8',
          img: "8.png",
          desc: "123bla123",
          price: "192.99",
          category: "2"
        },
        {
          id: 9,
          title: 'picture9',
          img: "9.png",
          desc: "123bla123",
          price: "222.99",
          category: "3"
        },
        {
          id: 10,
          title: 'picture10',
          img: "10.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.current_items = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="container" >
        <HeaderText />
        <div className="wrapper">
          <Header orders={this.state.orders} onDelete={this.deleteOrder} />
          <Categories chooseCategory={this.chooseCategory} />
          <Items onShowItem={this.onShowItem} items={this.state.current_items} onAdd={this.addToOrder} />
          {this.state.showFullItem && <ShowFullItem item={this.state.fullItem} onAdd={this.addToOrder} onShowItem={this.onShowItem} />}
          <Footer />
        </div>
      </div>
    );
  }

  onShowItem(item) {
    this.setState({ fullItem: item })
    this.setState({ showFullItem: !this.state.showFullItem })
  }

  chooseCategory(category) {
    if (category === "all") {
      this.setState({ current_items: this.state.items })
      return
    }
    this.setState({
      current_items: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({ orders: this.state.orders.filter(el => el.id !== id) })
  }
  addToOrder(item) {
    let isInCart = false;
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInCart = true
    })
    if (!isInCart)
      this.setState({ orders: [...this.state.orders, item] })
  }
}
export default App;
