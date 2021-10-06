import React from "react";

import { Cards } from "react-responsive-cards";

const App = () => {
  const details = [
    {
      title: "The Card Title",
      description: "This is a short description",
      image: "https://<image_here>.jpg",
      renderFooter: <div>{"Custom JSX"}</div>,
      handleOnClick: () => alert("Custom Event"),
    },
  ];

  return <Cards details={details} />;
};

export default App;
