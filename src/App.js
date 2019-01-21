import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/Transition";

class App extends Component {
  state = {
    modalIsOpen: false,
    divIsOpen: false
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };

  toggleDiv = () => {
    this.setState(prevState => ({ divIsOpen: !prevState.divIsOpen }));
  };

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        {this.state.modalIsOpen ? (
          <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        ) : (
          ""
        )}
        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : (
          ""
        )}
        <button className="Button" onClick={this.toggleDiv}>
          toggle
        </button>
        <br />
        <Transition 
         in={this.state.divIsOpen}
         timeout={1000}
         mountOnEnter
         unmountOnExit>
          {state => (
            <div
              style={{
                background: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === 'exiting' ? '0' : '1',
              }}
            />
          )}
        </Transition>

        <button onClick={this.showModal} className="Button">
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
