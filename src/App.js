import React from "react";

import Bookings from "./Bookings";
import "./App.css";
import Footer from "./Footer";
import TouristInfoCards from "./TouristInfoCards";

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
      <Bookings />

      <TouristInfoCards />
      <Footer
        arrayOfProp={[
          "123 Fake Street, London, E1 4UD",
          "hello@fakehotel.com",
          "0123 456789"
        ]}
      />
    </div>
  );
};

export default App;
