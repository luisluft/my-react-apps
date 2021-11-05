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
      description:
        "Simple react project used to create a slider user interface.",
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
    {
      title: "react-accordion",
      description:
        "Simple react app used to learn how to create multiple UI elements containing show more and show less text toggle button given a JSON object.",
      image: "https://i.imgur.com/1Q94K3J.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-accordion", "_blank")
          .focus(),
    },
    {
      title: "react-reviews",
      description:
        "Simple react app used to learn how to create multiple UI elements from a given JSON with previous and next buttons to navigate between each data.",
      image: "https://i.imgur.com/a5J9YPX.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-reviews", "_blank")
          .focus(),
    },
    {
      title: "reactTours",
      description:
        "Create multiple UI elements from a given JSON with show more and show less toggle and ability to remove them one by one.",
      image: "https://i.imgur.com/ncDhMiq.png",
      handleOnClick: () =>
        window.open("https://github.com/luisluft/reactTours", "_blank").focus(),
    },
    {
      title: "reactBirthdayReminder",
      description:
        "Create multiple UI elements from a given JSON and remove them all at once.",
      image: "https://i.imgur.com/KSp6TTX.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/reactBirthdayReminder", "_blank")
          .focus(),
    },
    {
      title: "react-markdown",
      description:
        "React app that works as a markdown editor using an external API.",
      image: "https://i.imgur.com/uOyEM01.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-markdown", "_blank")
          .focus(),
    },
    {
      title: "react-random-user",
      description:
        "React app that uses a random user API to display user details dynamically on hover.",
      image: "https://i.imgur.com/aoLSB1p.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-random-user", "_blank")
          .focus(),
    },
    {
      title: "react-pagination",
      description:
        "React app that uses API fetching and client side pagination.",
      image: "https://i.imgur.com/QWjwfun.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-pagination", "_blank")
          .focus(),
    },
    {
      title: "react-stock-photos",
      description:
        "React app used to fetch data from API and display it with infinite scrolling features.",
      image: "https://i.imgur.com/6kAr4CH.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-stock-photos", "_blank")
          .focus(),
    },
    {
      title: "react-dark-mode",
      description:
        "React app used to toggle light and dark mode and preserve the user choice through local storage.",
      image: "https://i.imgur.com/JUdQsSZ.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-dark-mode", "_blank")
          .focus(),
    },
    {
      title: "react-movie-database",
      description:
        "React app that fetches from a public API to display, and search movies with their important information.",
      image: "https://i.imgur.com/RVe7xuD.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-movie-database", "_blank")
          .focus(),
    },
    {
      title: "react-quiz",
      description:
        "React app that displays paginated results of a search query with links from a public API.",
      image: "https://i.imgur.com/MpWjpVp.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-hacker-news", "_blank")
          .focus(),
    },
    {
      title: "react-quiz",
      description:
        "React app that displays quiz from a public API and evaluates the amount of correct answers from the user.",
      image: "https://i.imgur.com/UMJPtiM.png",
      handleOnClick: () =>
        window.open("https://github.com/luisluft/react-quiz", "_blank").focus(),
    },
    {
      title: "react-user-list",
      description:
        "React app that stores a user list and displays it. Also validates data with an error modal.",
      image: "https://i.imgur.com/57GyvUQ.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-user-list", "_blank")
          .focus(),
    },
    {
      title: "react-authentication",
      description:
        "React app that implements a simple authentication using localstorage and react hooks.",
      image: "https://i.imgur.com/f7HAcNj.png",
      handleOnClick: () =>
        window
          .open("https://github.com/luisluft/react-authentication", "_blank")
          .focus(),
    },
  ];

  return <Cards details={details} />;
};

export default App;
