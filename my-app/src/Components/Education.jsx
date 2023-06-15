import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Education = () => {
  const {
    education,
    setEducation,
    institute,
    setInstitute,
    degree,
    setDegree,
    passedYear,
    setPassedYear,
    active,
    setactive,
  } = useContext(AuthContext);

  const form = {
    institute,
    degree,
    passedYear,
  };
  const handleEdu = () => {
    setEducation([...education, form]);
    setactive(true);

    setInstitute("");
    setDegree("");
    setPassedYear("");
  };

  const handlemore = () => {
    setactive(false);
  };
  return (
    <div>
      <div
        style={{
          border: "0px solid gray",
          display: active ? "none" : "block",
        }}
      >
        <div
          style={{
            display: "flex",

            justifyContent: "space-evenly",
            padding: "10px",
          }}
        >
          <div>
            <label> Institute </label> <br />
            <input
              type="text"
              placeholder="Add Institute"
              value={institute}
              onChange={(e) => setInstitute(e.target.value)}
            />
          </div>

          <div>
            <label> Passing Year </label> <br />
            <input
              type="email"
              placeholder="Add Passing Year"
              value={passedYear}
              onChange={(e) => setPassedYear(e.target.value)}
            />
          </div>

          <div>
            <label> Degree </label> <br />
            <input
              type="textarea"
              placeholder="Add Degree"
              value={degree}
              onChange={(e) => setDegree(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div
        style={{
          gap: "10px",
          display: "flex",
          marginTop: "10px",
          justifyContent: "space-between",
        }}
      >
        <button
          onClick={handlemore}
          style={{
            cursor: "pointer",
          }}
        >
          Add More Education field
        </button>
        <button
          style={{
            cursor: "pointer",
          }}
          onClick={handleEdu}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default Education;
