import React from "react";
import Center from "react-center";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Button from "@mui/material/Button";
import axios from "axios";

export default function ConfirmationAlert(props) {
  async function deleteFiles() {
    props.setLoading(true);
    const apiCallIs =
      "https://vsainivas.pythonanywhere.com/delete/?apiKey=" +
      props.apiKey +
      "&userName=" +
      props.userName +
      "&repoName=" +
      props.repoName;
    const valueIs = await axios({
      method: "GET",
      url: apiCallIs,
    });
    await valueIs.data;
    const apiCall =
      "https://vsainivas.pythonanywhere.com/?apikey=" +
      props.apiKey +
      "&userName=" +
      props.userName +
      "&repoName=" +
      props.repoName +
      "&fileName=" +
      props.fileName +
      "&type=" +
      props.radioButton;
      const value = await axios({
        method: "GET",
        url: apiCall,
      });
    props.setapiCall(
      "https://github.com/" +
        props.userName +
        "/" +
        props.repoName +
        "/blob/main/" +
        props.fileName +
        "-InvertedIndex.txt"
    );
    const val = await value.data;
    props.setData(val.text);
    props.setSuccessCode(val.successCode);
    await props.setData(val.text);
    await props.setSuccessCode(val.successCode);
    await props.setCurrentSuccessCode(val.successCode);
    await props.setCurrentApiKey(props.apiKey1);
    await props.setCurrentLink(
      "https://github.com/" +
        props.userName +
        "/" +
        props.repoName +
        "/blob/main/" +
        props.fileName +
        "-InvertedIndex.txt"
    );
    props.setopenPopUp(true);
    props.setLoading(false);
  }

  async function submitFun() {
    props.setLoading(true);
    const apiCall =
      "https://vsainivas.pythonanywhere.com/?apikey=" +
      props.apiKey +
      "&userName=" +
      props.userName +
      "&repoName=" +
      props.repoName +
      "&fileName=" +
      props.fileName +
      "&type=" +
      props.radioButton;
      const value = await axios({
        method: "GET",
        url: apiCall,
      });
    props.setapiCall(
      "https://github.com/" +
        props.userName +
        "/" +
        props.repoName +
        "/blob/main/" +
        props.fileName +
        "-InvertedIndex.txt"
    );
    
    const val = await value.data;
    props.setData(val.text);
    props.setSuccessCode(val.successCode);
    await props.setData(val.text);
    await props.setSuccessCode(val.successCode);
    await props.setCurrentSuccessCode(val.successCode);
    await props.setCurrentApiKey(props.apiKey1);
    await props.setCurrentLink(
      "https://github.com/" +
        props.userName +
        "/" +
        props.repoName +
        "/blob/main/" +
        props.fileName +
        ".txt"
    );
    props.setopenPopUp(true);
    props.setLoading(false);
  }

  return (
    <Center>
      <div>
        <Dialog
          open={true}
          onClose={() => {
            props.setDialog(false);
          }}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle
            style={{ color: "black", fontWeight: "bold" }}
            id="alert-dialog-title"
          >
            {"We already found some inverted index files in your repository."}
          </DialogTitle>
          <DialogContent>
            <DialogContentText
              style={{ color: "#2699c7" }}
              id="alert-dialog-description"
            >
              It's our strong suggestion to delete the old inverted index files
              and generate a new one. Click yes to delete the old index files.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => {
                submitFun();
                props.setDialog(false);
              }}
              style={{ color: "#2699c7", fontWeight: "bold" }}
            >
              No
            </Button>
            <Button
              onClick={() => {
                deleteFiles();
                props.setDialog(false);
              }}
              style={{ color: "#2699c7", fontWeight: "bold" }}
              autoFocus
            >
              Yes
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </Center>
  );
}
