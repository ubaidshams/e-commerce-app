import React from "react";
import Navbar from "./pages/navbar/Navbar";

import { BrowserRouter as Router } from "react-router-dom";
import CustomRoutes from "./routes/CustomRoutes";
import NetworkProvider from "./apis/ContextApi";

const App = () => {
  return (
    <NetworkProvider>
      <Router>
        <Navbar />
        <CustomRoutes />
      </Router>
    </NetworkProvider>
  );
};

export default App;
