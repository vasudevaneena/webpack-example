// IMPORT PACKAGE REFERENCES
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import JSONPretty from "react-json-pretty";

// IMPORT PROJECT REFERENCES
import "./Container.scss";
// import Rocket from "../../assets/Chromatic.svg";
import Rocket from "../../assets/rocket.jpg";
import { fetchCapsules,fetchLandingPad } from "../../redux/accountsAction";

const Container = () => {
  let { capsules } = useSelector((state) => ({
    capsules: state.user,
  }));
  const [errorMessage, setErrorMessage] = useState();
  const [valid, setValid] = useState(true);
  const [input, setInput] = useState();
  const dispatch = useDispatch();

  const capsulesCall = () => {
    dispatch(fetchCapsules("https://api.spacexdata.com/v3/capsules"));
  };

  const validateInput = (e) => {
    const value = event.target.value;
    const validInput = /[#$%&]/.test(value);
    if (validInput) {
      setErrorMessage("# $ % & are not valid");
      setValid(false);
    } else {
      setValid(true);
      setInput(value);
    }
  };

  const filterLandingPad = () => {
    dispatch(fetchLandingPad("https://api.spacexdata.com/v3/landpads/"+input));
  };
  return (
    <>
      <div className="container">
        {capsules.users ? (
          <div className="row desktop-height">
            <JSONPretty id="json-pretty" data={capsules.users}></JSONPretty>
          </div>
        ) : (
          <div className="row desktop-height"></div>
        )}
        <div className="control-console">
          <div className="row">
            <div className="col-md-4">
              <button onClick={capsulesCall}>Capsules</button>
            </div>
            <div className="col-md-3">
              <img src={Rocket} alt="Rocket" />
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-6">
                  <div>
                    <input
                      type="text"
                      name="lpad"
                      maxLength="15"
                      onChange={validateInput}
                    ></input>
                  </div>
                  {!valid ? (
                    <div className="error">
                      <span>{errorMessage}</span>
                    </div>
                  ) : ''}
                </div>
                <div className="col-md-6">
                  {valid?<button onClick={filterLandingPad}>Landing Pad</button>:''}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Container;
