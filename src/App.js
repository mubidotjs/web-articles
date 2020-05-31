import React from "react";
import "./App.css";
import axios from "axios";
import { Header, Main, Footer } from "./Components";
import {
  OtherArticles,
  Books,
  AboutUs,
  ContactUs,
  Feedback,
} from "./Components/Pages";
import { Switch, Route } from "react-router-dom";
require("dotenv").config();

const api_popularArticles = process.env.REACT_APP_POPULAR;
const api_otherArticles = process.env.REACT_APP_OTHER;
const api_books = process.env.REACT_APP_BOOKS;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popularArt: [],
      otherArt: [],
      books: {},
    };
  }

  componentDidMount() {
    axios
      .all([
        axios.get(api_popularArticles),
        axios.get(api_otherArticles),
        axios.get(api_books),
      ])
      .then(
        axios.spread((popular, other, book) => {
          this.setState({
            popularArt: popular.data.results,
            otherArt: other.data.results,
            books: book.data.results,
          });
        })
      )
      .catch((err) => console.error(err));
  }

  render() {
    const { popularArt, otherArt, books } = this.state;
    return (
      <div className="App">
        <div className="header">
          <Header />
        </div>
        <div className="main-wrapper">
          <Switch>
            <Route
              exact
              path="/"
              render={(props) => (
                <Main {...props} popularArticles={popularArt} />
              )}
            />
            <Route
              exact
              path="/other-articles"
              render={(props) => (
                <OtherArticles {...props} otherArticles={otherArt} />
              )}
            />
            <Route
              exact
              path="/books-reviews"
              render={(props) => <Books {...props} bookReview={books} />}
            />
            <Route
              exact
              path="/about-us"
              render={(props) => <AboutUs {...props} />}
            />
            <Route
              exact
              path="/contact-us"
              render={(props) => <ContactUs {...props} />}
            />
            <Route
              exact
              path="/feedback"
              render={(props) => <Feedback {...props} />}
            />
            <Route />
            <Route />
          </Switch>
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
