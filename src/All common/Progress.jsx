import React from "react";

const Progress = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">My skills</h1>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <p style={{ color: "#ff1818" }}>HTML/CSS</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
              >
                <div
                  style={{
                    width: "95%",
                    backgroundColor: "#ff1818",
                    color: "white",
                  }}
                ></div>
              </div>
              <p style={{ color: "yellow" }}>Javascript</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
              >
                <div
                  style={{
                    width: "80%",
                    backgroundColor: "yellow",
                    color: "white",
                  }}
                ></div>
              </div>
              <p style={{ color: "#0086ff" }}>React</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
              >
                <div
                  style={{
                    width: "80%",
                    backgroundColor: "#0086ff",
                    color: "white",
                  }}
                ></div>
              </div>
              <p style={{ color: "#ff00a9" }}>SCSS</p>
              <div
                className="progress"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                role="progressbar"
                aria-label="Success example"
              >
                <div
                  style={{
                    width: "95%",
                    backgroundColor: "#ff00a9",
                    color: "white",
                  }}
                ></div>
              </div>
              <p style={{ color: "#fcc000" }}>Next.js</p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
              >
                <div
                  style={{
                    width: "75%",
                    backgroundColor: "#fcc000",
                    color: "white",
                  }}
                ></div>
              </div>
              <p style={{ color: "#bc2ef1" }}>
                Bootstrap/Material UI/Tailwind Css
              </p>
              <div
                className="progress"
                role="progressbar"
                aria-label="Success example"
              >
                <div
                  style={{
                    width: "90%",
                    backgroundColor: "#bc2ef1",
                    color: "white",
                  }}
                ></div>
              </div>
            </div>

            <div className="col-6">
              <div className="image"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Progress;
