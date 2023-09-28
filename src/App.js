import React, { Component } from "react";
import SortingVisualisation from "./components/sortingvisualizer";

class App extends Component {
  render() {
    return (
        <main className="container">
          <SortingVisualisation></SortingVisualisation>
        </main>
    );
  }
}

export default App;
