import React from "react";
import image1 from "../images/profile.jpg";
import "../css/Developer.css";
import Center from "react-center";
import { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import Slide from "@mui/material/Slide";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import MoodIcon from "@mui/icons-material/Mood";
import ErrorAlert from "../Errorandsuccess/error.tsx";
import axios from "axios";
import ReactLoading from "react-loading";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import Countdown from "react-countdown";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

export default function Developer() {
  const [imageClick, setImageClick] = useState(false);
  const [linkClick, setLinkClick] = useState(false);
  const [loading, setLoading] = useState(false);
  const [update, setUpdate] = useState("");
  const [updateError, setUpdateError] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [success, setSuccess] = useState("");

  const renderer = ({ seconds, completed }) => {
    if (completed) {
      setRedirect(false);
      setUpdate("");
    } else {
      // Render a countdown
      return <span>{seconds}</span>;
    }
  };

  async function submitFun() {
    if (update === "") {
      setUpdateError(true);
      return;
    } else {
      setLoading(true);
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ "update": update })
    };
      await fetch('https://inverted-index-database.vercel.app/', requestOptions).then((response) => response.json())
      .then((responseData) => {
        setSuccess(responseData.status);
      });
      setLoading(false);
      setRedirect(true);
    }
  }

  return (
    <div>
      <div style={{position: "absolute"}}>
      {!loading && <Link to="/home">
        <ArrowBackIcon
          onClick={() => {}}
          style={{
            color: "#2699c7",
            marginLeft: "20px",
            postion: "absolute",
          }}
        />
      </Link>}
      </div>
      
      {loading !== true && redirect !== true && (
        <div>
          <Slide direction="down" in={true} mountOnEnter unmountOnExit>
            <div style={{ textAlign: "center" }}>
              <h3
                style={{
                  color: "#2699c7",
                  marginTop: "30px",
                  fontWeight: "bold",
                }}
              >
                Valiveti Swamy Naga Sai Nivas
              </h3>
            </div>
          </Slide>

          <Center>
            <Slide direction="down" in={true} mountOnEnter unmountOnExit>
              <div>
                <div
                  onMouseEnter={() => setImageClick(true)}
                  onMouseLeave={() => setImageClick(false)}
                  style={{ marginTop: "15px" }}
                >
                  <img
                    src={image1}
                    style={{
                      height: 200,
                      width: 200,
                      borderRadius: 400 / 2,
                      border: imageClick === true ? "solid 5px #2699c7" : "",
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
                  color: "#2699c7",
                  marginTop: "15px",
                  marginBottom: "20px",
                  textDecoration: linkClick === true ? "underline" : "",
                }}
              >
                <a
                  style={{ color: "#2699c7" }}
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
                  <p style={{ marginLeft: "18px", marginBottom: "20px" }}>
                    Have any idea? Suggest a feature.
                  </p>

                  <TextField
                    id="outlined-multiline-static"
                    label="Suggest your feature here"
                    multiline
                    rows={2}
                    value={update}
                    onChange={(e) => {
                      setUpdateError(false);
                      setUpdate(e.target.value);
                    }}
                    style={{ width: 300 }}
                    placeholder="Start typing"
                  />
                  {updateError && (
                    <div style={{ marginLeft: "50px" }}>
                      <ErrorAlert />
                    </div>
                  )}
                </div>
              </div>
            </Slide>
          </Center>

          <Center>
            <Slide direction="up" in={true} mountOnEnter unmountOnExit>
              <div style={{ display: "block", marginTop: "25px"}}>
                <Button
                  variant="contained"
                  size="medium"
                  onClick={submitFun}
                  style={{ color: "white", backgroundColor: "#2699c7" }}
                >
                  Suggest <MoodIcon style={{ color: "white" }} />
                </Button>
              </div>
            </Slide>
          </Center>
        </div>
      )}
      {loading && (
        <div
          style={{
            dispaly: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginLeft: "45%",
              marginTop: "250px",
            }}
          >
            <ReactLoading
              type="spin"
              width={"15%"}
              height={"15%"}
              color="#2699c7"
            />
          </div>
        </div>
      )}
      {redirect && (
        <div style={{ textAlign: "center" }}>
          {success === "Success" && (
            <div style={{ marginBottom: "30px" }}>
              <Center>
                <CheckIcon
                  style={{
                    fontSize: "250px",
                    color: "#4BB543",
                    marginTop: "150px",
                  }}
                />
              </Center>
              <h5 style={{ color: "#4BB543" }}>
                Thanks for the idea. We will try to add this feature in next
                release.
              </h5>
            </div>
          )}
          {success === "failure" && (
            <div style={{ marginBottom: "30px" }}>
              <Center>
                <CloseIcon
                  style={{
                    fontSize: "250px",
                    color: "#FA113D",
                    marginTop: "150px",
                  }}
                />
              </Center>
              <h5 style={{ color: "#FA113D" }}>
                Oops! There is an error. Please try again after some time.
              </h5>
            </div>
          )}
          <p>
            Redirecting in{" "}
            <Countdown date={Date.now() + 5000} renderer={renderer} /> seconds.
          </p>

          <p
            onClick={() => {
              setUpdate("");
              setRedirect(false);
            }}
            style={{
              marginTop: "20px",
              color: "#2699c7",
              fontWeight: "bold",
              textDecoration: "underline",
            }}
          >
            click here if you have not been redirected.
          </p>
        </div>
      )}

      {loading !== true && redirect !== true && (
        <Center>
          <Slide direction="up" in={true} mountOnEnter unmountOnExit>
            <div
              style={{
                padding: "15px",
                backgroundColor: "#2699c7",
                position: "absolute",
                bottom: 0,
                width: "100%",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <a
                  target="_blank"
                  href="https://www.instagram.com/__sai_nivas__/"
                >
                  <span style={{ marginRight: "25px" }}>
                    <InstagramIcon className="instaaccount" />
                  </span>
                </a>

                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/swamy-naga-sai-nivas-valiveti-7a7474201/"
                >
                  <span style={{ marginRight: "25px" }}>
                    <LinkedInIcon className="linkedinaccount" />
                  </span>
                </a>

                <a target="_blank" href="https://github.com/VSNSAINIVAS">
                  <GitHubIcon className="githubaccount" />
                </a>
              </div>
            </div>
          </Slide>
        </Center>
      )}
    </div>
  );
}
