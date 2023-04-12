import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Create from "./components/Createe";
import View from "./components/View";
import React from "react";
import Update from "./components/Updatee";

function App() {
  const padding = {
    padding: 10,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div>
          {/* <Link to="/">Home</Link> */}
          <Link style={padding} to="/create">
            Create
          </Link>
          <Link style={padding} to="/view">
            View
          </Link>
          {/* <Link style={padding} to="/update">View</Link> */}
        </div>
        <Routes>
          {/* <Route path="/" element={<App />} /> */}
          <Route exact path="/create" element={<Create />} />
          <Route exact path="/view" element={<View />} />
          {/* <Route exact path="/update/:id" element={<Update />} /> */}
          <Route exact path="/update/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
