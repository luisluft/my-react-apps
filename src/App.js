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
    {
      title: "react-stripe-submenus",
      description:
        "Simple react app used to learn how to create multiple UI elements from a given JSON and remove them all at once.",
      image: "https://i.imgur.com/r2XrzPZ.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-stripe-submenus", "_blank")
          .focus(),
    },
    {
      title: "react-sidebar-and-modal",
      description:
        "Simple react app used to learn how to create a sidebar and a modal.",
      image: "https://i.imgur.com/vlY2iVf.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-sidebar-and-modal", "_blank")
          .focus(),
    },
    {
      title: "react-navbar",
      description:
        "Simple react app used to learn how to create a navigation bar",
      image: "https://i.imgur.com/hB25YWD.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-navbar", "_blank")
          .focus(),
    },
    {
      title: "react-grocery-list",
      description:
        "Simple react app used to learn how to create multiple UI elements from a given JSON and remove them all at once.",
      image: "https://i.imgur.com/WGsBYjU.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-grocery-list", "_blank")
          .focus(),
    },
    {
      title: "react-color-generator",
      description:
        "Simple react app used to display different weight of a specific color.",
      image: "https://i.imgur.com/npji3rw.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-color-generator", "_blank")
          .focus(),
    },
    {
      title: "react-lorem-ipsum",
      description:
        "Simple react app to generate funny meat related lorem ipsum text.",
      image: "https://i.imgur.com/QdrqiK0.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-lorem-ipsum", "_blank")
          .focus(),
    },
    {
      title: "react-slider",
      description: "Simple react project used to create a slider.",
      image: "https://i.imgur.com/mzxr8Vs.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-slider", "_blank")
          .focus(),
    },
    {
      title: "react-tabs",
      description:
        "React app that shows the previous work experience for each person.",
      image: "https://i.imgur.com/8C1SkyX.png",
      handleOnClick: () =>
        window.open("https://github.com/luisluft/react-tabs", "_blank").focus(),
    },
    {
      title: "react-menu",
      description:
        "React App that displays a restaurant menu that can be filtered.",
      image: "https://i.imgur.com/7krv8oy.png",
      handleOnClick: () =>
        window.open("https://github.com/luisluft/react-menu", "_blank").focus(),
    },
  ];

  return <Cards details={details} />;
};

export default App;
