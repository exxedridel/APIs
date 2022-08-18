import React from "react";
import "../styles/global.scss";

const App = () => {
  const [activity, setActivity] = React.useState(
    "Press button to find something to do"
  );

  function getActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.activity);
        document.getElementById("title").textContent = "😂 Happy Bot 🥳";
        document.getElementById("flex-container").classList.add("fun")
        document.getElementById("get-activity").classList.add("fun-button")
      });
  }

  return (
    <main>
      <div className="flex-container" id="flex-container">
        <h1 id="title">🥱 Bored Bot 😪</h1>
        <h2 id="activity">{activity}</h2>
        <button onClick={getActivity} id="get-activity"></button>
      </div>
    </main>
  );
};

export default App;

// VANILLA JS

// index.html
/* 
 <body>
    <h1>🤖 BoredBot 🤖</h1>
    <h4 id="activity">Find something to do</h4>
    <button id="get-activity"></button>
    <script src="index.js"></script>
  </body>
 */

// index.js
/* 
  document.getElementById("get-activity").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then(response => response.json())
      .then(data => {
        document.getElementById("activity").textContent = data.activity
        document.getElementById("title").textContent = "🦾 HappyBot🦿"
        document.body.classList.add("fun")
      })
    })
*/
