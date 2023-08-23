const Experience = ({ company, role, description, year }) => {
  return (
    <div className="my-5">
      <h3>{company}</h3>
      <h4>{role}</h4>
      <p>{description}</p>
      <p className="italic">{year}</p>
    </div>
  );
};

export default Experience;
