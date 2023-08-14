import React, { useState, useEffect } from "react";
import "./index.css";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Todo = () => {
  const [item, setItem] = useState("");
  const [itemlist, setItemlist] = useState([]);

  useEffect(() => {
    document.title = "Atrangi To Do List";
    document.icon = <ReceiptLongIcon />;
    getData();
  }, []);

  const inputEvent = (e) => {
    setItem(e.target.value);
  };

  const deleteData = async (e) => {
    try {
      const response = await fetch("/api/todo-delete", {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ _id: e.target.value }),
      });

      if (response.ok) {
        const data = await response.text();
        setSnackbarMessage(`${data} deleted from list`);
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

  const getData = async () => {
    try {
      const response = await fetch("/api/todo-get");
      if (response.ok) {
        console.log(response.text());
        const data = await response.json();
        setItemlist(data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const postdata = async (e) => {
    e.preventDefault();
    if (item === "" || item === undefined) {
      setSnackbarMessage(`Enter Item to add`);
      setSnackbarSeverity("error");
      setSnackbarOpen(true);
    } else {
      try {
        const response = await fetch("/api/todo-post", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item: item }),
        });

        if (response.ok) {
          setSnackbarMessage(`${item} added in List`);
          setSnackbarSeverity("success");
          setSnackbarOpen(true);
          getData();
        } else {
          setSnackbarMessage("Failed to add item in List");
          setSnackbarSeverity("error");
          setSnackbarOpen(true);
        }
      } catch (error) {
        console.log(error);
      }
    }
    setItem("");
  };

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success"); // "success", "error", "warning", "info"

  return (
    <div className="todo-box">
      <div className="heading">Atrangi To Do List 📝</div>
      <form className="in-box" onSubmit={postdata}>
        <input
          type="text"
          className="in"
          value={item}
          placeholder="Add Item to do"
          onChange={inputEvent}
        />

        <button className="in-btn" type="submit">
          +
        </button>
      </form>

      <div className="list-box">
        {itemlist.map((e, i) => {
          return (
            <div key={e._id} className="list-item-box">
              <label>{e.item}</label>
              <button className="delete-btn" value={e._id} onClick={deleteData}>
                x
              </button>
            </div>
          );
        })}
      </div>

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
    </div>
  );
};

export default Todo;
