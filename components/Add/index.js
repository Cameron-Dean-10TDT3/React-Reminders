import React, { Component } from "react";
import logo from "./logo.svg";
import "../../style.css";
import { NavLink } from "react-router-dom";
import Helmet from "react-helmet";
import firebase from "../firebase.js";

const TITLE = "Add a Reminder";

class Add extends Component {
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
      <div className="app">
        <header>
          <div className="wrapper">
            <h1>Add a Reminder</h1>
          </div>
        </header>
        <div className="container">
          <section className="add-item">
            <form onSubmit={this.handleSubmit}>
            {/* User reminder text input */}
              <input
                type="text"
                name="currentItem"
                placeholder="Reminder"
                onChange={this.handleChange}
                value={this.state.currentItem}
                required
              />
              {/* User reminder date input */}
              <input
                type="date"
                name="username"
                onChange={this.handleChange}
                value={this.state.username}
                />
              <button className="btn">Add Reminder</button>
            </form>
            <br/>
            <NavLink to="/List">
              <button className="btn">Return to List of Reminders</button>
            </NavLink>
          </section>
        </div>
      </div>
    );
  }
}
export default Add;
