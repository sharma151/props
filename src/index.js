import React from "react";
import ReactDOM from "react-dom";
function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <img src={props.img} alt={props.alt} />
      <p>{props.number}</p>
      <p>{props.email}</p>
    </div>
  );
}

ReactDOM.render(
  <body>
    <h1>My Contacts</h1>
    <Card
      name="Beyounce"
      img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      alt="avatar_img"
      number="+123 456 789"
      email="b@beyonce.com"
    />
    <Card
      name="Jack Bauer"
      img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      alt="avatar_img"
      number="+987 654 321"
      email="jack@nowhere.com"
    />
  </body>,
  document.getElementById("root")
);
