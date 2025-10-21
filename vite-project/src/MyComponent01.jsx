import React, { Component } from "react";
export default class MyComponent01 extends Component {
  state = { first: false, second: true };
  render() {
    const { first, second } = this.state;
    return (
      <main>
        <section>
          <button disabled={first}>Primeiro botão</button>
        </section>
        <section>
          <button disabled={second}>Segundo botão</button>
        </section>
      </main>
    );
  }
}