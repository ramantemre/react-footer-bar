import React from "react";
import "./App.css";
import Footer from "./footer";

function App() {
  return (
    <Footer
      textArray={["Copyright@2023", "Thanks for visiting", "All the best!"]}
      backGroundStyle={{
        backgroundColor: "Highlight",
      }}
      textStyle={{
        fontSize: 24,
      }}
      enableAnimation
    />
  );
}

export default App;
