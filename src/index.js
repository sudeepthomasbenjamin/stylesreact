//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
import React from "react";
import ReactDom from "react-dom";

var greeting = "";
var date = new Date(2021, 3, 4, 23);
var hrs = date.getHours();
var clr = "";

if (hrs < 12) {
  greeting = "Good Morning";
  clr = "red";
} else if (hrs >= 12 && hrs <= 18) {
  greeting = "Good afternoon";
  clr = "green";
} else if (hrs > 18 && hrs <= 24) {
  greeting = "Good Night";
  clr = "blue";
}

ReactDom.render(
  <div>
    <h1 className="heading" style={{ color: clr }}>
      {greeting}
    </h1>
  </div>,
  document.getElementById("root")
);
