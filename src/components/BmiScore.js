function BmiScore({ bmiNo, bmiName }) {
  return (
    <div>
      <div className="text-center shadow rounded p-4">
        <div>Your BMI Score</div>
        <div className="row justify-content-sm-center">
          <div className="p-3 my-3 alert fs-2 alert-primary col-sm-6 ">{bmiNo}</div>
        </div>
        <div className="fs-2 fw-bold text-dark">{bmiName}</div>
      </div>
    </div>
  );
}

export default BmiScore;
