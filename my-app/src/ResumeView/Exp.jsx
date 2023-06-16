import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Exp = () => {
  const { experience } = useContext(AuthContext);
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
            WORK EXPERIENCE
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
          {experience.map((el) => {
            return (
              <div
                style={{
                  display: "flex",

                  justifyContent: "space-between",
                }}
              >
                <li style={{}}>
                  {el.company} ({el.designation})
                </li>

                <p
                  style={{
                    marginTop: "0px",
                  }}
                >
                  {" "}
                  Worked {el.workedyears} Years{" "}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Exp;
