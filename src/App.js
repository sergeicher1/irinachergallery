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
        } ,
        {
          id: 11,
          title: 'picture11',
          img: "11.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 12,
          title: 'picture12',
          img: "12.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 13,
          title: 'picture13',
          img: "13.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 14,
          title: 'picture14',
          img: "14.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 15,
          title: 'picture15',
          img: "15.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 16,
          title: 'picture16',
          img: "16.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 17,
          title: 'picture17',
          img: "17.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 18,
          title: 'picture18',
          img: "18.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 19,
          title: 'picture19',
          img: "19.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 20,
          title: 'picture20',
          img: "20.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 21,
          title: 'picture21',
          img: "21.png",
          desc: "123bla123",
          price: "92.99",
          category: "1"
        },
        {
          id: 22,
          title: 'picture22',
          img: "22.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 23,
          title: 'picture23',
          img: "23.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 24,
          title: 'picture24',
          img: "24.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 25,
          title: 'picture25',
          img: "25.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 26,
          title: 'picture26',
          img: "26.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 27,
          title: 'picture27',
          img: "27.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 28,
          title: 'picture28',
          img: "28.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 29,
          title: 'picture29',
          img: "29.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 30,
          title: 'picture30',
          img: "30.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 31,
          title: 'picture31',
          img: "31.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 32,
          title: 'picture32',
          img: "32.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 33,
          title: 'picture33',
          img: "33.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 34,
          title: 'picture34',
          img: "34.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 35,
          title: 'picture35',
          img: "35.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 36,
          title: 'picture36',
          img: "36.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 37,
          title: 'picture37',
          img: "37.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 38,
          title: 'picture38',
          img: "38.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 39,
          title: 'picture39',
          img: "39.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 40,
          title: 'picture40',
          img: "40.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 41,
          title: 'picture41',
          img: "41.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 42,
          title: 'picture42',
          img: "42.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 43,
          title: 'picture43',
          img: "43.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 44,
          title: 'picture44',
          img: "44.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 45,
          title: 'picture45',
          img: "45.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 46,
          title: 'picture46',
          img: "46.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 47,
          title: 'picture47',
          img: "47.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 48,
          title: 'picture48',
          img: "48.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 49,
          title: 'picture49',
          img: "49.png",
          desc: "123bla123",
          price: "32.99",
          category: "1"
        },
        {
          id: 50,
          title: 'picture50',
          img: "50.png",
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
