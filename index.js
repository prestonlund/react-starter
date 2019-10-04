import React from "react";
import ReactDOM from "react-dom";

// const element = React.createElement("div", null, "React element!");
const element = <div>React element with JSX!</div>

ReactDOM.render(element, document.getElementById("root"));


// ******* Promise example. How FETCH works under the hood ********

// new Promise((resolve, reject) => {
//     return reject(new Error("No bears"));

//     setTimeout(() => {
//         resolve("Bears, Beets, Battlestar Galactica");
//     }, 2000);
// })
// .then(quote => {
//     console.log(quote);
// })
// .catch(error => console.log("error", error));