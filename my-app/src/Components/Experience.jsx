import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Experience = () => {
  const {
    activeExperience,
    setActiveExperience,
    experience,
    setExperience,
    designation,
    setDesignation,
    company,
    setCompany,
    workedyears,
    setWorkedyears,
  } = useContext(AuthContext);

  const form = {
    designation,
    company,
    workedyears,
  };
  const handleExp = () => {
    setExperience([...experience, form]);
    setActiveExperience(true);

    setCompany("");
    setWorkedyears("");
    setDesignation("");
  };

  const handlemore = () => {
    setActiveExperience(false);
  };

  return (
    <div>
      <div
        style={{
          border: "0px solid gray",
          display: activeExperience ? "none" : "block",
        }}
      >
        <div
          style={{
            display: "flex",
            border: "0px solid gray",
            justifyContent: "space-evenly",
            padding: "10px",
          }}
        >
          <div>
            <label> Company </label> <br />
            <input
              type="text"
              placeholder="Add Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>

          <div>
            <label> Total Years </label> <br />
            <input
              type="email"
              placeholder="Add No. of Years"
              value={workedyears}
              onChange={(e) => setWorkedyears(e.target.value)}
            />
          </div>

          <div>
            <label> Designation </label> <br />
            <input
              type="textarea"
              placeholder="Add Designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
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
          Add More Experience
        </button>
        <button
          onClick={handleExp}
          style={{
            cursor: "pointer",
          }}
        >
          Submit
        </button>
      </div>
    </div>
  )
}

export default Experience;
