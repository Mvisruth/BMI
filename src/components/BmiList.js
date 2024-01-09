import React from "react";
import Table from "react-bootstrap/Table";

function BmiList({range ,bmi}) {
  console.log(bmi);
  return (
    <div className=" m-auto">
      <Table striped bordered hover className="table-dark">
        <thead>
          <tr>
            <th>Type</th>
            <th>BMI</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          <tr className={bmi<18.5?"border border-danger border-3":"border-0"}>
            <td>under weight</td>
            <td>18.5</td>
            <td>{range.underWeight.low}kg</td>
          </tr>
          <tr className={18.5<bmi && bmi<24.9?"border border-danger border-3":null}>
            <td>normal</td>
            <td>18.5-24.9</td>
            <td>{range.normal.low + "kg -"+range.normal.high +" kg"}</td>
          </tr>
          <tr className={24.9<bmi && bmi<29.9?"border border-danger border-3":null}>
            <td>over weight</td>
            <td>25-29.9</td>
            <td>{range.overWeight.low + "kg -" + range.overWeight.high +" kg"}</td>
          </tr>
          <tr className={30<bmi && bmi<34.9?"border border-danger border-3":null}>
            <td>obesity class 1</td>
            <td>30-34.9</td>
            <td>{range.obesityOne.low + "kg -"+range.obesityOne.high +" kg"}</td>
          </tr>
          <tr className={35<bmi && bmi<39.9?"border border-danger border-3":null}>
            <td>obesity class 2</td>
            <td>35-39.9</td>
            <td>{range.obesityTwo.low + "kg -"+range.obesityTwo.high +" kg"}</td>
          </tr>
          <tr className={40<bmi ?"border border-danger border-3":null}>
            <td>obesity class 3</td>
            <td>40</td>
            <td>{range.obesityThree.high}kg</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default BmiList;
