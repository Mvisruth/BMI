import { useState } from "react";
import "./App.css";
import BmiList from "./components/BmiList";
import BmiScore from "./components/BmiScore";
import Form from "./components/Form";

//bmi - to create state , setmbi state change function

function App() {
  const [bmi, setbmi] = useState("---");
  const [bmitype, setbmitype] = useState("Not Calculate");
  const [bmiRange, setBmiRang] = useState({
    underWeight: { low: "" },
    normal: { low: "", high: "" },
    overWeight: { low: "", high: "" },
    obesityOne: { low: "", high: "" },
    obesityTwo: { low: "", high: "" },
    obesityThree: { high: "" },
  });

  const OnFormSub = (w, h) => {
    let b = CalBmi(w, h); //function call callBmi(bmi calculation).//let b in store vaule
    setbmi(b);
    setbmitype(weighttype(b));

    //  let type =weighttype(bmi)
    //  setbmitype(type)

    console.log(w, h);

    const range = {
      underWeight: { low: calWeight(18.5, h) },
      normal: { low: calWeight(18.5, h), high: calWeight(24.9, h) },
      overWeight: { low: calWeight(25, h), high: calWeight(29.9, h) },
      obesityOne: { low: calWeight(30, h), high: calWeight(34.9, h) },
      obesityTwo: { low: calWeight(35, h), high: calWeight(39.9, h) },
      obesityThree: { high: calWeight(40, h) },
    };
    setBmiRang(range);
    console.log(range);
  };

  const CalBmi = (w, h) => {
    return (w / (h * h)).toFixed(2); //function defiton
  };

  const calWeight = (b, h) => {
    return (b * h * h).toFixed(2);
  };

  const weighttype = (bmi) => {
    if (bmi < 18.5) {
      return "Underweight";
    } else if (18.5 < bmi && bmi < 24.9) {
      return "Normal Weight";
    } else if (24.9 < bmi && bmi < 29.9) {
      return "OverWeight";
    } else if (29.9 < bmi && bmi < 34.9) {
      return "Obese Class I";
    } else if ((bmi > 34.9 && bmi < 39, 9)) {
      return "Obese Class II";
    } else if (bmi > 39.9) {
      return "Obese Class III";
    }
  };

  return (
    <>
      <div className="Full-Box">
        <div className=" app container  ">
          <div className="row justify-content-center mt-5 mx-2">
            <Form getData={OnFormSub} />
          </div>
          <div className="row justify-content-center mt-5">
            <div className="col-12 col-sm-6 mb-5">
              <BmiScore bmiNo={bmi} bmiName={bmitype} />
            </div>
            <div className="col-12 col-sm-6">
              <BmiList range={bmiRange} bmi={bmi}  />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
