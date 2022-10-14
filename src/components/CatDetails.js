const CatDetails = (props) => {
  const { catDetails } = props;
  const { bio, pic } = catDetails;
  return (
    <div>
      <div className="info">
        <h1>Поздравляем!</h1>
        <h2>Вы приобрели:</h2>
        <br />
        <img src={`${props.url}${pic}`} />
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default CatDetails;
