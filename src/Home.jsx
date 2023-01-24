import React from "react";
import Banner from "./components/Banner";
import Help from "./components/Help";
import Templates from "./components/Templates/Templates";

function Home(props) {
  return (
    <div>
      <Banner />
      <Templates />
      <Help />
    </div>
  );
}

export default Home;
