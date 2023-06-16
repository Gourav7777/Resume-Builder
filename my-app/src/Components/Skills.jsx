import React from "react";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Skills = () => {
  const { skills, setSkills, currentskill, setCurrentSkill } =
    useContext(AuthContext);

  const addSkillsHere = () => {
    const skillobj = {
      currentskill,
      id: Date.now(),
    };

    setSkills([...skills, skillobj]);
    setCurrentSkill("");
  };

  const removeskill = (id) => {
    let x = skills.filter((el) => {
      return el.id !== id;
    });
    setSkills(x);
  };
  return (
    <div>
      <div
        style={{
          display: "flex",
          border: "0px solid gray",
          justifyContent: "space-between",
          padding: "15px",
          marginLeft: "70px",
        }}
      >
        <div>
          <label> Technical Skills </label> <br />
          <input
            type="text"
            placeholder="Add Name"
            value={currentskill}
            onChange={(e) => setCurrentSkill(e.target.value)}
          />
        </div>

        <div
          style={{
            alignItems: "center",
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            border: "0px solid black",
            fontSize: "17px",
            width: "50%",
            gap: "5px",
            marginTop: "10px",
          }}
        >
          {skills &&
            skills.map((el) => {
              return (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    margin: "0px",

                    backgroundColor: "#2195dc",
                    color: "white",
                    border: "0px solid black",
                    borderRadius: "15px",
                    height: "30px",
                    paddingTop: "5px",
                  }}
                >
                  <p
                    style={{
                      marginTop: "4px",
                    }}
                  >
                    {el.currentskill}
                  </p>
                  <p
                    onClick={() => {
                      removeskill(el.id);
                    }}
                    style={{
                      fontSize: "32px",
                      cursor: "pointer",
                    }}
                  >
                    &times;
                  </p>
                </div>
              );
            })}
        </div>
      </div>

      <div
        style={{
          gap: "10px",
          // display: "flex",
          marginTop: "10px",
          // justifyContent: "space-between",
        }}
      >
        <button
          style={{
            cursor: "pointer",
          }}
          onClick={addSkillsHere}
        >
          Add Skill
        </button>
      </div>
    </div>
  );
};

export default Skills;
