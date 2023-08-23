const SoccialMedia = ({ link, image }) => {
  return (
    <div>
      <a href={link}>
        <img src={image} alt="" />
      </a>
    </div>
  );
};

export default SoccialMedia;
