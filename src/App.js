import React from "react";

import { Cards } from "react-responsive-cards";

const App = () => {
  const details = [
    {
      title: "react-cocktails",
      description:
        "Simple react app used to learn how to create a search UI for a cocktails API",
      image: "https://i.imgur.com/ofZfXM3.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-cocktails", "_blank")
          .focus(),
    },
    {
      title: "react-cart",
      description:
        "Simple react app used to learn how to create a shopping cart.",
      image: "https://i.imgur.com/n1eah0J.png",
      handleOnClick: () =>
        window.open("https://github.com/luisluft/react-cart", "_blank").focus(),
    },
  ];

  return <Cards details={details} />;
};

export default App;
