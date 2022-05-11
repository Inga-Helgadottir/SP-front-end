import React from "react";
import { useState } from "react";
import "../styles/AlcoholUnits.css";

const AlcoholUnits = () => {
  const [shots, setShots] = useState(0);
  const [kilograms, setKilograms] = useState(0);
  const [startDate, setStartDate] = useState(0);
  const [gender, setGender] = useState("");
  const [bloodAlcoholLevel, setBloodAlcoholLevel] = useState("");
  const [soberAgain, setSoberAgain] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (!gender) {
      alert("Please add your gender");
      return;
    }
    if (!shots) {
      alert("Please add the amount of shots you havde consumed");
      return;
    }
    if (!kilograms) {
      alert("Please add how many kilogramms you weigh");
      return;
    }

    if (gender === "Male") {
      let BAL = 0.00176 * kilograms * (shots - 0.01 * kilograms * startDate);
      setBloodAlcoholLevel(BAL.toFixed(2));
      let checkSober =
        (shots - 0.01 * kilograms * startDate) * 0.01 * kilograms;
      setSoberAgain(checkSober.toFixed(2));
    } else {
      let FBAL = 0.00218 * kilograms * (shots - 0.01 * kilograms * startDate);
      setBloodAlcoholLevel(FBAL.toFixed(2));
      let checkSober =
        (shots - 0.01 * kilograms * startDate) * 0.01 * kilograms;
      setSoberAgain(checkSober.toFixed(2));
    }
  };

  return (
    <div>
      {!bloodAlcoholLevel && (
        <form onSubmit={onSubmit}>
          <h2>Calculate how many units of alcohol you have consumed</h2>
          <div className="form-control">
            <label>What is your gender</label>

            <div
              className="radioBtns"
              onChange={(e) => setGender(e.target.value)}
            >
              <input type="radio" value="Male" name="gender" /> Male,
              <input type="radio" value="Female" name="gender" /> Female,
              <input type="radio" value="Other" name="gender" /> Other
            </div>
          </div>

          <div className="form-control">
            <label>Input the amount of alcohol in shots</label>

            <input
              type="number"
              placeholder="Number of shots"
              value={shots}
              onChange={(e) => setShots(e.target.value)}
            ></input>
          </div>

          <div className="form-control">
            <label>How many kilograms do you weigh</label>

            <input
              type="number"
              placeholder="Kilograms"
              value={kilograms}
              onChange={(e) => setKilograms(e.target.value)}
            ></input>
          </div>

          <div className="form-control">
            <label>How many hours since you started drinking</label>

            <input
              type="number"
              placeholder="hours since you started drinking"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            ></input>
          </div>

          <input type="submit" value="Calculate units" className="btn" />
        </form>
      )}

      {soberAgain < 0 && (
        <div>
          <h3>Your blood alcohol level is: {bloodAlcoholLevel}</h3>
          <h3>You are sober!</h3>
          <a href="/alcoholUnits">Click here to see the form again</a>
        </div>
      )}

      {soberAgain > 0 && (
        <div>
          <h3>Your blood alcohol level is: {bloodAlcoholLevel}</h3>
          <h3>
            If you stop drinking now you will be sober in {soberAgain} hours
          </h3>
          <h2 className="dontDrive">PLEASE DO NOT DRIVE!</h2>
          <a href="/alcoholUnits">Click here to see the form again</a>
        </div>
      )}
    </div>
  );
};

export default AlcoholUnits;
