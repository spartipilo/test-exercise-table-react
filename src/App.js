import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Axios from "axios";
import ModalCard from "./components/ModalCard";
import TableLayout from "./components/Table";
import "./App.css";

function App() {
  const [state, setState] = useState({
    data: [],
    show: false,
    detailUser: {},
    windowResize: window.innerWidth,
  });
  const usersList = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((el) => {
      setState({ ...state, data: el.data });
    });
  };
  const detailUser = (id) => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/` + id).then((el) => {
      setState({ ...state, show: true, detailUser: el.data });
    });
  };
  const modalClose = (isClosed) => setState({ ...state, show: isClosed });

  return (
    <div>
      <div className="button__container">
        <Button
          className="button__showTable"
          onClick={usersList}
          variant="primary"
        >
          Show table
        </Button>
      </div>
      <TableLayout {...state} details={detailUser} />
      <ModalCard {...state} isClosed={modalClose} />
    </div>
  );
}

export default App;
