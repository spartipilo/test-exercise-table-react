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
  });
  
  //RICHIAMO API AL CLICK DEL BUTTON - MOSTRO TABELLA
  const usersList = () => {
    Axios.get("https://jsonplaceholder.typicode.com/users").then((el) => {
      setState({ ...state, data: el.data });
    });
  };

  //RICHIAMO DATI DELLE SINGOLE PERSONE TRAMITE IL TASTO "DETTAGLI"
  const detailUser = (id) => {
    Axios.get(`https://jsonplaceholder.typicode.com/users/` + id).then((el) => {
      setState({ ...state, show: true, detailUser: el.data });
    });
  };

  //SERVE PER AGGIORNARE LO STATO "SHOW" SE FALSE O TRUE SULLA FINESTRA DETTAGLI - SE CHIUSA O MENO
  const modalClose = (isClosed) => setState({ ...state, show: isClosed });

  return (
    <div>
      <div className="button__container">
        <Button
          className="button__showTable"
          onClick={usersList}
          variant={state.data.length !== 0 ? 'secondary' : 'primary'}
          disabled={state.data.length !== 0}
        >
          Show table
        </Button>
      </div>
      {state.data.length !== 0 ? (
        <TableLayout {...state} details={detailUser} />
      ) : null}

      <ModalCard {...state} isClosed={modalClose} />
    </div>
  );
}

export default App;
