import { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../finalActContext/Context";

const Destination = ({ name, slogan, image }) => {
  const path = `/images/${image}`;
  const { buy } = useContext(Context);
  const found = buy.find((place) => place.name === name);
  return (
    <>
      <div className="destination">
        <div className="name">{name}</div>
        <div className="slogan">{slogan}</div>
        <img src={path} alt="" />
        <div className="more-info">
          <Link to={`/destination/${name}`}>More info</Link>
          {found && <div className="circle"></div>}
        </div>
      </div>
    </>
  );
};

export default Destination;
