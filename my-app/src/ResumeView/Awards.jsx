import React from "react";

const Awards = () => {
  const awards = [
    "Most Innovative Employee of the year, LexraMax (2021)",
    "Project Leader, Dandilton (2020)",
    "Overall Best New Employee (2019)",
  ];
  return (
    <div>
      <div>
        <div
          style={{
            border: "0px solid black",
            backgroundColor: "#eefcff",
            alignItems: "center",
            padding: "5px",
          }}
        >
          <h5
            style={{
              paddingLeft: "10%",
            }}
          >
            AWARDS & ACHIEVEMENTS
          </h5>
        </div>

        <div
          style={{
            marginTop: "10px",
            paddingLeft: "10%",
            paddingRight: "10%",
            fontSize: "17px",
          }}
        >
          {awards.map((el) => {
            return <li>{el}</li>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Awards;
