import React from "react";
import { Link } from "react-router-dom";

function Headphones() {
  return (
    <section>
      <img
        src="https://images.pexels.com/photos/3587478/pexels-photo-3587478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="Black Big Headphones with a Pro Mic"
      />
      <h2>Pro Headphones + Mic</h2>
      <Link to="/watch">Next</Link>
    </section>
  );
}

export default Headphones;
