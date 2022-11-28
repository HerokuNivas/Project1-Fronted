import React from "react";
import image1 from "../images/profile.jpg";
import "../css/Developer.css";
import Center from "react-center";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";

export default function Developer() {
  const [imageClick, setImageClick] = useState(false);
  const [linkClick, setLinkClick] = useState(false);

  return (
    <div>
      <Center>
        <div>
          <h3
            style={{
              color: "#16cdfa",
              marginTop: "30px",
              fontWeight: "bold",
            }}
          >
            Valiveti Swamy Naga Sai Nivas
          </h3>
        </div>
      </Center>
      <Center>
        <Slide direction="down" in={true} mountOnEnter unmountOnExit>
          <div>
            <div
              onMouseEnter={() => setImageClick(true)}
              onMouseLeave={() => setImageClick(false)}
              style={{ marginTop: "30px" }}
            >
              <img
                src={image1}
                style={{
                  height: 200,
                  width: 200,
                  borderRadius: 400 / 2,
                  border: imageClick === true ? "solid 5px #16cdfa" : "",
                }}
              />
            </div>
          </div>
        </Slide>
      </Center>
      <Center>
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <div
            onMouseEnter={() => setLinkClick(true)}
            onMouseLeave={() => setLinkClick(false)}
            style={{
              color: "#16cdfa",
              marginTop: "30px",
              marginBottom: "20px",
              textDecoration: linkClick === true ? "underline" : "",
            }}
          >
            <a
              style={{ color: "#16cdfa" }}
              href="mailto:vsnsainivasand2003@gmail.com"
            >
              <h5>
                <EmailIcon /> vsnsainivasand2003@gmail.com
              </h5>
            </a>
          </div>
        </Slide>
      </Center>
      <Center>
        <Slide direction="right" in={true} mountOnEnter unmountOnExit>
          <div>
            <div>
              <p style={{ marginLeft: "18px" }}>
                Have any idea? Suggest a feature.
              </p>

              <TextField
                id="outlined-multiline-static"
                label="Suggest your feature here"
                multiline
                rows={2}
                style={{ width: 300 }}
                placeholder="Start typing"
              />
            </div>
          </div>
        </Slide>
      </Center>
    </div>
  );
}
