const Shimmer = () => {
  let arr = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0,
  ];
  return (
    <div className="shimmer-container">
      <div className="shimmer-ele-container">
        <div>
          <button className="shimmer-button"></button>
        </div>
        <div className="shimmer-card-container">
          {arr.map((val, index) => (
            <div key = {index} className="shimmer-card"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shimmer;
