import React from "react";
import "../styles/global.scss";

const App = () => {

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      document.getElementById("image-container").innerHTML = `
            <img class="dog-img" src="${data.message}" />
        `;
    });

  return (
    <div>
      <h1 className="title">Dog API Fetch and DOM Practice</h1>
      <div id="image-container"></div>
    </div>
  );
};

export default App;
