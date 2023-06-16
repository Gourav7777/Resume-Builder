import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

const Educat = () => {
  const { education } = useContext(AuthContext);

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
            EDUCATION
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
          {education.map((el) => {
            return (
              <div
                style={{
                  display: "flex",

                  justifyContent: "space-between",
                }}
              >
                <li style={{}}>
                  {el.degree} ({el.institute})
                </li>

                <p
                  style={{
                    marginTop: "0px",
                  }}
                >
                  {el.passedYear} Passed Out
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Educat;
