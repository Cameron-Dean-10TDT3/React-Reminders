import React, { Component } from "react";
import { render } from "react-dom";
import "../../style.css";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import firebase from "../firebase.js";
import Add from "../Add";

const TITLE = "Reminders List";

class List extends Component {
  constructor() {
    super();
    this.state = {
      currentItem: "",
      username: "",
      items: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref("items");
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    };
    itemsRef.push(item);
    this.setState({
      currentItem: "",
      username: ""
    });
  }
  componentDidMount() {
    const itemsRef = firebase.database().ref("items");
    itemsRef.on("value", snapshot => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        });
      }
      this.setState({
        items: newState
      });
    });
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }
  render() {
    return (
      <div className="listScreen">
        <Helmet>
          <title>{TITLE}</title>
        </Helmet>
        <h3 className="instruction">
          What would you like me to remind you about?
        </h3>
        <div className="btnPosition">
          <NavLink to="/Add">
            <button className="addButton">
              Tap here to add a new reminder
            </button>
          </NavLink>
        </div>
        <div className="container">
          <section className="display-item">
            <div className="wrapper">
              <ul>
                {/* Display reminders which have been inputed on the add page */}
                {this.state.items.map(item => {
                  return (
                    <li key={item.id}>
                      <h3>{item.title}</h3>
                      <p>
                        Reminder Date: {item.user}
                        <button
                          className="btn"
                          onClick={() => this.removeItem(item.id)}
                        >
                          Complete
                        </button>
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default List;
