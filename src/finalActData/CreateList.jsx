import Destination from "../finalActComponents/Destination";
import data from "./data";

const CreateList = ({ area }) => {
  const list = data.filter((d) => d.area === area);
  return (
    <>
      <section className="list">
        {list.map((l) => (
          <Destination key={l.name} {...l} />
        ))}
      </section>
    </>
  );
};

export default CreateList;
