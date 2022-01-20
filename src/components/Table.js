import React from "react";
import { Button, Table } from "react-bootstrap";
import "../styles/table.css"

function TableLayout({ details, data }) {
  return (
    <Table hover className="table">
      <thead className="thead-dark">
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>City</th>
          <th>Personal Website</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {data.map((el) => {
          return (
            <tr key={el.id}>
              <td>{el.name}</td>
              <td>{el.username}</td>
              <td>{el.email}</td>
              <td>{el.address.city}</td>
              <td>{el.website}</td>
              <td>
                <Button onClick={() => details(el.id)} variant="primary">
                  Detalis
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
}

export default TableLayout;
