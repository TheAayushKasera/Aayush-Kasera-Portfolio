import React, { useState, useEffect } from "react";
import Header from "./Header";
import CreateNotes from "./CreateNotes";
import NoteDisplay from "./NoteDisplay";
import Footer from "./footer";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import "./App.css"; // Import the CSS file

const AtrangiNotes = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [notearr, setNotearr] = useState([]);

  useEffect(() => {
    getData();
    document.title = "Atrangi Notes";
  }, []);

  const getData = async () => {
    console.log("process", process.env.REACT_APP_backend_port);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backend_port}api/notes-get`
      );

      if (response.ok) {
        console.log(response);
        const data = await response.json();
        setNotearr(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const postdata = async (e) => {
    e.preventDefault();
    if (title === "" || description === "") {
      setSnackbarMessage(`Enter Item to add`);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } else {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_backend_port}api/notes-post`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title: title, description: description }),
          }
        );

        if (response.ok) {
          setSnackbarMessage(`New Note added`);
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          getData();
        } else {
          setSnackbarMessage("Failed to add Note");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setTitle("");
    setDescription("");
  };

  const deleteData = async (id) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_backend_port}api/notes-delete`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ _id: id }),
        }
      );

      if (response.ok) {
        setSnackbarMessage(`Note deleted from list`);
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        await getData();
      } else {
        setSnackbarMessage("Some error occurred");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Header />
      <CreateNotes
        title={title}
        description={description}
        postdata={postdata}
        setTitle={setTitle}
        setDescription={setDescription}
      />
      <NoteDisplay notearr={notearr} deleteData={deleteData} />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={4000}
        onClose={() => setSnackbarOpen(false)}
      >
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={snackbarSeverity}
          onClose={() => setSnackbarOpen(false)}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <Footer />
    </>
  );
};

export default AtrangiNotes;
