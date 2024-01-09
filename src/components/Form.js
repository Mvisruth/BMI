import React, { useState } from "react";

function Form({getData}) {
  const [weight, setweight] = useState("");
  const [height, setheight] = useState("");
  const [alert, setalert] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    if (isNaN(weight) || isNaN(height)) {
      console.log("not a valied input ");
      setalert(true);
    } else {
      getData(weight,height)
      setalert(false);
      // console.log(weight);
      // console.log(height);
    }

  };
  // let alertmessage
  // if (alert) {
  //   alertmessage = (
  //     <div className="alert alert-danger w-50 mt-3 ms-1" role="alert">
  //       please enter vaild input
  //     </div>
  //   );
  // } else {
  //   alertmessage = "";
  // }
 
  return (
      <div className="col-sm-6 shadow rounded px-5 p-2">
        <h1 className="text-center pt-3  h2">BMI calculator</h1>
        <form onSubmit={onSubmit} className="mt-3">
          <div className="row">
            <div className="col col-sm-6">
              <div className="d-flex ms-1">
                <label className="form-label">weight(kg):</label>
                <input
                  type="text"
                  value={weight}
                  onChange={(e) => setweight(e.target.value)}
                  className="form-control w-100"
                  required
                ></input>
              </div>
            </div>
          </div>
          <div className="col col-sm-6 mt-3">
            <div className="d-flex">
              <label className="form-label">height(m):</label>
              <input
                type="text"
                
                onChange={(e) => setheight(e.target.value)}
                className="form-control w-100"
                required
              ></input>
            </div>
          </div>
          <div className="d-flex justify-content-center col-6 ">
            <input
              type="submit"
              className="btn btn-primary mt-2"
              value="submit"
            ></input>
          </div>
        </form>
        {alert &&<div className="alert alert-danger" role="alert">plz enter vaild data</div>}
      </div>
  );
}

export default Form;
