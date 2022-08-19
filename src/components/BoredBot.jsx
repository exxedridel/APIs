import React from "react";
import "../styles/BoredBot.scss";

const BoredBot = () => {
  const [activity, setActivity] = React.useState(
    "Press button to find something to do"
  );

  function getActivity() {
    fetch("https://apis.scrimba.com/bored/api/activity")
      .then((response) => response.json())
      .then((data) => {
        setActivity(data.activity);
        document.getElementById("bot-title").textContent = "😂 Happy Bot 🥳";
        document.getElementById("bot-container").classList.add("fun");
        document.getElementById("get-activity").classList.add("fun-button");
      });
  }

  return (
    <div id="bot-container" className="bot-container">
      <h1 id="bot-title">🥱 Bored Bot 😪</h1>
      <h2 id="bot-activity">{activity}</h2>
      <button onClick={getActivity} id="get-activity" className="get-activity"></button>
    </div>
  );
};

export default BoredBot;

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
