// IMPORT PACKAGE REFERENCES
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import JSONPretty from "react-json-pretty";

// IMPORT PROJECT REFERENCES
import "./Container.scss";
import Rocket from "../../assets/Chromatic.svg";
import { fetchCapsules } from "../../redux/accountsAction";

const Container = () => {
  let { capsules } = useSelector((state) => ({
    capsules: state.user,
  }));

  const dispatch = useDispatch();

  const capsulesCall = () => {
    dispatch(fetchCapsules("https://api.spacexdata.com/v3/capsules"));
  };

  return (
    <>
      <div className="container">
        {capsules.users.length > 0 ? (
          <div className="row desktop-height">
            <JSONPretty id="json-pretty" data={capsules.users}></JSONPretty>
          </div>
        ) : (
          <div className="row desktop-height"></div>
        )}
        <div className="row">
          <div className="right-spacing"><button onClick={capsulesCall}>Capsules</button></div>
          <div className="right-spacing"><img src={Rocket} alt="Rocket" /></div>
          <div className="right-spacing"><input  type="text" name="lpad"></input></div>
          <div className="right-spacing"><button>Landing Pad</button></div>
        </div>
      </div>
    </>
  );
};
export default Container;
